import './style.css';
import { ROADMAP_PHASES } from './data';
import type {
  AudioLangMode,
  BadgeType,
  FilterType,
  FlatRoadmapNode,
  NodeStatus,
  NodeTier,
  RoadmapNode,
  SpeechSegment,
  TodoStats,
} from './types';

const STORAGE_KEY = 'thp_unmul_roadmap_statuses_v4';
const TODO_STORAGE_KEY = 'thp_unmul_roadmap_todos_v4';
const THEME_KEY = 'thp_unmul_roadmap_theme_v1';

// Flatten seluruh node untuk pencarian cepat, navigasi Prev/Next, dan hitung progres
const allNodesFlat: FlatRoadmapNode[] = [];
ROADMAP_PHASES.forEach((phase, pIdx) => {
  const phaseNum = pIdx + 1;
  if (phase.spine) {
    allNodesFlat.push({ ...phase.spine, phaseIndex: phaseNum });
  }
  const branches = [...(phase.left ?? []), ...(phase.right ?? [])];
  branches.forEach((branch) => {
    allNodesFlat.push({ ...branch, phaseIndex: phaseNum });
    if (Array.isArray(branch.subBranches)) {
      branch.subBranches.forEach((sb) => {
        allNodesFlat.push({
          ...sb,
          phaseIndex: phaseNum,
          parentTitle: branch.title,
        });
      });
    }
  });
});

// State Aplikasi
let nodeStatuses: Record<string, NodeStatus> = {};
let todoChecks: Record<string, boolean> = {};
let activeFilter: FilterType = 'all';
let currentSelectedNodeId: string | null = null;

// Audio State
let isSpeaking = false;
let preferredAudioLang: AudioLangMode = 'bilingual';
let speechQueue: SpeechSegment[] = [];
let currentQueueIndex = 0;

// ---------------------------------------------------------------------------
// 1. LOCAL STORAGE PERSISTENCE
// ---------------------------------------------------------------------------
function loadState(): void {
  try {
    nodeStatuses = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, NodeStatus>;
    todoChecks = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) ?? '{}') as Record<string, boolean>;
  } catch {
    nodeStatuses = {};
    todoChecks = {};
  }
}

function saveState(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nodeStatuses));
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todoChecks));
  } catch (e) {
    console.warn('Gagal menyimpan progres:', e);
  }
}

function getNodeStatus(nodeId: string): NodeStatus {
  return nodeStatuses[nodeId] ?? 'pending';
}

function setNodeStatus(nodeId: string, status: NodeStatus): void {
  nodeStatuses[nodeId] = status;
  saveState();
  renderRoadmap();
  if (currentSelectedNodeId === nodeId) {
    updateDrawerStatusButtons(status);
  }
}

function getNodeTodoStats(node: RoadmapNode): TodoStats {
  const todos = node.todos ?? [];
  const total = todos.length;
  if (total === 0) return { done: 0, total: 0, pct: 0 };
  let done = 0;
  todos.forEach((_, idx) => {
    if (todoChecks[`${node.id}_${idx}`]) done++;
  });
  return { done, total, pct: Math.round((done / total) * 100) };
}

function toggleTodoItem(nodeId: string, idx: number): void {
  const key = `${nodeId}_${idx}`;
  todoChecks[key] = !todoChecks[key];
  saveState();

  const node = allNodesFlat.find((n) => n.id === nodeId);
  if (node) {
    const stats = getNodeTodoStats(node);
    if (stats.done === stats.total && stats.total > 0) {
      nodeStatuses[nodeId] = 'done';
    } else if (stats.done > 0 && getNodeStatus(nodeId) === 'pending') {
      nodeStatuses[nodeId] = 'progress';
    }
    saveState();
    renderRoadmap();
    if (currentSelectedNodeId === nodeId) {
      renderDrawerTodos(node);
      updateDrawerStatusButtons(getNodeStatus(nodeId));
    }
  }
}

// ---------------------------------------------------------------------------
// 2. AUDIO TEXT-TO-SPEECH CONTROLLER (BILINGUAL)
// ---------------------------------------------------------------------------
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

function getBestVoice(langCode: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices) return null;
  if (voices.length === 0) return null;

  const isIndo = langCode.toLowerCase().startsWith('id');
  const matching = voices.filter((v) => {
    const lang = v.lang.toLowerCase();
    if (isIndo) return lang.includes('id');
    return lang.startsWith('en');
  });

  if (matching.length === 0) return null;

  const preferred = isIndo
    ? ['google', 'natural', 'gadis', 'ardi', 'damayanti', 'microsoft']
    : ['natural', 'google us english', 'google uk english', 'aria', 'jenny', 'guy', 'samantha', 'microsoft'];

  for (const kw of preferred) {
    const found = matching.find((v) => v.name.toLowerCase().includes(kw));
    if (found) return found;
  }
  return matching[0];
}

function cleanTextForSpeech(text: string): string {
  return text
    .replace(/→/g, ', kemudian ')
    .replace(/&/g, ' dan ')
    .replace(/\//g, ' atau ')
    .replace(/°C/g, ' derajat Celcius ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stopAudioExplanation(): void {
  speechQueue = [];
  currentQueueIndex = 0;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;

  const btnText = document.getElementById('playAudioText');
  const btnIcon = document.getElementById('playAudioIcon');
  const statusBadge = document.getElementById('audioStatusBadge');

  if (btnText) btnText.textContent = 'Dengarkan Penjelasan';
  if (btnIcon) btnIcon.textContent = '🔊';
  if (statusBadge) statusBadge.textContent = 'Siap Diputar';
}

function buildAudioSegments(node: FlatRoadmapNode): SpeechSegment[] {
  const segments: SpeechSegment[] = [
    {
      lang: 'id-ID',
      label: '🇮🇩 Pengantar Topik...',
      text: cleanTextForSpeech(`Halo! Mari kita pelajari topik: ${node.title}. Intinya adalah ${node.subtitle}.`),
    },
  ];

  if (Array.isArray(node.visualSteps) && node.visualSteps.length > 0) {
    segments.push({
      lang: 'id-ID',
      label: '🇮🇩 Alur Visual...',
      text: 'Sekarang, bayangkan alur prosesnya secara visual dari awal sampai akhir.',
    });
    node.visualSteps.forEach((step, idx) => {
      segments.push({
        lang: 'id-ID',
        label: `🇮🇩 Langkah ${idx + 1}...`,
        text: cleanTextForSpeech(`Langkah ke-${idx + 1}: ${step}.`),
      });
    });
  }

  if (Array.isArray(node.syllabus) && node.syllabus.length > 0) {
    segments.push({
      lang: 'id-ID',
      label: '🇮🇩 Kamus Istilah Ilmiah...',
      text: 'Selanjutnya, mari kita bedah satu per satu istilah ilmiah pentingnya.',
    });
    node.syllabus.forEach((s, idx) => {
      const matchParen = s.topic.match(/^([^(]+)\(([^)]+)\)/);
      const englishTerm = matchParen ? matchParen[1].trim() : s.topic;
      const indoTerm = matchParen ? matchParen[2].trim() : '';

      if (preferredAudioLang === 'bilingual') {
        segments.push({
          lang: 'id-ID',
          label: `🇮🇩 Istilah ke-${idx + 1}...`,
          text: `Istilah ke-${idx + 1}, dalam bahasa Inggris dibaca:`,
        });
        segments.push({
          lang: 'en-US',
          label: '🇬🇧 Pelafalan Inggris...',
          text: cleanTextForSpeech(englishTerm),
        });
        const indoDesc = indoTerm
          ? `Dalam bahasa Indonesia artinya ${indoTerm}. Penjelasannya begini: ${s.detail}`
          : `Penjelasannya begini: ${s.detail}`;
        segments.push({
          lang: 'id-ID',
          label: '🇮🇩 Arti & Penjelasan...',
          text: cleanTextForSpeech(indoDesc),
        });
      } else {
        const fullIndo = indoTerm
          ? `Istilah ke-${idx + 1}, ${indoTerm}, atau ${englishTerm}. Penjelasannya adalah: ${s.detail}`
          : `Istilah ke-${idx + 1}, ${englishTerm}. Penjelasannya adalah: ${s.detail}`;
        segments.push({
          lang: 'id-ID',
          label: `🇮🇩 Istilah ${idx + 1}...`,
          text: cleanTextForSpeech(fullIndo),
        });
      }
    });
  }

  if (node.tips) {
    segments.push({
      lang: 'id-ID',
      label: '🇮🇩 Tips Strategis...',
      text: cleanTextForSpeech(`Catatan penting untukmu: ${node.tips}`),
    });
  }

  return segments;
}

function speakNextInQueue(): void {
  if (!isSpeaking) {
    stopAudioExplanation();
    return;
  }
  if (currentQueueIndex >= speechQueue.length) {
    stopAudioExplanation();
    return;
  }

  const item = speechQueue[currentQueueIndex];
  const utterance = new SpeechSynthesisUtterance(item.text);
  utterance.lang = item.lang;
  utterance.rate = item.lang === 'en-US' ? 0.9 : 1.02;
  utterance.pitch = 1.03;

  const voice = getBestVoice(item.lang);
  if (voice) utterance.voice = voice;

  const statusBadge = document.getElementById('audioStatusBadge');
  if (statusBadge) statusBadge.textContent = item.label;

  utterance.onend = () => {
    currentQueueIndex++;
    window.setTimeout(() => {
      if (isSpeaking) speakNextInQueue();
    }, 220);
  };

  utterance.onerror = () => {
    currentQueueIndex++;
    speakNextInQueue();
  };

  window.speechSynthesis.speak(utterance);
}

function playAudioExplanation(node: FlatRoadmapNode): void {
  const statusBadge = document.getElementById('audioStatusBadge');
  if (!('speechSynthesis' in window)) {
    if (statusBadge) statusBadge.textContent = 'Browser tidak mendukung audio';
    return;
  }
  if (isSpeaking) {
    stopAudioExplanation();
    return;
  }

  window.speechSynthesis.cancel();
  speechQueue = buildAudioSegments(node);
  currentQueueIndex = 0;
  isSpeaking = true;

  const btnText = document.getElementById('playAudioText');
  const btnIcon = document.getElementById('playAudioIcon');
  if (btnText) btnText.textContent = 'Hentikan Audio';
  if (btnIcon) btnIcon.textContent = '⏹️';

  speakNextInQueue();
}

// ---------------------------------------------------------------------------
// 3. THEME & VIEW RENDERING
// ---------------------------------------------------------------------------
function initTheme(): void {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseDark = saved === 'dark' ? true : !saved && prefersDark;

  if (shouldUseDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme(): void {
  const isDark = document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light', !isDark);
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  requestAnimationFrame(drawConnectors);
}

function getBadgeClasses(type: BadgeType): string {
  switch (type) {
    case 'samarinda':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-700';
    case 'global':
      return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700';
    case 'leverage':
      return 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-700';
    default:
      return 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600';
  }
}

function shouldHighlightNode(node: RoadmapNode): boolean {
  if (activeFilter === 'all') return true;
  if (activeFilter === 'spine') return node.category === 'spine';
  return node.badgeType === activeFilter;
}

function createNodeCardHTML(node: RoadmapNode, tier: NodeTier = 'branch'): string {
  const status = getNodeStatus(node.id);
  const isMatch = shouldHighlightNode(node);

  let tierClass =
    tier === 'spine' ? 'node-spine' : tier === 'subbranch' ? 'node-subbranch' : 'node-branch';
  if (status === 'done') tierClass += ' node-done';
  else if (status === 'progress') tierClass += ' node-progress';

  const dimClass = isMatch ? '' : 'node-dimmed';

  let statusIcon =
    '<span class="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-slate-400/70 dark:border-slate-500 text-transparent group-hover:border-slate-700 transition shrink-0"></span>';
  if (status === 'done') {
    statusIcon =
      '<span class="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-bold shrink-0" title="Selesai">✓</span>';
  } else if (status === 'progress') {
    statusIcon =
      '<span class="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 text-white text-[9px] sm:text-[10px] font-bold shrink-0 animate-pulse" title="Dipelajari">•••</span>';
  }

  const todoStats = getNodeTodoStats(node);
  const todoBadge =
    todoStats.total > 0
      ? `<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300">☑ ${todoStats.done}/${todoStats.total}</span>`
      : '';

  const padClass = tier === 'subbranch' ? 'p-2.5 sm:p-3' : 'p-3.5 sm:p-4';
  const titleClass =
    tier === 'spine' ? 'text-sm sm:text-base' : tier === 'subbranch' ? 'text-xs sm:text-[13px]' : 'text-xs sm:text-sm';

  return `
    <div
      id="node-${node.id}"
      data-node-id="${node.id}"
      role="button"
      tabindex="0"
      class="rm-node group cursor-pointer rounded-xl ${padClass} text-left select-none relative ${tierClass} ${dimClass} ${tier === 'spine' ? 'w-full max-w-md mx-auto' : 'w-full'}"
    >
      <div class="flex items-start justify-between gap-2">
        <div class="flex-grow">
          <div class="flex flex-wrap items-center gap-1.5 mb-1">
            <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getBadgeClasses(node.badgeType)}">
              ${node.badgeText}
            </span>
            ${todoBadge}
            <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              🎧 Visual
            </span>
          </div>
          <h3 class="node-title-text font-extrabold ${titleClass} leading-snug">
            ${node.title}
          </h3>
          <p class="text-[11px] opacity-80 mt-0.5 font-medium">
            ${node.subtitle}
          </p>
        </div>
        <button
          type="button"
          data-quick-check="${node.id}"
          title="Tandai Selesai / Belum"
          class="mt-0.5 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
        >
          ${statusIcon}
        </button>
      </div>
    </div>
  `;
}

function renderBranchGroupHTML(branchNode: RoadmapNode, side: 'left' | 'right'): string {
  const subs = Array.isArray(branchNode.subBranches) ? branchNode.subBranches : [];
  const subHTML =
    subs.length > 0
      ? `<div class="mt-2.5 ml-6 sm:ml-8 space-y-2 relative">${subs.map((sb) => createNodeCardHTML(sb, 'subbranch')).join('')}</div>`
      : '';

  return `
    <div class="branch-cluster" data-parent-id="${branchNode.id}" data-side="${side}">
      ${createNodeCardHTML(branchNode, 'branch')}
      ${subHTML}
    </div>
  `;
}

function renderRoadmap(): void {
  const container = document.getElementById('phasesContainer');
  if (!container) return;

  if (ROADMAP_PHASES.length === 0) {
    updateProgressUI();
    return;
  }

  container.innerHTML = ROADMAP_PHASES.map((phase) => {
    const leftHTML = (phase.left ?? []).map((n) => renderBranchGroupHTML(n, 'left')).join('');
    const rightHTML = (phase.right ?? []).map((n) => renderBranchGroupHTML(n, 'right')).join('');

    return `
      <section id="${phase.id}" class="relative">
        <div class="mb-6 lg:mb-8 relative z-10">
          ${createNodeCardHTML(phase.spine, 'spine')}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-start pl-6 lg:pl-0">
          <div class="space-y-5">${leftHTML}</div>
          <div class="space-y-5">${rightHTML}</div>
        </div>
      </section>
    `;
  }).join('');

  attachNodeListeners();
  updateProgressUI();
  requestAnimationFrame(drawConnectors);
}

function drawConnectors(): void {
  const svg = document.getElementById('roadmapSvg') as SVGSVGElement | null;
  const wrapper = document.getElementById('roadmapWrapper');
  if (!svg) return;
  if (!wrapper) return;
  if (ROADMAP_PHASES.length === 0) return;

  const wrapRect = wrapper.getBoundingClientRect();
  const isDark = document.documentElement.classList.contains('dark');
  const spineColor = isDark ? '#FACC15' : '#0F172A';
  const branchColor = isDark ? '#64748B' : '#475569';
  const subBranchColor = isDark ? '#38BDF8' : '#0284C7';
  const isDesktop = window.innerWidth >= 1024;

  let pathsHTML = '';

  ROADMAP_PHASES.forEach((phase, idx) => {
    const spineEl = document.getElementById(`node-${phase.spine.id}`);
    if (!spineEl) return;

    const sRect = spineEl.getBoundingClientRect();
    const sCenterX = sRect.left + sRect.width / 2 - wrapRect.left;
    const sBottomY = sRect.bottom - wrapRect.top;

    // Garis Spine ke Fase Berikutnya
    if (idx < ROADMAP_PHASES.length - 1) {
      const nextSpineEl = document.getElementById(`node-${ROADMAP_PHASES[idx + 1].spine.id}`);
      if (nextSpineEl) {
        const nRect = nextSpineEl.getBoundingClientRect();
        const nTopY = nRect.top - wrapRect.top;
        pathsHTML += `<line x1="${sCenterX}" y1="${sBottomY}" x2="${sCenterX}" y2="${nTopY}" stroke="${spineColor}" stroke-width="3" stroke-linecap="round" />`;
      }
    }

    // Garis Cabang ke Sub-Cabang
    const allPhaseBranches = [...(phase.left ?? []), ...(phase.right ?? [])];
    allPhaseBranches.forEach((parentNode) => {
      if (!Array.isArray(parentNode.subBranches)) return;
      if (parentNode.subBranches.length === 0) return;

      const pEl = document.getElementById(`node-${parentNode.id}`);
      if (!pEl) return;

      const pRect = pEl.getBoundingClientRect();
      const trunkX = pRect.left - wrapRect.left + 14;
      const startY = pRect.bottom - wrapRect.top;

      const lastSub = parentNode.subBranches[parentNode.subBranches.length - 1];
      const lastSubEl = document.getElementById(`node-${lastSub.id}`);
      if (!lastSubEl) return;
      const lastSubRect = lastSubEl.getBoundingClientRect();
      const endY = lastSubRect.top + lastSubRect.height / 2 - wrapRect.top;

      pathsHTML += `<line x1="${trunkX}" y1="${startY}" x2="${trunkX}" y2="${endY}" stroke="${subBranchColor}" stroke-width="2" stroke-linecap="round" />`;

      parentNode.subBranches.forEach((sb) => {
        const sbEl = document.getElementById(`node-${sb.id}`);
        if (!sbEl) return;
        const sbRect = sbEl.getBoundingClientRect();
        const targetX = sbRect.left - wrapRect.left;
        const targetY = sbRect.top + sbRect.height / 2 - wrapRect.top;

        pathsHTML += `
          <path d="M ${trunkX} ${targetY - 6} Q ${trunkX} ${targetY} ${trunkX + 6} ${targetY} L ${targetX} ${targetY}" fill="none" stroke="${subBranchColor}" stroke-width="2" stroke-linecap="round" />
          <circle cx="${targetX}" cy="${targetY}" r="3" fill="${subBranchColor}" />
        `;
      });
    });

    if (isDesktop) {
      (phase.left ?? []).forEach((child) => {
        const cEl = document.getElementById(`node-${child.id}`);
        if (!cEl) return;
        const cRect = cEl.getBoundingClientRect();
        const targetX = cRect.right - wrapRect.left;
        const targetY = cRect.top + cRect.height / 2 - wrapRect.top;
        pathsHTML += `
          <path d="M ${sCenterX} ${sBottomY} L ${sCenterX} ${targetY - 12} Q ${sCenterX} ${targetY} ${sCenterX - 12} ${targetY} L ${targetX} ${targetY}" fill="none" stroke="${branchColor}" stroke-width="2" stroke-dasharray="5,4" stroke-linecap="round" />
          <circle cx="${targetX}" cy="${targetY}" r="3.5" fill="${branchColor}" />
        `;
      });

      (phase.right ?? []).forEach((child) => {
        const cEl = document.getElementById(`node-${child.id}`);
        if (!cEl) return;
        const cRect = cEl.getBoundingClientRect();
        const targetX = cRect.left - wrapRect.left;
        const targetY = cRect.top + cRect.height / 2 - wrapRect.top;
        pathsHTML += `
          <path d="M ${sCenterX} ${sBottomY} L ${sCenterX} ${targetY - 12} Q ${sCenterX} ${targetY} ${sCenterX + 12} ${targetY} L ${targetX} ${targetY}" fill="none" stroke="${branchColor}" stroke-width="2" stroke-dasharray="5,4" stroke-linecap="round" />
          <circle cx="${targetX}" cy="${targetY}" r="3.5" fill="${branchColor}" />
        `;
      });
    } else if (allPhaseBranches.length > 0) {
      const firstChildEl = document.getElementById(`node-${allPhaseBranches[0].id}`);
      const lastChildEl = document.getElementById(`node-${allPhaseBranches[allPhaseBranches.length - 1].id}`);
      if (firstChildEl && lastChildEl) {
        const firstRect = firstChildEl.getBoundingClientRect();
        const lastRect = lastChildEl.getBoundingClientRect();
        const trunkX = firstRect.left - wrapRect.left - 12;
        const lastMidY = lastRect.top + lastRect.height / 2 - wrapRect.top;

        pathsHTML += `<path d="M ${sCenterX} ${sBottomY} L ${sCenterX} ${sBottomY + 10} L ${trunkX} ${sBottomY + 10} L ${trunkX} ${lastMidY}" fill="none" stroke="${branchColor}" stroke-width="2" stroke-dasharray="4,4" />`;

        allPhaseBranches.forEach((child) => {
          const cEl = document.getElementById(`node-${child.id}`);
          if (!cEl) return;
          const cRect = cEl.getBoundingClientRect();
          const targetX = cRect.left - wrapRect.left;
          const targetY = cRect.top + cRect.height / 2 - wrapRect.top;
          pathsHTML += `
            <line x1="${trunkX}" y1="${targetY}" x2="${targetX}" y2="${targetY}" stroke="${branchColor}" stroke-width="2" stroke-dasharray="4,4" />
            <circle cx="${targetX}" cy="${targetY}" r="3" fill="${branchColor}" />
          `;
        });
      }
    }
  });

  svg.innerHTML = pathsHTML;
}

// ---------------------------------------------------------------------------
// 4. SLIDE-OVER DRAWER & INTERACTION CONTROLLERS
// ---------------------------------------------------------------------------
function renderDrawerTodos(node: RoadmapNode): void {
  const todoListEl = document.getElementById('drawerTodoList');
  const progressTextEl = document.getElementById('drawerTodoProgressText');
  const progressBarEl = document.getElementById('drawerTodoProgressBar');
  if (!todoListEl) return;

  const stats = getNodeTodoStats(node);
  if (progressTextEl) progressTextEl.textContent = `${stats.pct}% (${stats.done}/${stats.total})`;
  if (progressBarEl) progressBarEl.style.width = `${stats.pct}%`;

  todoListEl.innerHTML = (node.todos ?? [])
    .map((todoText, idx) => {
      const isChecked = !!todoChecks[`${node.id}_${idx}`];
      return `
        <label class="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition select-none ${
          isChecked
            ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-slate-500 dark:text-slate-400'
            : 'bg-white dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 text-slate-800 dark:text-slate-200'
        }">
          <input type="checkbox" data-todo-idx="${idx}" ${isChecked ? 'checked' : ''} class="mt-1 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer shrink-0" />
          <span class="text-xs sm:text-sm leading-relaxed ${isChecked ? 'line-through opacity-80' : 'font-medium'}">${todoText}</span>
        </label>
      `;
    })
    .join('');

  todoListEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const idx = parseInt(target.getAttribute('data-todo-idx') ?? '0', 10);
      toggleTodoItem(node.id, idx);
    });
  });
}

function updateDrawerStatusButtons(activeStatus: NodeStatus): void {
  document.querySelectorAll('.status-opt').forEach((btn) => {
    const st = btn.getAttribute('data-status') as NodeStatus | null;
    btn.className = 'status-opt px-2.5 py-1 rounded-md text-xs font-semibold transition ';
    if (st === activeStatus) {
      if (st === 'done') btn.className += 'bg-emerald-600 text-white shadow-xs';
      else if (st === 'progress') btn.className += 'bg-blue-600 text-white shadow-xs';
      else btn.className += 'bg-slate-800 text-white dark:bg-slate-700 shadow-xs';
    } else {
      btn.className += 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800';
    }
  });
}

function openDrawer(nodeId: string): void {
  const node = allNodesFlat.find((n) => n.id === nodeId);
  const drawer = document.getElementById('detailDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (!node) return;
  if (!drawer) return;
  if (!backdrop) return;

  stopAudioExplanation();
  currentSelectedNodeId = nodeId;

  const badgesEl = document.getElementById('drawerBadges');
  if (badgesEl) {
    const parentBadgeHTML = node.parentTitle
      ? `<span class="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">↳ ${node.parentTitle}</span>`
      : '';
    badgesEl.innerHTML = `
      <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-400 text-slate-950 border border-slate-900">FASE ${node.phaseIndex}</span>
      <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${getBadgeClasses(node.badgeType)}">${node.badgeText}</span>
      ${parentBadgeHTML}
    `;
  }

  const titleEl = document.getElementById('drawerTitle');
  const keywordsPreviewEl = document.getElementById('drawerKeywordsPreview');
  const ytBtn = document.getElementById('youtubeVisualBtn') as HTMLAnchorElement | null;
  const copyLabelEl = document.getElementById('copyKeywordsLabel');

  if (titleEl) titleEl.textContent = node.title;
  if (keywordsPreviewEl) keywordsPreviewEl.textContent = node.keywords ?? '';
  if (ytBtn) {
    ytBtn.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(node.keywords ?? node.title)}`;
  }
  if (copyLabelEl) copyLabelEl.textContent = 'Copy Keyword';

  const visualFlowEl = document.getElementById('drawerVisualFlow');
  if (visualFlowEl) {
    const steps = node.visualSteps ?? [];
    visualFlowEl.innerHTML =
      steps.length > 0
        ? `<div class="space-y-1.5">${steps
            .map(
              (step, idx) => `
          <div class="flex items-start gap-2.5">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-600 text-white font-mono text-[11px] font-bold shrink-0 mt-0.5">${idx + 1}</span>
            <div class="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/70 px-2.5 py-1.5 rounded-lg border border-cyan-200 dark:border-cyan-800/70 flex-grow">${step}</div>
          </div>
          ${idx < steps.length - 1 ? '<div class="pl-2.5 text-cyan-600 dark:text-cyan-400 text-xs font-bold leading-none">↓</div>' : ''}
        `
            )
            .join('')}</div>`
        : '<p class="text-xs text-slate-500">Belum ada diagram visual.</p>';
  }

  const syllabusEl = document.getElementById('drawerSyllabus');
  if (syllabusEl) {
    syllabusEl.innerHTML = (node.syllabus ?? [])
      .map(
        (item) => `
      <div class="pb-2.5 border-b border-blue-200/70 dark:border-blue-800/50 last:border-b-0 last:pb-0">
        <div class="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-mono font-bold text-xs">📌 ${item.topic}</div>
        <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">${item.detail}</p>
      </div>
    `
      )
      .join('');
  }

  renderDrawerTodos(node);

  const outputEl = document.getElementById('drawerOutput');
  const tipsEl = document.getElementById('drawerTips');
  if (outputEl) outputEl.textContent = node.output ?? '-';
  if (tipsEl) tipsEl.textContent = node.tips ?? '-';

  updateDrawerStatusButtons(getNodeStatus(nodeId));

  const idx = allNodesFlat.findIndex((n) => n.id === nodeId);
  const prevBtn = document.getElementById('prevNodeBtn') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('nextNodeBtn') as HTMLButtonElement | null;
  if (prevBtn) {
    prevBtn.disabled = idx <= 0;
    prevBtn.style.opacity = idx <= 0 ? '0.4' : '1';
  }
  if (nextBtn) {
    nextBtn.disabled = idx >= allNodesFlat.length - 1;
    nextBtn.style.opacity = idx >= allNodesFlat.length - 1 ? '0.4' : '1';
  }

  backdrop.classList.remove('hidden');
  requestAnimationFrame(() => {
    backdrop.classList.remove('opacity-0');
    drawer.classList.remove('translate-x-full');
  });
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer(): void {
  const drawer = document.getElementById('detailDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (!drawer) return;
  if (!backdrop) return;

  stopAudioExplanation();
  backdrop.classList.add('opacity-0');
  drawer.classList.add('translate-x-full');
  drawer.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => backdrop.classList.add('hidden'), 220);
  currentSelectedNodeId = null;
}

function updateProgressUI(): void {
  const total = allNodesFlat.length;
  const doneCount = allNodesFlat.filter((n) => getNodeStatus(n.id) === 'done').length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');
  if (progressText) progressText.textContent = `${pct}% (${doneCount}/${total})`;
  if (progressBar) progressBar.style.width = `${pct}%`;
}

function attachNodeListeners(): void {
  document.querySelectorAll('.rm-node').forEach((card) => {
    card.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const quickBtn = target.closest('[data-quick-check]');
      if (quickBtn) {
        e.stopPropagation();
        const id = quickBtn.getAttribute('data-quick-check');
        if (id) {
          setNodeStatus(id, getNodeStatus(id) === 'done' ? 'pending' : 'done');
        }
        return;
      }
      const nodeId = card.getAttribute('data-node-id');
      if (nodeId) openDrawer(nodeId);
    });

    card.addEventListener('keydown', (e) => {
      const kbEvent = e as KeyboardEvent;
      if (['Enter', ' '].includes(kbEvent.key)) {
        kbEvent.preventDefault();
        const nodeId = card.getAttribute('data-node-id');
        if (nodeId) openDrawer(nodeId);
      }
    });
  });
}

function copyKeywordsFallback(text: string): void {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

// ---------------------------------------------------------------------------
// 5. EVENT BINDINGS & APP INITIALIZATION
// ---------------------------------------------------------------------------
function bindEvents(): void {
  const drawer = document.getElementById('detailDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const resetModal = document.getElementById('resetModal');

  document.getElementById('playAudioBtn')?.addEventListener('click', () => {
    if (!currentSelectedNodeId) return;
    const node = allNodesFlat.find((n) => n.id === currentSelectedNodeId);
    if (node) playAudioExplanation(node);
  });

  document.querySelectorAll('.audio-lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-audio-lang') as AudioLangMode | null;
      if (!selected) return;
      preferredAudioLang = selected;
      document.querySelectorAll('.audio-lang-btn').forEach((b) => {
        b.className =
          b.getAttribute('data-audio-lang') === preferredAudioLang
            ? 'audio-lang-btn px-2.5 py-1 rounded bg-indigo-600 text-white shadow-2xs transition'
            : 'audio-lang-btn px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 transition';
      });
      if (isSpeaking) stopAudioExplanation();
    });
  });

  document.getElementById('copyKeywordsBtn')?.addEventListener('click', async () => {
    if (!currentSelectedNodeId) return;
    const node = allNodesFlat.find((n) => n.id === currentSelectedNodeId);
    if (!node) return;
    if (!node.keywords) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(node.keywords);
      } else {
        copyKeywordsFallback(node.keywords);
      }
      const label = document.getElementById('copyKeywordsLabel');
      if (label) {
        label.textContent = '✓ Tersalin!';
        window.setTimeout(() => {
          label.textContent = 'Copy Keyword';
        }, 1800);
      }
    } catch {
      copyKeywordsFallback(node.keywords);
    }
  });

  document.querySelectorAll('.status-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const status = btn.getAttribute('data-status') as NodeStatus | null;
      if (currentSelectedNodeId && status) {
        setNodeStatus(currentSelectedNodeId, status);
      }
    });
  });

  document.getElementById('prevNodeBtn')?.addEventListener('click', () => {
    const idx = allNodesFlat.findIndex((n) => n.id === currentSelectedNodeId);
    if (idx > 0) openDrawer(allNodesFlat[idx - 1].id);
  });

  document.getElementById('nextNodeBtn')?.addEventListener('click', () => {
    const idx = allNodesFlat.findIndex((n) => n.id === currentSelectedNodeId);
    if (idx >= 0 && idx < allNodesFlat.length - 1) openDrawer(allNodesFlat[idx + 1].id);
  });

  document.getElementById('closeDrawerBtn')?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') as FilterType | null;
      if (!filter) return;
      activeFilter = filter;
      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('ring-2', 'ring-offset-1', 'ring-slate-900', 'dark:ring-amber-400', 'font-extrabold');
      });
      btn.classList.add('ring-2', 'ring-offset-1', 'ring-slate-900', 'dark:ring-amber-400', 'font-extrabold');
      renderRoadmap();
    });
  });

  document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
    resetModal?.classList.remove('hidden');
    resetModal?.classList.add('flex');
  });

  document.getElementById('cancelResetBtn')?.addEventListener('click', () => {
    resetModal?.classList.add('hidden');
    resetModal?.classList.remove('flex');
  });

  document.getElementById('confirmResetBtn')?.addEventListener('click', () => {
    nodeStatuses = {};
    todoChecks = {};
    saveState();
    renderRoadmap();
    if (currentSelectedNodeId) openDrawer(currentSelectedNodeId);
    resetModal?.classList.add('hidden');
    resetModal?.classList.remove('flex');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawer && !drawer.classList.contains('translate-x-full')) closeDrawer();
      resetModal?.classList.add('hidden');
      resetModal?.classList.remove('flex');
    }
  });

  document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);
  document.getElementById('themeToggleDesktop')?.addEventListener('click', toggleTheme);

  let resizeTimer: number | undefined;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => requestAnimationFrame(drawConnectors), 60);
  });
}

function initApp(): void {
  initTheme();
  loadState();
  bindEvents();
  renderRoadmap();
  window.setTimeout(drawConnectors, 150);
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}