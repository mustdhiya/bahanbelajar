/**
 * ============================================================================
 * DATA ROADMAP: TEKNOLOGI HASIL PERIKANAN (THP) FPIK UNIVERSITAS MULAWARMAN
 * Peta Jalan Hilirisasi Perikanan, Bioteknologi & Ekspor Global
 * ============================================================================
 * Cara Penggunaan:
 * Simpan file ini dengan nama "data.js" di dalam folder yang sama dengan "index.html".
 * Data otomatis dibaca oleh index.html melalui variabel global `window.ROADMAP_PHASES`.
 */

import type { RoadmapPhase } from './types';

export const ROADMAP_PHASES: RoadmapPhase[] = [
  // ==========================================================================
  // FASE 1: FONDASI SAINS PERAIRAN & BIOKIMIA IKAN (SEMESTER 1-2)
  // ==========================================================================
  {
    id: 'phase-1',
    spine: {
      id: 'p1-spine',
      category: 'spine',
      badgeText: 'FASE 1 • SEMESTER 1–2',
      badgeType: 'samarinda',
      title: 'Fondasi Sains Perairan & Biokimia Ikan',
      subtitle: 'Memahami struktur molekul daging ikan, air, dan penyebab pembusukan',
      keywords: 'fish muscle biochemistry rigor mortis ATP degradation K-value',
      visualSteps: [
        'Ikan hidup (energi ATP penuh, pH netral ~7,0, otot lentur) → Ditangkap & mati',
        'Fase Pre-Rigor (otot masih lembut & elastis) → Fase Rigor Mortis (tubuh kaku karena ikatan aktomiosin)',
        'Fase Post-Rigor (enzim autolisis memecah protein & lemak) → Bakteri pembusuk berkembang biak'
      ],
      syllabus: [
        {
          topic: 'Post-Mortem Biochemistry (Biokimia Pascamati Ikan)',
          detail: 'Perubahan reaksi kimia di dalam otot ikan tepat setelah ikan mati. Karena suplai oksigen berhenti, cadangan glikogen diubah secara anaerob menjadi asam laktat sehingga pH daging turun dari ~7,0 menjadi 6,2–6,5.'
        },
        {
          topic: 'Rigor Mortis (Kekakuan Tubuh Ikan)',
          detail: 'Kondisi tubuh ikan menjadi kaku dan keras beberapa jam setelah mati akibat habisnya energi ATP sehingga filamen protein aktin dan miosin terkunci menjadi aktomiosin. Semakin lama fase ini dipertahankan dengan es, semakin segar ikannya.'
        },
        {
          topic: 'K-Value (Indeks Kesegaran Kimiawi)',
          detail: 'Rasio hasil pemecahan ATP (Inosin dan Hipoksantin) dibandingkan total senyawa terkait ATP. Ikan kualitas sashimi atau ekspor premium wajib memiliki nilai K-Value di bawah 20%.'
        },
        {
          topic: 'Autolysis (Pemecahan Diri oleh Enzim)',
          detail: 'Proses pelunakan jaringan daging ikan dari dalam oleh enzim alami tubuh ikan sendiri (seperti katepsin dan kolagenase) sebelum bakteri dari luar mulai merusak daging.'
        }
      ],
      todos: [
        'Amati perubahan kekakuan (rigor mortis) pada ikan nila/patin segar di suhu ruang vs suhu es 0°C.',
        'Hafalkan jalur degradasi ATP → ADP → AMP → IMP (rasa gurih umami) → Inosin → Hipoksantin (penyebab rasa pahit).',
        'Kuasai dasar-dasar kimia larutan (molaritas, normalitas, pengenceran, pH, titrasi) di praktikum Kimia Dasar Unmul.'
      ],
      output: 'Laporan praktikum pengamatan fase rigor mortis dan tabel perbandingan laju kemunduran mutu ikan air tawar Kaltim.',
      tips: 'Paham biokimia dasar membuatmu langsung mengerti kenapa pabrik ekspor rela membayar mahal untuk es curai dan pembekuan cepat.'
    },
    left: [
      {
        id: 'p1-komoditas',
        category: 'branch',
        badgeText: '📍 LOKAL KALTIM',
        badgeType: 'samarinda',
        title: 'Identifikasi Komoditas Unggulan Kaltim',
        subtitle: 'Karakteristik biologis & kimia ikan Sungai Mahakam dan pesisir',
        keywords: 'Channa striata albumin content Penaeus monodon Kaltim fisheries',
        visualSteps: [
          'Perairan Umum Daratan (Sungai Mahakam, Danau Semayang & Melintang: Ikan Gabus, Patin, Toman, Jelawat)',
          'Kawasan Tambak Delta Mahakam & Muara Badak (Udang Windu Organik & Kepiting Bakau)',
          'Pesisir Bontang, Berau & Paser (Ikan Kakap, Kerapu, Tuna & Rumput Laut Eucheuma cottonii)'
        ],
        syllabus: [
          {
            topic: 'Pelagic vs Demersal Fish (Ikan Pelagis vs Ikan Demersal)',
            detail: 'Ikan pelagis (tongkol, cakalang, kembung) berenang aktif di lapisan permukaan sehingga tinggi lemak tak jenuh dan asam amino histidin. Ikan demersal (kakap, kerapu, patin) hidup di dasar perairan dengan daging putih rendah lemak.'
          },
          {
            topic: 'Sarcoplasmic Protein (Protein Sarkoplasma)',
            detail: 'Protein larut air di dalam cairan sel otot ikan (seperti mioglobin dan enzim). Ikan gabus (Channa striata) dari rawa Kaltim memiliki fraksi albumin sarkoplasma yang sangat tinggi.'
          }
        ],
        todos: [
          'Kunjungi Pasar Pagi / Pasar Segiri Samarinda dan TPI untuk mendata harga, musim panen, dan jenis ikan lokal.',
          'Bandingkan struktur serat daging merah (dark muscle) dan daging putih (white muscle) pada ikan.'
        ],
        output: 'Database pribadi profil kimia & harga bahan baku 10 komoditas utama Kalimantan Timur.',
        tips: 'Kekayaan calon pengusaha perikanan dimulai dari tahu persis di mana sumber bahan baku termurah dan paling melimpah di daerahnya.',
        subBranches: [
          {
            id: 'p1-sub-mahakam',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.1',
            badgeType: 'samarinda',
            title: 'Komoditas Perairan Darat (Mahakam)',
            subtitle: 'Ikan Gabus (Haruan), Patin, Baung & Jelawat',
            keywords: 'Channa striata Pangasius hypothalamus muscle composition',
            visualSteps: [
              'Ikan Gabus / Haruan → Tinggi protein albumin (bahan suplemen medis penyembuh luka)',
              'Ikan Patin Sungai → Kadar lemak perut tinggi (potensi minyak ikan Omega-9 & fillet beku)',
              'Ikan Jelawat & Baung → Daging putih padat bernilai ekonomi tinggi untuk restoran'
            ],
            syllabus: [
              {
                topic: 'Albumin Fraction (Fraksi Albumin Ikan Gabus)',
                detail: 'Protein globular larut air yang berfungsi mengatur tekanan osmotik darah dan mempercepat regenerasi sel jaringan luka pasca-operasi.'
              },
              {
                topic: 'Lipid Oxidation in Fatty Fish (Oksidasi Lemak Ikan Berlemak)',
                detail: 'Ikan patin memiliki kandungan lemak tinggi yang mudah bereaksi dengan oksigen udara menjadi ketengikan (rancidity) jika tidak dikemas vakum.'
              }
            ],
            todos: [
              'Bandingkan rendemen daging (edible portion) antara ikan patin dan ikan gabus segar.',
              'Catat jaringan pengepul ikan gabus di Kota Bangun, Muara Muntai, dan Danau Melintang.'
            ],
            output: 'Tabel rendemen daging dan potensi turunan produk dari 4 ikan khas Sungai Mahakam.',
            tips: 'Ikan gabus adalah "emas cair" Kalimantan Timur jika diekstrak menjadi albumin murni standar farmasi.'
          },
          {
            id: 'p1-sub-pesisir',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.2',
            badgeType: 'samarinda',
            title: 'Komoditas Pesisir & Tambak Kaltim',
            subtitle: 'Udang Windu Delta Mahakam, Kepiting & Rumput Laut',
            keywords: 'Penaeus monodon melanosis polyphenol oxidase Kappaphycus alvarezii',
            visualSteps: [
              'Udang Windu & Vaname → Rentan noda hitam (melanosis) jika suhu naik di atas 4°C',
              'Kepiting Bakau → Harus dikirim hidup (live export) atau pasteurisasi daging kaleng',
              'Rumput Laut Cottonii → Sumber karaginan (bahan pengental industri makanan & kosmetik)'
            ],
            syllabus: [
              {
                topic: 'Melanosis / Blackspot (Noda Hitam pada Udang)',
                detail: 'Reaksi pencokelatan enzimatis pada kepala dan ruas kulit udang akibat kerja enzim polifenol oksidase (PPO) saat udang terkena oksigen dan suhu hangat.'
              },
              {
                topic: 'Carrageenan Hydrocolloid (Hidrokoloid Karaginan)',
                detail: 'Senyawa polisakarida yang diekstrak dari rumput laut merah (Eucheuma cottonii) yang mampu membentuk gel kuat saat dipanaskan.'
              }
            ],
            todos: [
              'Pelajari cara mencegah blackspot pada udang menggunakan es dan natrium metabisulfit sesuai batas aman SNI.',
              'Cari data produksi rumput laut di Kabupaten Paser, Bontang, dan Berau.'
            ],
            output: 'Ringkasan protokol penanganan khusus krustasea dan rumput laut pesisir Kaltim.',
            tips: 'Udang windu organik dari tambak tradisional Delta Mahakam memiliki harga jual premium di pasar Jepang.'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p1-kimia-dasar',
        category: 'branch',
        badgeText: '🧪 LAB UNMUL',
        badgeType: 'samarinda',
        title: 'Kimia Pangan & Analisis Proksimat (AOAC)',
        subtitle: 'Mengukur komposisi gizi utama bahan pangan secara akurat',
        keywords: 'proximate analysis AOAC fish moisture protein lipid ash',
        visualSteps: [
          'Sampel Daging Ikan Dihaluskan (Homogenisasi) agar mewakili seluruh bagian tubuh',
          'Dipecah menjadi 4 Fraksi Utama: Air, Abu (Mineral), Protein, dan Lemak',
          'Data digunakan untuk menyusun Label Nutrition Facts & Formulasi Produk Ekspor'
        ],
        syllabus: [
          {
            topic: 'Proximate Analysis (Analisis Proksimat)',
            detail: 'Serangkaian uji kimia standar internasional (AOAC / SNI) untuk mengetahui persentase makronutrisi utama dalam bahan pangan: kadar air, kadar abu, protein kasar, lemak kasar, dan karbohidrat (by difference).'
          },
          {
            topic: 'Water Activity / Aw (Aktivitas Air)',
            detail: 'Jumlah air bebas di dalam makanan yang bisa dipakai mikroba untuk tumbuh (skala 0,00–1,00). Ikan segar punya Aw ~0,99; ikan asin kering harus di bawah 0,75 agar awet tanpa kulkas.'
          }
        ],
        todos: [
          'Pahami perbedaan mendasar antara Kadar Air (Moisture Content) dan Aktivitas Air (Aw).',
          'Latih ketelitian menimbang sampel menggunakan neraca analitik 4 desimal (0,0001 g) di lab.'
        ],
        output: 'Kemampuan membaca dan menghitung hasil uji proksimat sesuai SNI 01-2354.',
        tips: 'Setiap pabrik makanan dan eksportir pasti menguji proksimat untuk menjamin mutu produknya konsisten.',
        subBranches: [
          {
            id: 'p1-sub-air-abu',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.3',
            badgeType: 'samarinda',
            title: '1. Kadar Air (Oven) & Kadar Abu (Tanur)',
            subtitle: 'Metode Gravimetri penguapan air dan pembakaran mineral',
            keywords: 'gravimetric moisture oven method ash muffle furnace 550C',
            visualSteps: [
              'Cawan porselen dikeringkan di oven → Didinginkan di Desikator → Ditimbang kosong (W0)',
              'Sampel dimasukkan (W1) → Dipanaskan di Oven 105°C sampai berat konstan (Kadar Air)',
              'Sampel dibakar di Tanur (Muffle Furnace) suhu 550°C hingga jadi abu putih (Kadar Abu)'
            ],
            syllabus: [
              {
                topic: 'Gravimetry (Metode Gravimetri)',
                detail: 'Metode analisis kimia kuantitatif berdasarkan pengukuran selisih berat sampel sebelum dan sesudah proses pemanasan atau penguapan.'
              },
              {
                topic: 'Desiccator (Desikator)',
                detail: 'Wadah kaca kedap udara berisi silika gel penyerap lembap untuk mendinginkan cawan panas agar tidak menyerap uap air dari udara ruangan saat ditimbang.'
              }
            ],
            todos: [
              'Hafalkan rumus perhitungan % Kadar Air = [(W1 - W2) / (W1 - W0)] × 100%.',
              'Praktikkan penggunaan penjepit cawan (krustang) agar kelembapan sidik jari tidak menambah berat cawan.'
            ],
            output: 'Lembar kerja perhitungan kadar air dan kadar abu bebas galat penimbangan.',
            tips: 'Kesalahan menyentuh cawan dengan tangan kosong bisa mengubah hasil timbangan 4 desimal!'
          },
          {
            id: 'p1-sub-protein',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.4',
            badgeType: 'samarinda',
            title: '2. Uji Protein Metode Kjeldahl',
            subtitle: '3 Tahap: Destruksi, Destilasi, dan Titrasi Nitrogen',
            keywords: 'Kjeldahl protein determination digestion distillation titration fish',
            visualSteps: [
              'Tahap 1 Destruksi: Sampel + H2SO4 pekat dipanaskan 400°C (Protein diubah jadi Amonium Sulfat)',
              'Tahap 2 Destilasi: Ditambah NaOH pekat + dipanaskan (Gas Amonia NH3 ditangkap Asam Borat)',
              'Tahap 3 Titrasi: Dititrasi dengan HCl standar hingga berubah warna (Hitung %N × 6,25)'
            ],
            syllabus: [
              {
                topic: 'Digestion / Destruksi (Penguraian Asam Kuat)',
                detail: 'Proses pemecahan senyawa organik (karbon, hidrogen, protein) menggunakan asam sulfat pekat (H2SO4) dan katalis selenium hingga larutan berubah jernih kehijauan.'
              },
              {
                topic: 'Conversion Factor 6.25 (Faktor Konversi Nitrogen)',
                detail: 'Rata-rata protein hewani/ikan mengandung 16% unsur Nitrogen (100 / 16 = 6,25). Jadi kadar nitrogen total dikalikan 6,25 untuk mendapatkan kadar protein kasar.'
              }
            ],
            todos: [
              'Pelajari fungsi tiap reagen Kjeldahl (H2SO4, katalis selenium, NaOH 40%, Asam Borat, indikator PP/MM).',
              'Kerjakan 3 latihan soal perhitungan % Protein dari volume titrasi HCl.'
            ],
            output: 'Penguasaan penuh alur laboratorium uji protein Kjeldahl.',
            tips: 'Kjeldahl adalah metode wajib di seluruh laboratorium QC industri pangan, pakan ikan, dan ekspor.'
          },
          {
            id: 'p1-sub-lemak',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.5',
            badgeType: 'samarinda',
            title: '3. Uji Lemak Metode Soxhlet & Profil Omega-3',
            subtitle: 'Ekstraksi lemak berkelanjutan menggunakan pelarut organik',
            keywords: 'Soxhlet fat extraction hexane fish oil EPA DHA',
            visualSteps: [
              'Sampel dibungkus kertas saring bebas lemak (Thimble) → Dimasukkan ke tabung ekstraktor Soxhlet',
              'Pelarut N-Heksana dipanaskan → Menguap ke kondensor → Menetes merendam sampel',
              'Sirkulasi berulang 6 jam → Pelarut diuapkan di oven → Lemak murni ditimbang di labu lemak'
            ],
            syllabus: [
              {
                topic: 'Solvent Extraction (Ekstraksi Pelarut Non-Polar)',
                detail: 'Prinsip "like dissolves like": lemak bersifat non-polar sehingga dilarutkan sempurna oleh pelarut organik non-polar seperti N-Heksana atau Petroleum Eter.'
              },
              {
                topic: 'PUFA: EPA & DHA (Asam Lemak Tak Jenuh Ganda)',
                detail: 'Eicosapentaenoic Acid (EPA) dan Docosahexaenoic Acid (DHA) adalah asam lemak esensial Omega-3 khas minyak ikan yang sangat bernilai untuk suplemen otak dan jantung.'
              }
            ],
            todos: [
              'Pahami cara kerja pipa sifon (siphon tube) pada alat gelas Soxhlet.',
              'Pelajari cara menghitung Bilangan Peroksida (PV) dan Asam Lemak Bebas (FFA) untuk cek ketengikan minyak ikan.'
            ],
            output: 'Catatan teknis ekstraksi lemak Soxhlet dan parameter mutu minyak ikan.',
            tips: 'Minyak ikan patin dan limbah kepala ikan yang dimurnikan kaya akan Omega-3 & Omega-9.'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 2: KEAMANAN PANGAN, MIKROBIOLOGI & RANTAI DINGIN (SEMESTER 3-4)
  // ==========================================================================
  {
    id: 'phase-2',
    spine: {
      id: 'p2-spine',
      category: 'spine',
      badgeText: 'FASE 2 • SEMESTER 3–4',
      badgeType: 'samarinda',
      title: 'Keamanan Pangan, Mikrobiologi & Rantai Dingin',
      subtitle: 'Senjata utama seorang Quality Control (QC) & QA pabrik pengolahan ekspor',
      keywords: 'seafood food safety microbiology cold chain management HACCP',
      visualSteps: [
        'Bahan Baku Segar → Kontrol Suhu Ketat (0°C s/d -25°C) tanpa terputus (Unbroken Cold Chain)',
        'Pengujian Cemaran Bakteri Patogen, Parasit & Kimia Berbahaya di Laboratorium QC',
        'Sanitasi Lini Produksi (SSOP) → Produk Lolos Inspeksi Karantina / FDA / Uni Eropa'
      ],
      syllabus: [
        {
          topic: 'Foodborne Pathogens (Bakteri Patogen Bawaan Pangan)',
          detail: 'Bakteri berbahaya yang tidak mengubah bau, warna, atau rasa ikan, tetapi menyebabkan keracunan fatal pada manusia (seperti Salmonella, Vibrio cholerae, Listeria monocytogenes, dan Clostridium botulinum).'
        },
        {
          topic: 'Time-Temperature Abuse (Penyalahgunaan Waktu & Suhu)',
          detail: 'Membiarkan ikan berada di zona bahaya suhu (Danger Zone: 5°C – 60°C) terlalu lama sehingga bakteri membelah diri setiap 20 menit dan memproduksi toksin tahan panas.'
        },
        {
          topic: 'Intrinsic vs Extrinsic Factors (Faktor Intrinsik vs Ekstrinsik Mikroba)',
          detail: 'Faktor intrinsik berasal dari dalam ikan (pH ~6,5, aktivitas air Aw ~0,99, nutrisi tinggi). Faktor ekstrinsik berasal dari lingkungan luar (suhu penyimpanan, kelembapan ruang, dan komposisi gas).'
        },
        {
          topic: 'Psychrotrophic Bacteria (Bakteri Psikrotrof)',
          detail: 'Kelompok bakteri pembusuk khas ikan laut (seperti Pseudomonas dan Shewanella) yang tetap mampu tumbuh perlahan pada suhu dingin kulkas (0°C – 5°C) dan menghasilkan senyawa bau busuk (TMA).'
        }
      ],
      todos: [
        'Kuasai teknik kerja aseptis di dekat api bunsen dan di dalam Laminar Air Flow (LAF).',
        'Hafalkan batas maksimum cemaran mikroba, histamin, dan logam berat pada ikan/udang beku menurut SNI & BPOM.',
        'Pelajari kurva pertumbuhan bakteri (Fase Lag, Log/Eksponensial, Stasioner, dan Kematian).'
      ],
      output: 'Kemampuan melakukan audit sanitasi dan pengujian mikrobiologi dasar produk perikanan.',
      tips: 'Alasan utama kontainer ekspor udang/ikan Indonesia ditolak di Amerika atau Jepang adalah bakteri Salmonella dan residu antibiotik.'
    },
    left: [
      {
        id: 'p2-mikrobiologi',
        category: 'branch',
        badgeText: '🦠 LAB MIKROBIOLOGI',
        badgeType: 'samarinda',
        title: 'Mikrobiologi & Keamanan Hayati Perikanan',
        subtitle: 'Menghitung total bakteri, mendeteksi patogen & mengendalikan sanitasi pabrik',
        keywords: 'TPC total plate count Salmonella Vibrio seafood testing SNI',
        visualSteps: [
          'Sampel ikan 25g ditimbang steril di kantong Stomacher + 225 mL Larutan pengencer (BPW)',
          'Pengenceran bertingkat (10^-1 sampai 10^-5) menggunakan mikropipet steril',
          'Inokulasi ke media selektif/agar → Inkubasi suhu terkontrol → Identifikasi & hitung koloni'
        ],
        syllabus: [
          {
            topic: 'TPC / Total Plate Count (Angka Lempeng Total)',
            detail: 'Metode menghitung jumlah total koloni bakteri aerob mesofilik hidup dalam 1 gram sampel makanan (satuan CFU/g). Standar ekspor ikan beku umumnya maksimal 5 × 10^5 CFU/g.'
          },
          {
            topic: 'Zero Tolerance Pathogens (Patogen Toleransi Nol)',
            detail: 'Bakteri Salmonella sp. dan Vibrio cholerae wajib bernilai NEGATIF (0 koloni) dalam 25 gram sampel produk perikanan ekspor.'
          },
          {
            topic: 'Aseptic Technique & Sterilization (Teknik Aseptis & Sterilisasi)',
            detail: 'Prosedur kerja bebas kontaminasi silang menggunakan autoklaf (uap panas bertekanan 121°C, 15 menit) untuk media/alat basah dan oven (170°C, 2 jam) untuk alat gelas kering.'
          }
        ],
        todos: [
          'Latih teknik pengenceran desimal (serial dilution) dan penuangan agar (pour plate & spread plate).',
          'Pelajari cara mengoperasikan Autoklaf, Inkubator, Stomacher, dan Colony Counter di lab FPIK Unmul.'
        ],
        output: 'Hasil uji TPC dan identifikasi koloni bakteri pada produk perikanan segar & olahan.',
        tips: 'Analis mikrobiologi yang teliti selalu dicari oleh pabrik cold storage dan laboratorium pengujian.',
        subBranches: [
          {
            id: 'p2-sub-tpc',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.1',
            badgeType: 'samarinda',
            title: 'Uji Angka Lempeng Total (TPC) & E. coli (MPN)',
            subtitle: 'Indikator kebersihan proses produksi, air pencuci, dan sanitasi pekerja',
            keywords: 'CFU colony forming unit E. coli MPN seafood hygiene',
            visualSteps: [
              'Media PCA (Plate Count Agar) diinkubasi 35°C selama 48 jam untuk hitung total bakteri',
              'Uji Coliform & E. coli metode MPN 3 seri tabung (LSTB → BGLB → EC Broth) suhu 44,5°C',
              'Konfirmasi E. coli di media EMB Agar (koloni hijau metalik khas) & uji IMViC'
            ],
            syllabus: [
              {
                topic: 'CFU / Colony Forming Unit (Unit Pembentuk Koloni)',
                detail: 'Satuan hitung mikrobiologi di mana 1 titik koloni yang tumbuh di cawan agar diasumsikan berasal dari 1 sel bakteri hidup. Cawan yang sah dihitung hanya yang berisi 30–300 koloni.'
              },
              {
                topic: 'MPN / Most Probable Number (Angka Paling Mungkin)',
                detail: 'Metode estimasi statistik jumlah bakteri Coliform dan E. coli berdasarkan pembentukan gas di dalam tabung kecil terbalik (tabung Durham).'
              },
              {
                topic: 'Fecal Indicator Bacteria (Bakteri Indikator Sanitasi)',
                detail: 'Keberadaan Escherichia coli menandakan produk atau air pencuci pabrik terkontaminasi kotoran akibat sanitasi toilet atau tangan pekerja yang buruk.'
              }
            ],
            todos: [
              'Hafalkan rumus perhitungan CFU/g dengan mempertimbangkan faktor pengenceran dan aturan pembulatan 2 angka signifikan.',
              'Praktikkan pewarnaan Gram (Gram positif berwarna ungu vs Gram negatif merah muda).'
            ],
            output: 'Laporan perhitungan CFU/g dan indeks sanitasi air & es pabrik.',
            tips: 'Air dan es yang dipakai di pabrik pengolahan wajib diuji E. coli setiap bulan (syarat: < 3 MPN/100 mL).'
          },
          {
            id: 'p2-sub-patogen',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.2',
            badgeType: 'global',
            title: 'Deteksi Patogen Kritis: Salmonella, Vibrio & Listeria',
            subtitle: 'Penyebab utama penolakan kontainer ekspor di FDA Amerika & Uni Eropa',
            keywords: 'Salmonella Vibrio cholerae parahaemolyticus Listeria seafood ISO',
            visualSteps: [
              'Pre-Enrichment (Pengayaan awal) sampel 25g agar bakteri yang stres/pingsan pulih kembali',
              'Selective Enrichment & Goresan di Media Selektif (XLD/HE untuk Salmonella; TCBS untuk Vibrio)',
              'Uji Biokimia (TSIA, LIA, Urease) atau PCR / Rapid Test Kit untuk konfirmasi spesies'
            ],
            syllabus: [
              {
                topic: 'Salmonella sp. (Bakteri Batang Gram Negatif)',
                detail: 'Bakteri penyebab demam tifoid dan salmonellosis yang sering mencemari udang tambak akibat kotoran burung/hewan di sekitar tambak. Pada media XLD Agar membentuk koloni merah dengan titik hitam (H2S) di tengah.'
              },
              {
                topic: 'Vibrio cholerae & Vibrio parahaemolyticus',
                detail: 'Bakteri alami perairan payau dan laut yang tumbuh subur di media TCBS Agar (V. cholerae berwarna kuning karena memfermentasi sukrosa; V. parahaemolyticus berwarna hijau kebiruan).'
              },
              {
                topic: 'Listeria monocytogenes (Patogen Tahan Dingin)',
                detail: 'Bakteri berbahaya pada produk siap makan (ready-to-eat seperti ikan asap atau daging kepiting kaleng) karena tetap sanggup berkembang biak pada suhu kulkas 4°C.'
              }
            ],
            todos: [
              'Pelajari perbedaan warna koloni bakteri pada media diferensial XLD Agar, TCBS Agar, dan MSA (Staphylococcus aureus).',
              'Pahami prosedur pemusnahan limbah biakan bakteri patogen menggunakan autoklaf sebelum dibuang.'
            ],
            output: 'Alur diagnostik identifikasi patogen perikanan sesuai standar ISO & SNI.',
            tips: 'Jika kamu paham cara mencegah dan menguji Salmonella & Vibrio, pabrik udang ekspor akan langsung merekrutmu sebagai staf QC.'
          },
          {
            id: 'p2-sub-histamin',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.3',
            badgeType: 'samarinda',
            title: 'Deteksi Histamin, Residu Antibiotik & Logam Berat',
            subtitle: 'Keamanan kimiawi untuk ikan pelagis, udang tambak & ikan Sungai Mahakam',
            keywords: 'histamine scombroid poisoning chloramphenicol nitrofuran mercury seafood',
            visualSteps: [
              'Ikan Tuna/Tongkol tidak didinginkan → Enzim bakteri mengubah asam amino Histidin jadi Histamin',
              'Uji cepat Histamin (ELISA / Spektrofotometri) & Residu Antibiotik Udang (LC-MS/MS)',
              'Uji Formalin/Boraks (Test Kit) & Logam Berat Merkuri/Timbal/Kadmium (AAS/ICP)'
            ],
            syllabus: [
              {
                topic: 'Histamine / Scombroid Poisoning (Keracunan Histamin)',
                detail: 'Racun tahan panas yang terbentuk pada ikan berdaging merah (tuna, cakalang, tongkol) akibat enzim histidin dekarboksilase bila suhu naik di atas 4°C. Histamin tidak hilang walau ikan dimasak atau dikalengkan!'
              },
              {
                topic: 'Banned Antibiotics (Antibiotik Terlarang: Kloramfenikol & Nitrofuran)',
                detail: 'Obat-obatan yang dilarang keras digunakan di tambak udang/ikan karena bersifat karsinogenik. Deteksi residu sekecil 0,1 ppb saja membuat seluruh kontainer ekspor dimusnahkan.'
              },
              {
                topic: 'Bioaccumulation of Heavy Metals (Bioakumulasi Logam Berat)',
                detail: 'Penumpukan logam berat (Merkuri/Hg, Timbal/Pb, Kadmium/Cd) dari aktivitas tambang atau industri di jaringan lemak dan hati ikan/kerang.'
              }
            ],
            todos: [
              'Lakukan simulasi uji cepat formalin dan boraks pada sampel ikan pasar menggunakan test kit.',
              'Hafalkan batas maksimum cemaran histamin (maks 50 ppm FDA / 100 ppm SNI) dan logam berat BPOM.'
            ],
            output: 'Protokol skrining bahaya kimiawi untuk penerimaan bahan baku pabrik.',
            tips: 'Di Kaltim yang banyak aktivitas tambang dan sungai, uji logam berat adalah nilai jual riset yang sangat penting.'
          },
          {
            id: 'p2-sub-sanitasi',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.4',
            badgeType: 'samarinda',
            title: 'Sanitasi Industri, Klorinasi & Pengendalian Biofilm',
            subtitle: 'Membersihkan meja stainless, lantai, dan tangan pekerja agar bebas kontaminasi',
            keywords: 'sanitation CIP biofilm chlorine ATP swab test seafood plant',
            visualSteps: [
              'Pre-rinse (Bilas kotoran kasar) → Pembersihan dengan Deterjen Alkalis (angkat lemak/protein)',
              'Pembilasan air bersih → Disinfeksi dengan Klorin / Peracetic Acid / Alkohol 70%',
              'Verifikasi kebersihan menggunakan ATP Bioluminescence Swab Test sebelum produksi dimulai'
            ],
            syllabus: [
              {
                topic: 'Biofilm (Lapisan Lendir Bakteri Resisten)',
                detail: 'Kumpulan mikroba yang menempel kuat pada permukaan meja stainless steel atau ban berjalan (conveyor) dan membungkus dirinya dengan matriks polisakarida sehingga kebal terhadap disinfektan biasa.'
              },
              {
                topic: 'Free Chlorine Concentration (Kadar Klorin Bebas)',
                detail: 'Standar konsentrasi klorin di pabrik pengolahan ikan: air pencuci ikan (1–3 ppm), air celup sepatu/footbath (100–200 ppm), dan air sanitasi meja/alat (50–100 ppm).'
              }
            ],
            todos: [
              'Pelajari perbedaan fungsi Cleaning (menghilangkan kotoran fisik/lemak dengan sabun) dan Sanitizing (membunuh bakteri dengan disinfektan).',
              'Hitung rumus pengenceran larutan klorin (NaOCl) untuk kebutuhan sanitasi ruang produksi.'
            ],
            output: 'Jadwal & konsentrasi larutan sanitasi standar pabrik pengolahan ikan.',
            tips: 'Disinfektan tidak akan bekerja jika meja masih berminyak—wajib dicuci deterjen dulu baru disanitasi!'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p2-coldchain',
        category: 'branch',
        badgeText: '❄️ RANTAI DINGIN',
        badgeType: 'global',
        title: 'Teknologi Pendinginan & Pembekuan (Cold Chain)',
        subtitle: 'Menjaga kesegaran ikan seolah baru diangkat dari laut selama berbulan-bulan',
        keywords: 'IQF individual quick freezing air blast freezer glazing fish',
        visualSteps: [
          'Penanganan cepat di kapal/tambak (Chilling 0°C dengan es curai perbandingan 1:1)',
          'Pembekuan cepat melewati Thermal Arrest Zone (-1°C s/d -5°C) dalam waktu < 2 jam',
          'Glazing (pelapisan es tipis) → Penyimpanan di Cold Storage suhu -20°C s/d -25°C'
        ],
        syllabus: [
          {
            topic: 'Thermal Arrest Zone (Zona Pembekuan Kritis -1°C s/d -5°C)',
            detail: 'Rentang suhu di mana 75–80% air di dalam daging ikan berubah menjadi kristal es. Harus dilewati secepat mungkin agar kristal es berukuran mikro dan tidak merobek dinding sel daging.'
          },
          {
            topic: 'Drip Loss (Kehilangan Cairan Saat Pelelehan)',
            detail: 'Cairan bernutrisi, protein larut air, dan cita rasa yang keluar saat ikan beku dicairkan (thawing). Pembekuan lambat menghasilkan kristal es besar yang merusak sel sehingga drip loss tinggi dan daging menjadi kering.'
          },
          {
            topic: 'Eutectic Point (Titik Eutektik Ikan -55°C)',
            detail: 'Suhu di mana 100% seluruh air bebas dan air terikat di dalam daging ikan membeku sempurna. Pada suhu cold storage komersial (-20°C), sekitar 90% air sudah membeku.'
          }
        ],
        todos: [
          'Bandingkan tekstur dan jumlah air keluar (drip loss) daging ikan yang dibekukan lambat di freezer rumah tangga vs pembekuan cepat.',
          'Pelajari jenis-jenis es industri: Es Balok (Block Ice), Es Curai (Flake Ice), dan Es Bubur (Slurry Ice).'
        ],
        output: 'SOP penanganan rantai dingin dari tambak/kapal hingga masuk kontainer reefer.',
        tips: 'Bisnis penyewaan Cold Storage dan pabrik es curai di sentra perikanan Kaltim adalah bisnis infrastruktur yang sangat menguntungkan.',
        subBranches: [
          {
            id: 'p2-sub-ikejime',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.5',
            badgeType: 'global',
            title: 'Teknik Ikejime & Penanganan Premium Jepang',
            subtitle: 'Menaikkan harga jual ikan segar 3x lipat untuk pasar restoran & ekspor',
            keywords: 'ikejime technique shinkei jime bleeding fish quality',
            visualSteps: [
              'Tusuk titik otak ikan (Brain Spiking) agar ikan mati instan tanpa stres',
              'Potong insang & pangkal ekor → Keluarkan seluruh darah di air es (Bleeding)',
              'Masukkan kawat baja ke saluran saraf tulang belakang (Shinkei-jime) agar rigor mortis tertunda'
            ],
            syllabus: [
              {
                topic: 'Ikejime & Shinkei-jime (Teknik Pemingsanan & Penghancuran Saraf)',
                detail: 'Metode tradisional Jepang mematikan ikan secara instan dan merusak sumsum tulang belakang agar sinyal refleks stres tidak menghabiskan cadangan ATP otot.'
              },
              {
                topic: 'Exsanguination / Bleeding (Pengeluaran Darah Sempurna)',
                detail: 'Darah ikan cepat membusuk dan berbau amis akibat oksidasi hemoglobin. Mengeluarkan seluruh darah membuat daging ikan berwarna putih bersih, tidak amis, dan tahan simpan lebih lama.'
              }
            ],
            todos: [
              'Tonton video anatomi titik otak ikan kerapu/kakap dan praktikkan teknik ikejime.',
              'Bandingkan warna daging ikan yang di-bleeding vs tidak di-bleeding.'
            ],
            output: 'Video demonstrasi dan SOP penanganan ikan hidup/segar standar sashimi.',
            tips: 'Nelayan biasa menjual kakap Rp 45.000/kg; dengan teknik ikejime dan rantai dingin, harganya bisa tembus Rp 120.000+/kg.'
          },
          {
            id: 'p2-sub-abf-iqf',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.6',
            badgeType: 'global',
            title: 'Air Blast Freezer (ABF), Contact Plate & IQF',
            subtitle: 'Teknologi mesin pembekuan industri udang dan fillet ikan ekspor',
            keywords: 'Air Blast Freezer Contact Plate IQF shrimp glazing cold storage',
            visualSteps: [
              'Contact Plate Freezer (CPF): Pembekuan blok udang/surimi di antara pelat logam bersuhu -40°C',
              'Air Blast Freezer (ABF): Hembusan udara dingin kecepatan tinggi (-35°C s/d -40°C)',
              'IQF Tunnel: Pembekuan satuan di atas konveyor → Glazing 5–10% → Master Carton'
            ],
            syllabus: [
              {
                topic: 'IQF (Individual Quick Freezing)',
                detail: 'Teknik pembekuan cepat di mana setiap ekor udang atau potong fillet dibekukan secara terpisah menggunakan hembusan udara sangat dingin (-40°C) di atas konveyor berjalan sehingga tidak saling menempel.'
              },
              {
                topic: 'Glazing & Freezer Burn (Pelapisan Es & Luka Bakar Beku)',
                detail: 'Glazing adalah lapisan es tipis pelindung di permukaan produk beku. Tanpa glazing, es di daging akan menyublim menjadi uap sehingga timbul bercak putih kering dan alot (Freezer Burn).'
              }
            ],
            todos: [
              'Pelajari cara mengukur persentase glazing (de-glazing test) dan Net Weight (berat bersih tanpa es) sesuai standar ekspor.',
              'Bandingkan kapan pabrik memakai Contact Plate Freezer vs ABF vs IQF.'
            ],
            output: 'Diagram alir proses pembekuan udang HLSO / PTO standar pabrik ekspor.',
            tips: 'Semua pabrik pengolahan udang dan ikan ekspor di Surabaya, Tarakan, dan Makassar menggunakan mesin CPF, ABF, dan IQF.'
          },
          {
            id: 'p2-sub-coldstorage-thawing',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.7',
            badgeType: 'global',
            title: 'Manajemen Cold Storage & Teknik Thawing Higienis',
            subtitle: 'Mencegah fluktuasi suhu gudang beku & menjaga mutu saat pelelehan',
            keywords: 'cold storage FIFO FEFO temperature data logger thawing seafood',
            visualSteps: [
              'Penataan palet berjarak dari dinding & langit-langit agar sirkulasi udara dingin merata',
              'Pencatatan suhu otomatis 24 jam (Data Logger) & sistem rotasi barang FEFO (First Expired First Out)',
              'Thawing terkontrol pada suhu chiller (0°C – 4°C) atau air mengalir dingin < 15°C (dilarang pakai air panas!)'
            ],
            syllabus: [
              {
                topic: 'Recrystallization (Rekristalisasi Es Akibat Fluktuasi Suhu)',
                detail: 'Jika pintu cold storage sering dibuka sehingga suhu naik-turun, kristal es kecil akan mencair sebagian lalu menyatu membentuk kristal es raksasa yang merusak tekstur daging ikan.'
              },
              {
                topic: 'Controlled Thawing (Pelelehan Terkendali)',
                detail: 'Proses mencairkan ikan beku secara perlahan pada suhu dingin (< 4°C) agar air hasil lelehan sempat diserap kembali oleh serat protein otot dan bakteri tidak sempat berkembang.'
              }
            ],
            todos: [
              'Hitung kapasitas penyimpanan Cold Storage berdasarkan berat jenis tumpukan master carton ikan/udang.',
              'Pelajari fungsi Tirai Plastik (Air Curtain / Strip Curtain) dan Ruang Antara (Anteroom) di gudang beku.'
            ],
            output: 'Checklist inspeksi harian gudang Cold Storage dan SOP thawing pabrik.',
            tips: 'Kenaikan suhu Cold Storage di atas -18°C selama pengiriman kontainer adalah alasan klaim ganti rugi terbesar dari buyer luar negeri.'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 3: TEKNOLOGI PENGOLAHAN & DIVERSIFIKASI PRODUK (SEMESTER 4-5)
  // ==========================================================================
  {
    id: 'phase-3',
    spine: {
      id: 'p3-spine',
      category: 'spine',
      badgeText: 'FASE 3 • SEMESTER 4–5',
      badgeType: 'samarinda',
      title: 'Teknologi Pengolahan & Diversifikasi Produk',
      subtitle: 'Mengubah bahan baku mentah murah menjadi produk pangan bernilai tambah tinggi',
      keywords: 'seafood value added product processing surimi canning shelf life',
      visualSteps: [
        'Bahan Baku Ikan Utuh (Margin Tipis & Cepat Busuk)',
        'Proses Pemisahan Daging (Fillet / Surimi) + Teknologi Pengawetan Termal / Non-Termal',
        'Uji Sensori & Penentuan Umur Simpan → Produk Siap Ritel Modern & Ekspor'
      ],
      syllabus: [
        {
          topic: 'Value-Added Fishery Products (Produk Perikanan Bernilai Tambah)',
          detail: 'Produk olahan yang telah mengalami proses pembersihan, pemotongan, pemasakan, atau pengemasan modern sehingga memiliki harga jual, kepraktisan, dan umur simpan jauh lebih tinggi.'
        },
        {
          topic: 'Hurdle Technology (Teknologi Rintangan Ganda)',
          detail: 'Konsep menggabungkan beberapa faktor penghambat mikroba sekaligus pada tingkat ringan (misal: sedikit garam + pengemasan vakum + suhu dingin) sehingga makanan awet tanpa merusak rasa alami.'
        },
        {
          topic: 'Protein Gelation (Pembentukan Gel Protein Ikan)',
          detail: 'Kemampuan protein myofibril ikan (aktin & miosin) untuk mengikat air dan membentuk struktur kenyal/elastis saat diberi garam (2–3%) dan dipanaskan.'
        }
      ],
      todos: [
        'Hitung rendemen daging (yield) dan Harga Pokok Produksi (HPP) dari setiap produk olahan yang dibuat di lab.',
        'Lakukan uji sensori / organoleptik (skala hedonik 1–9) untuk mengukur tingkat kesukaan panelis.',
        'Pelajari cara menghitung umur simpan produk menggunakan metode Arrhenius (ASLT).'
      ],
      output: 'Prototipe 2 produk olahan ikan inovatif lengkap dengan formulasi resep baku, tabel gizi, dan hitungan HPP.',
      tips: 'Jangan terjebak hanya membuat amplang oleh-oleh; buat produk konsumsi harian (FMCG) seperti kaldu ikan alami, nugget sehat, atau lauk siap saji.'
    },
    left: [
      {
        id: 'p3-surimi',
        category: 'branch',
        badgeText: '🍥 TEKNOLOGI GEL & TRADISIONAL',
        badgeType: 'samarinda',
        title: 'Teknologi Surimi, Emulsi & Modernisasi Olahan Lokal',
        subtitle: 'Dari bahan baku industri bakso/crab stick global hingga modernisasi produk khas Kaltim',
        keywords: 'surimi processing leaching suwari modori fermentation salting fish',
        visualSteps: [
          'Daging ikan putih dilumatkan → Pencucian air dingin (Leaching 3x) untuk buang lemak & bau amis',
          'Pengepresan air + Pencampuran Cryoprotectant (Gula 4% + Sorbitol 4% + Polifosfat 0,2%)',
          'Aplikasi menjadi Produk Emulsi (Bakso/Sosis/Nugget) & Modernisasi Produk Lokal Kaltim'
        ],
        syllabus: [
          {
            topic: 'Leaching (Pencucian Daging Lumat)',
            detail: 'Proses pencucian daging ikan giling dengan air dingin (5°C) berulang kali untuk membuang protein larut air (sarkoplasma), darah, pigmen, dan lemak sehingga tersisa protein pembentuk gel murni.'
          },
          {
            topic: 'Cryoprotectant (Pelindung Beku Protein)',
            detail: 'Campuran gula (sukrosa), sorbitol, dan natrium tripolifosfat (STPP) yang mencegah protein surimi rusak/denaturasi selama disimpan beku.'
          },
          {
            topic: 'Myofibrillar Protein Extraction (Ekstraksi Protein Miofibril)',
            detail: 'Penambahan garam dapur (NaCl 2–3%) saat penggilingan adonan untuk melarutkan protein aktin dan miosin menjadi pasta lengket (sol) yang akan berubah menjadi gel kenyal saat dipanaskan.'
          }
        ],
        todos: [
          'Praktikkan pembuatan surimi dari ikan patin/nila/kurisi di lab THP Unmul.',
          'Uji kekuatan gel (gel strength) dengan uji lipat (folding test grade AA/A/B/C) dan uji gigit.'
        ],
        output: 'Formulasi surimi beku dari ikan air tawar Kaltim dengan nilai folding test Grade AA.',
        tips: 'Surimi adalah komoditas ekspor B2B bernilai miliaran dolar yang dipasok ke pabrik-pabrik makanan di Jepang, Korea, dan Eropa.',
        subBranches: [
          {
            id: 'p3-sub-suwari',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 3.1',
            badgeType: 'samarinda',
            title: 'Fenomena Suwari & Modori pada Gel Ikan',
            subtitle: 'Kunci rahasia membuat bakso ikan super kenyal tanpa pengenyal berbahaya',
            keywords: 'suwari setting gelation modori protease enzyme fish ball',
            visualSteps: [
              'Adonan surimi + garam 2,5% → Dipanaskan suhu 40°C selama 30 menit (Fase Suwari / Setting)',
              'Hindari suhu 55°C–65°C terlalu lama karena enzim protease merusak gel (Fase Modori)',
              'Langsung direbus pada suhu 90°C sampai matang sempurna dan kenyal maksimal'
            ],
            syllabus: [
              {
                topic: 'Suwari (Pembentukan Gel Suhu Rendah)',
                detail: 'Proses pemanasan adonan surimi bergaram pada suhu 30–40°C yang mengaktifkan enzim transglutaminase alami ikan untuk membentuk ikatan silang protein yang sangat kenyal.'
              },
              {
                topic: 'Modori (Pelunakan / Kerusakan Gel)',
                detail: 'Fenomena rusaknya kekenyalan bakso ikan saat adonan terlalu lama berada di suhu 55–65°C akibat aktifnya enzim pemecah protein (heat-activated protease).'
              }
            ],
            todos: [
              'Lakukan eksperimen dua tahap pemanasan (40°C lalu 90°C) vs langsung rebus 90°C pada bakso ikan.',
              'Bandingkan elastisitas tekstur yang dihasilkan.'
            ],
            output: 'SOP pemasakan dua tahap (two-step heating) untuk produk emulsi perikanan.',
            tips: 'Dengan menguasai Suwari & Modori, kamu bisa bikin bakso ikan super kenyal 100% alami tanpa boraks.'
          },
          {
            id: 'p3-sub-tradisional-modern',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 3.2',
            badgeType: 'samarinda',
            title: 'Penggaraman, Pengeringan Mekanis & Fermentasi',
            subtitle: 'Menstandarisasi ikan asin jambal roti, bekasam, kecap ikan & terasi agar layak ekspor',
            keywords: 'fish salting mechanical drying fermentation fish sauce bekasam',
            visualSteps: [
              'Penggaraman terkontrol (Brining) → Menurunkan Aktivitas Air (Aw < 0,75) tanpa terlalu asin',
              'Pengeringan Mekanis (Cabinet Dryer / Solar Tunnel Dryer 50°C) → Higienis bebas lalat & debu',
              'Fermentasi terkontrol (Bakteri Asam Laktat / Enzim Protease) → Kecap ikan, petis & bekasam'
            ],
            syllabus: [
              {
                topic: 'Osmotic Dehydration (Dehidrasi Osmotik Garam)',
                detail: 'Perpindahan air keluar dari sel daging ikan dan masuknya ion garam Na+ dan Cl- ke dalam jaringan sehingga mikroba pembusuk mati karena kekurangan air bebas.'
              },
              {
                topic: 'Halophilic Bacteria (Bakteri Halofilik Tahan Garam)',
                detail: 'Bakteri seperti Halobacterium salinarum yang tetap bisa hidup pada kadar garam tinggi dan menyebabkan bercak merah muda (pink spoilage) jika pengeringan kurang sempurna.'
              },
              {
                topic: 'Enzymatic & Lactic Acid Fermentation (Fermentasi Ikan)',
                detail: 'Pemecahan protein ikan menjadi asam amino bebas (glutamat pemberi rasa umami) pada kecap ikan, atau pembentukan asam laktat pengawet alami pada produk fermentasi khas Kalimantan (bekasam/wadi).'
              }
            ],
            todos: [
              'Bandingkan kurva laju pengeringan ikan menggunakan penjemuran matahari terbuka vs alat pengering kabinet (Cabinet Dryer).',
              'Pelajari cara mengukur kadar garam (metode Mohr) dan aktivitas air (Aw meter) pada ikan kering.'
            ],
            output: 'SOP produksi ikan asin rendah garam (low-salt) kemasan vakum higienis.',
            tips: 'Ikan asin jambal roti dan terasi udang khas Kalimantan yang dikemas higienis laku keras di supermarket Jakarta dan pasar ekspor!'
          },
          {
            id: 'p3-sub-amplang-fmcg',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 3.3',
            badgeType: 'samarinda',
            title: 'Inovasi Amplang Samarinda & Snack Tinggi Protein',
            subtitle: 'Mengubah kerupuk oleh-oleh lokal menjadi camilan sehat bernilai ekspor',
            keywords: 'vacuum frying fish cracker amplang lipid oxidation shelf life',
            visualSteps: [
              'Formulasi daging ikan tenggiri/pipih/gabus tinggi (> 40%) + tapioka termodifikasi',
              'Penggorengan Vakum (Vacuum Frying 85°C) atau Pemanggangan (Baked) → Kadar minyak rendah',
              'Penirisan sentrifugal (Spinner) + Kemasan Aluminium Foil ber-Nitrogen agar tidak tengik'
            ],
            syllabus: [
              {
                topic: 'Vacuum Frying (Penggorengan Hampa Udara Suhu Rendah)',
                detail: 'Teknologi menggoreng pada tekanan vakum sehingga titik didih air turun menjadi ~80–85°C. Hasilnya kerupuk ikan mekar renyah, tidak gosong, gizi ikan tidak rusak, dan menyerap minyak sangat sedikit.'
              },
              {
                topic: 'Nitrogen Flushing (Pengisian Gas Nitrogen Kemasan)',
                detail: 'Mengganti oksigen di dalam bungkus snack dengan gas Nitrogen (N2) inert untuk mencegah oksidasi minyak (bau tengik) dan menjaga kerenyahan hingga 12 bulan.'
              }
            ],
            todos: [
              'Uji kadar lemak dan masa simpan amplang yang digoreng biasa vs menggunakan spinner & nitrogen flushing.',
              'Rancang varian rasa modern (misal: Rumput Laut, Pedas Daun Jeruk, Keju) dengan klaim Tinggi Protein.'
            ],
            output: 'Formulasi perbaikan mutu dan umur simpan produk amplang / snack ikan khas Samarinda.',
            tips: 'Ribuan UMKM amplang di Samarinda masih memakai cara tradisional dan cepat tengik dalam 1 bulan—di sinilah ilmu THP-mu bisa memonopoli kualitas!'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p3-modern-pack',
        category: 'branch',
        badgeText: '🥫 THERMAL & PENGEMASAN',
        badgeType: 'global',
        title: 'Pengalengan (Thermal), Kemasan Cerdas & Uji Mutu',
        subtitle: 'Membuat produk ikan tahan 1–2 tahun di suhu ruang & memvalidasi umur simpannya',
        keywords: 'fish canning retort sterilization F0 value MAP shelf life sensory',
        visualSteps: [
          'Pengisian ikan & saus ke kaleng/retort pouch → Penghampaan udara (Exhausting)',
          'Penutupan kedap udara (Double Seaming) → Sterilisasi komersial di mesin Retort (121°C)',
          'Uji Sensori Panelis & Penentuan Umur Simpan (ASLT) → Siap Ritel Modern & Ekspor'
        ],
        syllabus: [
          {
            topic: 'Commercial Sterilization & F0 Value (Sterilisasi Komersial)',
            detail: 'Pemanasan produk dalam kemasan tertutup pada suhu ~121,1°C untuk memusnahkan spora bakteri mematikan Clostridium botulinum. Nilai kecukupan panas diukur dengan parameter F0 (minimal 3 menit).'
          },
          {
            topic: 'Double Seam (Lipatan Ganda Kaleng)',
            detail: 'Teknik penyegelan tutup kaleng dengan badan kaleng melalui 5 lapis lipatan logam kedap udara agar bakteri dari luar tidak bisa masuk kembali setelah sterilisasi.'
          },
          {
            topic: 'Exhausting (Penghampaan Udara Kemasan)',
            detail: 'Pengeluaran udara dan oksigen dari ruang kosong atas kaleng (headspace) sebelum ditutup rapat agar kaleng tidak menggembung saat dipanaskan di mesin retort dan mencegah karat bagian dalam.'
          }
        ],
        todos: [
          'Pelajari bagian-bagian mesin retort dan cara membaca kurva penetrasi panas.',
          'Kenali teknologi Retort Pouch (kemasan aluminium foil fleksibel tahan panas 121°C).'
        ],
        output: 'Desain konsep produk siap saji khas Kaltim (misal: Ikan Patin Asam Pedas Retort Pouch).',
        tips: 'Teknologi Retort Pouch modal mesinnya jauh lebih murah daripada pabrik kaleng, cocok untuk memulai bisnis makanan siap saji ekspor.',
        subBranches: [
          {
            id: 'p3-sub-map',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 3.4',
            badgeType: 'global',
            title: 'Vacuum Packaging, MAP & Asap Cair',
            subtitle: 'Teknologi pengawetan modern untuk ritel supermarket & ekspor',
            keywords: 'Modified Atmosphere Packaging liquid smoke pyrolysis fish',
            visualSteps: [
              'Vacuum Pack: Menyedot seluruh oksigen (O2) untuk mematikan bakteri aerob & cegah tengik',
              'MAP: Mengganti udara kemasan dengan kombinasi gas CO2 (hambat bakteri) + N2 (penyangga)',
              'Liquid Smoke: Pirolisis tempurung kelapa/kayu ulin → Destilasi asap bebas tar karsinogenik'
            ],
            syllabus: [
              {
                topic: 'MAP (Modified Atmosphere Packaging)',
                detail: 'Pengemasan produk segar dengan memodifikasi komposisi gas di dalam kemasan (biasanya tinggi CO2 40–60% dan N2) untuk memperpanjang umur simpan fillet ikan segar di supermarket.'
              },
              {
                topic: 'Liquid Smoke / Asap Cair (Pirolisis)',
                detail: 'Cairan hasil kondensasi asap pembakaran kayu keras/tempurung kelapa yang telah dimurnikan dari senyawa berbahaya (tar dan Benzopyrene) untuk mengawetkan dan memberi aroma asap higienis.'
              },
              {
                topic: 'High-Barrier Film (Plastik Penghalang Gas)',
                detail: 'Bahan kemasan berlapis ganda (seperti Nylon/PA + LLDPE atau EVOH) yang mencegah oksigen dari luar menembus masuk ke dalam produk.'
              }
            ],
            todos: [
              'Bandingkan masa simpan ikan bandeng/patin asap tradisional vs menggunakan asap cair grade 1.',
              'Pelajari spesifikasi ketebalan (mikron) plastik vakum untuk produk beku vs produk kering.'
            ],
            output: 'Analisis perbandingan umur simpan produk kemasan vakum vs biasa.',
            tips: 'Ikan asap modern kemasan vakum sangat diminati pasar diaspora Indonesia dan ritel modern.'
          },
          {
            id: 'p3-sub-sensori-aslt',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 3.5',
            badgeType: 'global',
            title: 'Uji Sensori (Organoleptik) & Penentuan Umur Simpan (ASLT)',
            subtitle: 'Membuktikan secara ilmiah produkmu enak dan tahan simpan 12 bulan untuk izin BPOM',
            keywords: 'sensory evaluation hedonic test score sheet SNI ASLT Arrhenius shelf life',
            visualSteps: [
              'Uji Score Sheet SNI (Skala 1–9: Mata, Insang, Lendir, Daging, Bau, Tekstur ikan segar)',
              'Uji Hedonik (Tingkat kesukaan konsumen 30–50 panelis) & Uji Segitiga (Triangle Test)',
              'Simulasi ASLT (Accelerated Shelf-Life Testing) pada suhu ekstrem untuk hitung tanggal kadaluarsa'
            ],
            syllabus: [
              {
                topic: 'Organoleptic Score Sheet SNI (Lembar Penilaian Sensori)',
                detail: 'Standar pengujian mutu ikan segar menggunakan panca indra manusia terlatih (skala 1–9). Ikan segar layak konsumsi dan ekspor wajib memiliki nilai minimal 7.'
              },
              {
                topic: 'ASLT / Accelerated Shelf-Life Testing (Uji Umur Simpan Dipercepat)',
                detail: 'Metode menyimpan produk pada 3 suhu berbeda (misal 25°C, 35°C, dan 45°C) lalu menghitung laju kerusakan menggunakan persamaan Arrhenius sehingga umur simpan 1 tahun bisa diprediksi dalam waktu 1 bulan saja!'
              }
            ],
            todos: [
              'Praktikkan penilaian Score Sheet SNI 2346 pada ikan segar di laboratorium THP.',
              'Pelajari cara membuat grafik regresi linier Arrhenius di Microsoft Excel untuk menentukan tanggal Expired Date.'
            ],
            output: 'Laporan uji organoleptik dan perhitungan tanggal kadaluarsa (Best Before) produk.',
            tips: 'Data uji umur simpan (ASLT) adalah salah satu syarat wajib saat mendaftarkan produk pangan olahan ke BPOM MD!'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 4: BIOTEKNOLOGI PERAIRAN & ZERO-WASTE (SEMESTER 5-6)
  // ==========================================================================
  {
    id: 'phase-4',
    spine: {
      id: 'p4-spine',
      category: 'spine',
      badgeText: 'FASE 4 • SEMESTER 5–6',
      badgeType: 'leverage',
      title: 'Bioteknologi Perairan & Zero-Waste (High-Margin)',
      subtitle: 'Jalur "Crazy Rich" R&D: Mengekstrak limbah ikan jadi bahan baku farmasi & kosmetik',
      keywords: 'marine biotechnology collagen chitosan extraction zero waste',
      visualSteps: [
        'Limbah Industri Perikanan (Kulit, Sisik, Tulang, Kepala, Cangkang Udang/Kepiting)',
        'Proses Ekstraksi Kimiawi / Enzimatis / Fermentasi di Laboratorium Bioteknologi',
        'Bahan Aktif Murni (Kolagen, Kitosan, Albumin, Omega-3, Karaginan) → Dijual B2B ke Pabrik Skincare & Farmasi'
      ],
      syllabus: [
        {
          topic: 'Zero-Waste Blue Economy (Ekonomi Biru Tanpa Limbah)',
          detail: 'Konsep mengolah 100% bagian tubuh ikan. Dagingnya jadi makanan (40%), sedangkan 60% sisanya (kulit, tulang, jeroan, cangkang) diekstrak menjadi senyawa bernilai jual puluhan kali lipat.'
        },
        {
          topic: 'Bioactive Peptides & Enzymatic Hydrolysis (Peptida Bioaktif)',
          detail: 'Rantai pendek asam amino hasil pemotongan protein ikan menggunakan enzim protease (seperti alcalase atau papain) yang memiliki fungsi antioksidan, antihipertensi, dan anti-aging.'
        },
        {
          topic: 'Nutraceuticals & Cosmeceuticals (Nutrasetika & Kosmesetika)',
          detail: 'Produk pangan atau ekstrak bahan alam yang memiliki manfaat medis klinis (suplemen kesehatan) maupun efek aktif perawatan kulit tingkat medis.'
        }
      ],
      todos: [
        'Dekati dosen di FPIK Unmul yang memiliki riset/paten terkait ekstraksi albumin, kolagen, karaginan, atau kitosan.',
        'Jadikan topik ekstraksi bioteknologi ini sebagai judul Skripsi agar fasilitas & bahan lab ditanggung proyek penelitian.',
        'Pelajari metode karakterisasi bahan aktif modern: FTIR (gugus fungsi), SDS-PAGE (berat molekul protein), dan SEM (morfologi permukaan).'
      ],
      output: 'Sampel ekstrak murni (albumin / kolagen / kitosan / minyak ikan) hasil riset skripsi beserta uji karakteristiknya.',
      tips: 'Menjual kerupuk ikan untungnya ribuan rupiah per bungkus; menjual ekstrak kolagen peptida atau albumin murni ke pabrik maklon skincare/farmasi nilainya ratusan juta per kontrak.'
    },
    left: [
      {
        id: 'p4-albumin',
        category: 'branch',
        badgeText: '💊 FARMASI & NUTRASETIKA',
        badgeType: 'leverage',
        title: 'Ekstraksi Albumin Ikan Gabus & Pemurnian Minyak Ikan',
        subtitle: 'Memanfaatkan komoditas melimpah Sungai Mahakam untuk industri kesehatan',
        keywords: 'Channa striata albumin extraction BCG method fish oil refining',
        visualSteps: [
          'Daging ikan gabus dikukus/diekstrak vakum suhu rendah (< 50°C agar protein tidak rusak)',
          'Pemisahan lemak dan cairan ekstrak → Pengeringan semprot (Spray Drying) jadi serbuk albumin',
          'Uji kadar albumin dengan metode Bromocresol Green (BCG) → Dikemas jadi kapsul / suplemen'
        ],
        syllabus: [
          {
            topic: 'Protein Denaturation (Denaturasi Protein)',
            detail: 'Rusaknya struktur 3 dimensi protein akibat panas berlebih (> 60°C) atau pH ekstrem sehingga albumin menggumpal dan kehilangan fungsi biologisnya.'
          },
          {
            topic: 'Spray Drying & Freeze Drying (Pengeringan Semprot & Beku)',
            detail: 'Teknik mengubah ekstrak cair menjadi serbuk halus dalam hitungan detik menggunakan kabut udara panas terkontrol (Spray Drying) atau sublimasi vakum suhu beku (Freeze Drying) agar bioaktivitas tetap utuh.'
          },
          {
            topic: 'Bromocresol Green / BCG Method (Uji Kadar Albumin)',
            detail: 'Metode spektrofotometri standar untuk mengukur konsentrasi albumin murni secara akurat berdasarkan ikatan spesifik warna hijau-biru pada panjang gelombang 628 nm.'
          }
        ],
        todos: [
          'Pelajari metode ekstraksi albumin ikan gabus dengan pelarut air vs asam lemah.',
          'Hitung rendemen serbuk albumin dari 10 kg ikan gabus segar dan hitung nilai jualnya di pasaran.'
        ],
        output: 'Prototipe serbuk / kapsul ekstrak albumin ikan gabus Mahakam.',
        tips: 'Suplemen kapsul albumin ikan gabus sudah diresepkan luas oleh dokter bedah di rumah sakit seluruh Indonesia.',
        subBranches: [
          {
            id: 'p4-sub-fishoil',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 4.1',
            badgeType: 'leverage',
            title: 'Pemurnian Minyak Ikan (Refining) & Konsentrat Omega-3',
            subtitle: 'Mengubah lemak perut ikan patin & limbah kepala ikan menjadi minyak farmasi',
            keywords: 'fish oil refining degumming neutralization bleaching deodorization Omega-3',
            visualSteps: [
              'Wet Rendering (Ekstraksi minyak kasar dari lemak perut patin/kepala ikan)',
              '4 Tahap Pemurnian: Degumming (buang getah) → Neutralization (buang asam lemak bebas)',
              'Bleaching (pemucatan warna dengan adsorben) → Deodorization (penghilangan bau amis)'
            ],
            syllabus: [
              {
                topic: 'Oil Refining Process (Degumming, Neutralization, Bleaching, Deodorization)',
                detail: 'Rangkaian pemurnian minyak ikan kasar (crude fish oil) untuk menghilangkan fosfolipid, asam lemak bebas (FFA), pigmen gelap, dan senyawa volatil penyebab bau amis.'
              },
              {
                topic: 'TOTOX Value (Total Oxidation Value)',
                detail: 'Indeks standar internasional mutu minyak ikan (gabungan nilai Peroksida dan Anisidin). Minyak ikan grade farmasi wajib memiliki nilai TOTOX di bawah 26.'
              }
            ],
            todos: [
              'Praktikkan pemurnian minyak ikan patin menggunakan bentonit/zeolit sebagai bahan pemucat (bleaching earth).',
              'Ukur angka asam (Acid Value) dan bilangan peroksida minyak sebelum dan sesudah pemurnian.'
            ],
            output: 'Sampel minyak ikan jernih tidak berbau amis siap uji parameter mutu SNI.',
            tips: 'Pabrik fillet ikan patin membuang berton-ton lemak perut setiap minggu—kamu bisa membelinya super murah dan memurnikannya menjadi minyak Omega-3/Omega-9!'
          },
          {
            id: 'p4-sub-fph',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 4.2',
            badgeType: 'leverage',
            title: 'Hidrolisat Protein Ikan (FPH) & Kaldu Alami Industri',
            subtitle: 'Memecah protein ikan rucah/sampingan menjadi peptida larut air bernilai tinggi',
            keywords: 'fish protein hydrolysate FPH enzymatic hydrolysis degree of hydrolysis',
            visualSteps: [
              'Daging ikan sampingan/kepala ikan dicampur air + Enzim Protease (Papain / Bromelain / Alcalase)',
              'Inkubasi pada suhu & pH optimum enzim (50°C, 4 jam) hingga protein terpotong menjadi peptida',
              'Inaktivasi enzim (85°C) → Sentrifugasi → Dikeringkan jadi bubuk kaldu umami / suplemen protein'
            ],
            syllabus: [
              {
                topic: 'Degree of Hydrolysis / DH (Derajat Hidrolisis)',
                detail: 'Persentase ikatan peptida protein yang berhasil diputus oleh enzim. Semakin tinggi nilai DH, semakin mudah protein tersebut diserap tubuh dan larut sempurna dalam air.'
              },
              {
                topic: 'Natural Umami Peptides (Peptida Gurih Alami)',
                detail: 'Asam glutamat dan peptida rantai pendek hasil hidrolisis ikan yang memberikan rasa gurih alami kuat sebagai pengganti MSG sintetis untuk industri bumbu makanan.'
              }
            ],
            todos: [
              'Bandingkan efektivitas enzim papain (dari getah pepaya) vs bromelain (dari bonggol nanas) untuk menghidrolisis protein ikan.',
              'Hitung HPP pembuatan bubuk kaldu ikan alami bebas MSG.'
            ],
            output: 'Formulasi bubuk Hidrolisat Protein Ikan (FPH) untuk suplemen atau penyedap alami.',
            tips: 'Tren makanan sehat global sedang meninggalkan MSG sintetis dan beralih ke ekstrak kaldu ikan alami (Natural Seafood Extract).'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p4-kolagen-kitosan',
        category: 'branch',
        badgeText: '✨ KOSMETIK & BIOPOLIMER',
        badgeType: 'leverage',
        title: 'Kolagen Sisik/Kulit Ikan, Kitosan & Hidrokoloid',
        subtitle: 'Menjadi pemasok bahan baku (B2B Ingredient Supplier) pabrik skincare & makanan',
        keywords: 'fish scale collagen extraction chitosan degree of deacetylation',
        visualSteps: [
          'Kulit & Sisik Ikan (Kakap/Patin) → Direndam NaOH & Asam Asetat → Ekstrak Kolagen Halal',
          'Cangkang Udang/Kepiting → Deproteinasi (NaOH) + Demineralisasi (HCl) → Kitin → Kitosan',
          'Rumput Laut Kaltim → Ekstraksi Alkali → Karaginan & Alginat (Pengental Industri)'
        ],
        syllabus: [
          {
            topic: 'Acid-Soluble Collagen / ASC (Kolagen Larut Asam)',
            detail: 'Kolagen murni yang diekstrak dari kulit atau sisik ikan menggunakan asam asetat pada suhu dingin (4°C). Keunggulannya adalah 100% halal dan bebas risiko penyakit sapi gila.'
          },
          {
            topic: 'Degree of Deacetylation / DD (Derajat Deasetilasi Kitosan)',
            detail: 'Persentase gugus asetil yang berhasil dihilangkan dari kitin menjadi kitosan (diukur dengan alat FTIR). Kitosan berkualitas industri wajib memiliki nilai DD > 75–85%.'
          }
        ],
        todos: [
          'Praktikkan isolasi kitin dan kitosan dari limbah kepala/kulit udang tambak Delta Mahakam.',
          'Pelajari cara membaca spektrum gugus fungsi menggunakan alat FTIR.'
        ],
        output: 'Sampel kitosan atau kolagen ikan lengkap dengan data uji FTIR dan kelarutan.',
        tips: 'Industri kosmetik di Jawa sangat membutuhkan pasokan kolagen ikan halal lokal untuk menggantikan kolagen impor.',
        subBranches: [
          {
            id: 'p4-sub-gelatin-kolagen',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 4.3',
            badgeType: 'leverage',
            title: 'Kolagen Peptida & Gelatin Halal Tulang/Kulit Ikan',
            subtitle: 'Bahan baku minuman kecantikan (collagen drink) & cangkang kapsul halal',
            keywords: 'fish gelatin bloom strength collagen peptide cosmetic ingredient',
            visualSteps: [
              'Pre-treatment kulit/tulang ikan dengan basa lemah (NaOH) & asam untuk buang lemak/mineral',
              'Ekstraksi air hangat (55–65°C) untuk mendapatkan Gelatin, atau lanjut enzim untuk Kolagen Peptida',
              'Uji Kekuatan Gel (Bloom Strength) & Viskositas sesuai standar farmasi/kosmetik'
            ],
            syllabus: [
              {
                topic: 'Gelatin Bloom Strength (Kekuatan Gel Gelatin)',
                detail: 'Satuan standar industri (dalam gram Bloom) untuk mengukur kekerasan dan elastisitas gel gelatin. Gelatin cangkang kapsul keras membutuhkan nilai 200–250 Bloom.'
              },
              {
                topic: 'Low Molecular Weight Collagen Peptide (< 3000 Dalton)',
                detail: 'Kolagen ikan yang telah dipecah menjadi ukuran molekul sangat kecil (< 3 kDa) sehingga larut jernih di air dingin dan langsung diserap usus untuk minuman kecantikan.'
              }
            ],
            todos: [
              'Pelajari perbedaan suhu denaturasi (thermal stability) kolagen ikan air hangat (patin/kakap) vs ikan laut dalam.',
              'Cari daftar pabrik maklon minuman kolagen dan skincare di Indonesia sebagai calon buyer B2B.'
            ],
            output: 'Protokol ekstraksi gelatin dan kolagen peptida dari limbah kulit/tulang ikan Kaltim.',
            tips: 'Pasar minuman kolagen dan skincare halal di Indonesia tumbuh miliaran dolar—hampir semua bahannya masih impor!'
          },
          {
            id: 'p4-sub-rumputlaut',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 4.4',
            badgeType: 'samarinda',
            title: 'Ekstraksi Karaginan & Alginat Rumput Laut Kaltim',
            subtitle: 'Hilirisasi rumput laut Paser, Bontang & Berau menjadi Semi-Refined Carrageenan (SRC)',
            keywords: 'carrageenan extraction KOH Kappaphycus alvarezii gel strength',
            visualSteps: [
              'Rumput laut kering Eucheuma cottonii dicuci bersih dari garam & pasir',
              'Pemasakan dalam larutan Alkali (KOH 6–8%) pada suhu 80°C selama 2 jam',
              'Pencucian netral → Pemotongan (Chopping) → Pengeringan & Penepungan (Tepung SRC)'
            ],
            syllabus: [
              {
                topic: 'Alkali Treatment / KOH Modification (Modifikasi Alkali Kalium Hidroksida)',
                detail: 'Proses pemasakan rumput laut dengan KOH yang mengubah struktur molekul prekursor menjadi kappa-karaginan murni sehingga kekuatan gelnya meningkat tajam.'
              },
              {
                topic: 'SRC vs RC (Semi-Refined vs Refined Carrageenan)',
                detail: 'SRC adalah tepung karaginan yang masih mengandung selulosa dinding sel (dipakai industri sosis/bakso/pakan hewan), sedangkan RC adalah ekstrak murni yang diendapkan dengan alkohol/KCl (dipakai industri farmasi & es krim).'
              }
            ],
            todos: [
              'Praktikkan ekstraksi karaginan di lab THP Unmul dan ukur kekuatan gel serta viskositasnya.',
              'Pelajari rantai pasok rumput laut di Kabupaten Paser, Berau, dan Tarakan.'
            ],
            output: 'Sampel tepung Semi-Refined Carrageenan (SRC) standar industri pangan.',
            tips: 'Indonesia adalah produsen rumput laut terbesar dunia, tetapi masih banyak mengekspor rumput laut mentah kering daripada tepung SRC.'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 5: SERTIFIKASI MUTU, HACCP & WAJIB PKL LUAR KOTA (SEMESTER 6-7)
  // ==========================================================================
  {
    id: 'phase-5',
    spine: {
      id: 'p5-spine',
      category: 'spine',
      badgeText: 'FASE 5 • SEMESTER 6–7',
      badgeType: 'global',
      title: 'Sertifikasi Mutu, HACCP & Wajib PKL Luar Kota',
      subtitle: 'Mencuri sistem kerja pabrik ekspor raksasa & mengantongi lisensi wajib industri',
      keywords: 'HACCP seafood certification GMP SSOP BRC FDA export',
      visualSteps: [
        'Ambil Pelatihan & Sertifikasi HACCP + SPI (Sertifikat Pengolah Ikan) di Kampus',
        'Keluar Kota untuk PKL / Magang di Pabrik Seafood Ekspor Besar (Surabaya / Sidoarjo / Bitung / Makassar)',
        'Kuasai Audit Mutu Internasional & Bangun Koneksi dengan Manajer Pabrik / Buyer'
      ],
      syllabus: [
        {
          topic: 'HACCP (Hazard Analysis and Critical Control Points)',
          detail: 'Sistem manajemen keamanan pangan berbasis pencegahan risiko yang wajib dimiliki setiap pabrik perikanan ekspor di dunia. Terdiri dari 7 prinsip utama dan 12 langkah penerapan.'
        },
        {
          topic: 'CCP (Critical Control Point / Titik Kendali Kritis)',
          detail: 'Tahapan proses di dalam pabrik di mana pengendalian wajib dilakukan untuk mencegah atau menghilangkan bahaya keamanan pangan (contoh: tahap metal detector, pemasakan, atau pembekuan).'
        },
        {
          topic: '7 Principles of HACCP (7 Prinsip Utama HACCP)',
          detail: '(1) Analisis bahaya, (2) Penentuan CCP, (3) Penetapan batas kritis, (4) Sistem pemantauan CCP, (5) Tindakan koreksi jika menyimpang, (6) Prosedur verifikasi/audit, (7) Dokumentasi & pencatatan.'
        }
      ],
      todos: [
        'Ikuti pelatihan sertifikasi HACCP dan SPI yang diadakan KKP / LSP / kampus sebelum lulus.',
        'Kirim proposal PKL sejak semester 5 ke pabrik pengolahan udang/ikan ekspor skala besar di Jawa Timur atau Sulawesi.',
        'Pelajari cara menggunakan Decision Tree (Pohon Keputusan) untuk menentukan apakah suatu tahapan proses adalah CCP atau bukan.'
      ],
      output: 'Sertifikat kompetensi HACCP + Laporan PKL dari industri pengolahan ekspor berskala besar.',
      tips: 'Jangan PKL di tempat yang santai di Samarinda jika ingin level-up cepat. Lihat langsung mesin pabrik miliaran rupiah di Jawa/Sulawesi.'
    },
    left: [
      {
        id: 'p5-gmp-haccp',
        category: 'branch',
        badgeText: '📋 REGULASI & LEGALITAS',
        badgeType: 'samarinda',
        title: 'Penyusunan Dokumen GMP, SSOP, HACCP & Izin Edar',
        subtitle: 'Bahasa wajib yang dipakai auditor BPOM, KKP, FDA Amerika, dan Uni Eropa',
        keywords: '8 keys SSOP GMP seafood HACCP plan BPOM MD Halal',
        visualSteps: [
          'Fondasi Dasar: Terapkan 8 Kunci SSOP (Sanitasi) & GMP (Cara Produksi yang Baik)',
          'Analisis Bahaya (Biologi, Kimia, Fisika) → Tentukan CCP & Batas Kritis (Critical Limit)',
          'Lengkapi Legalitas Komersial: NIB, PIRT / BPOM MD, SKP KKP, dan Sertifikat Halal BPJPH'
        ],
        syllabus: [
          {
            topic: '8 Keys of SSOP (8 Kunci Prosedur Operasi Standar Sanitasi)',
            detail: '8 aspek kebersihan wajib pabrik ikan: (1) Keamanan air & es, (2) Kebersihan permukaan kontak produk, (3) Pencegahan kontaminasi silang, (4) Fasilitas cuci tangan & toilet, (5) Perlindungan dari bahan kimia, (6) Pelabelan & penyimpanan bahan beracun, (7) Kesehatan karyawan, (8) Pengendalian hama (pest control).'
          },
          {
            topic: 'Traceability System (Sistem Ketertelusuran Produk)',
            detail: 'Kemampuan melacak riwayat setiap kotak produk ekspor hingga ke asal tambak/kapal penangkap, tanggal panen, dan pekerja yang memprosesnya menggunakan kode lot/batch.'
          }
        ],
        todos: [
          'Susun 1 dokumen lengkap HACCP Plan (12 langkah) untuk produk Udang Beku IQF atau Fillet Ikan.',
          'Pelajari alur pendaftaran izin edar BPOM MD (wajib untuk makanan beku/kaleng/suplemen) dan Sertifikat Halal.'
        ],
        output: 'Portofolio dokumen lengkap GMP, SSOP, dan HACCP Plan siap tunjuk saat wawancara kerja.',
        tips: 'Lulusan baru yang sudah bisa menyusun dokumen HACCP Plan langsung diprioritaskan oleh HRD pabrik.',
        subBranches: [
          {
            id: 'p5-sub-bpom-halal',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 5.1',
            badgeType: 'samarinda',
            title: 'Izin Edar BPOM MD, PIRT, CPPOB & Sertifikat Halal',
            subtitle: 'Syarat mutlak agar produk olahan ikanmu bisa masuk supermarket & ekspor',
            keywords: 'BPOM MD CPPOB SJPH Halal certification food labeling SNI',
            visualSteps: [
              'Pemisahan alur perizinan: PIRT (produk kering suhu ruang UMKM) vs BPOM MD (frozen food, kaleng, suplemen)',
              'Audit CPPOB (Cara Produksi Pangan Olahan yang Baik) & Sistem Jaminan Produk Halal (SJPH)',
              'Desain Label Kemasan sesuai aturan BPOM (Komposisi, Berat Bersih, Informasi Nilai Gizi, Kode Produksi)'
            ],
            syllabus: [
              {
                topic: 'CPPOB (Cara Produksi Pangan Olahan yang Baik)',
                detail: 'Standar kelayakan fasilitas bangunan, alur ruangan, dan higiene produksi yang diaudit oleh BPOM sebelum menerbitkan nomor izin edar BPOM MD.'
              },
              {
                topic: 'SJPH (Sistem Jaminan Produk Halal)',
                detail: 'Sistem manajemen untuk menjaga kesinambungan proses produksi halal mulai dari pemeriksaan bahan baku (seperti enzim, gelatin, bumbu) hingga penyimpanan bebas najis.'
              }
            ],
            todos: [
              'Pelajari perbedaan persyaratan ruang produksi antara PIRT dan BPOM MD.',
              'Buat rancangan label kemasan pangan lengkap dengan tabel Informasi Nilai Gizi (Nutrition Facts).'
            ],
            output: 'Checklist kelengkapan audit CPPOB BPOM dan desain label kemasan patuh regulasi.',
            tips: 'Banyak produk UMKM Kaltim gagal masuk ritel modern hanya karena tidak punya nomor BPOM MD dan tabel gizi!'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p5-pkl-luar',
        category: 'branch',
        badgeText: '✈️ WAJIB KELUAR KOTA',
        badgeType: 'global',
        title: 'Target PKL / Magang Pabrik Ekspor Nasional',
        subtitle: 'Pindah sementara dari Samarinda ke pusat industri pengolahan seafood Indonesia',
        keywords: 'seafood export company Surabaya Sidoarjo Banyuwangi Makassar Bitung',
        visualSteps: [
          'Klaster Jawa Timur (Surabaya, Sidoarjo, Pasuruan, Banyuwangi): Pusat pabrik udang & tuna terbesar',
          'Klaster Sulawesi (Makassar, Bitung, Kendari): Pusat ekspor ikan pelagis, gurita & rajungan',
          'Klaster Kaltara/Kaltim (Tarakan & Balikpapan): Pabrik cold storage ekspor udang windu & kepiting'
        ],
        syllabus: [
          {
            topic: 'SKP (Sertifikat Kelayakan Pengolahan)',
            detail: 'Sertifikat resmi yang diterbitkan Kementerian Kelautan dan Perikanan (KKP) dengan peringkat Grade A, B, atau C sebagai syarat mutlak pabrik boleh mengekspor.'
          },
          {
            topic: 'EU Approval Number & FDA Registration',
            detail: 'Nomor registrasi khusus pabrik pengolahan ikan Indonesia yang telah lolos audit langsung dari inspektur Uni Eropa dan Amerika Serikat.'
          }
        ],
        todos: [
          'Daftar minimal 10 perusahaan eksportir seafood besar (misal: PT Sekar Bumi, PT Kelola Mina Laut, PT Bumi Menara Internusa, PT Mustika Minanusa Aurora Tarakan).',
          'Selama PKL, pelajari tata letak pabrik (plant layout), kapasitas mesin, dan asal-usul suplier bahan baku mereka.'
        ],
        output: 'Pengalaman kerja nyata di lini produksi ekspor dan jejaring mentor industri.',
        tips: 'Banyak pabrik ekspor di Jawa sebenarnya kekurangan bahan baku udang dan ikan dari Kalimantan—di sinilah celah bisnismu nanti!',
        subBranches: [
          {
            id: 'p5-sub-plantlayout',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 5.2',
            badgeType: 'global',
            title: 'Desain Tata Letak Pabrik (Plant Layout) & Alur Satu Arah',
            subtitle: 'Membedah rahasia efisiensi pabrik pengolahan ikan agar bebas kontaminasi silang',
            keywords: 'seafood plant layout linear flow high care low care zoning',
            visualSteps: [
              'Pemisahan Zona Kotor (Receiving / Pencucian Awal) dengan Zona Bersih / High-Care (Packing)',
              'Alur Proses Satu Arah (Linear / U-Shape Flow) tanpa jalur bolak-balik yang saling bersilangan',
              'Desain lantai epoksi miring 2% ke saluran drainase tertutup & sudut dinding melengkung (coving)'
            ],
            syllabus: [
              {
                topic: 'Unidirectional Flow (Alur Produksi Satu Arah)',
                detail: 'Tata letak ruangan pabrik yang dirancang mengalir lurus dari penerimaan bahan baku mentah → pembersihan → pembekuan/pemasakan → pengemasan akhir sehingga bahan mentah tidak pernah bertemu produk matang.'
              },
              {
                topic: 'High-Care vs Low-Care Zoning (Zonasi Risiko Ruang)',
                detail: 'Pembagian area pabrik berdasarkan tingkat kebersihan, di mana pekerja di zona High-Care (pengemasan akhir) wajib memakai seragam, sepatu, dan ruang ganti terpisah dari pekerja bagian pemotongan kepala ikan.'
              }
            ],
            todos: [
              'Gambar sketsa tata letak (plant layout) lini produksi pembekuan udang atau pabrik ekstraksi albumin saat PKL.',
              'Catat spesifikasi material dinding, lantai, dan pencahayaan ruang produksi sesuai standar SKP Grade A.'
            ],
            output: 'Gambar teknis tata letak pabrik pengolahan perikanan standar ekspor.',
            tips: 'Jika suatu hari kamu membangun pabrik sendiri di Samarinda atau Balikpapan, desain layout yang benar sejak awal akan menghemat biaya renovasi ratusan juta rupiah.'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 6: KARIER AKSELERASI & PENGUASAAN BISNIS EKSPOR (TAHUN 1-2)
  // ==========================================================================
  {
    id: 'phase-6',
    spine: {
      id: 'p6-spine',
      category: 'spine',
      badgeText: 'FASE 6 • LULUS & TAHUN 1–2',
      badgeType: 'global',
      title: 'Karier Akselerasi & Penguasaan Bisnis Ekspor',
      subtitle: 'Mengumpulkan modal, kredibilitas, dan pemahaman transaksi perdagangan global',
      keywords: 'seafood export business B2B international trade management trainee',
      visualSteps: [
        'Jalur 1: Management Trainee (MT) / QA di Perusahaan Multinasional atau Eksportir Besar',
        'Jalur 2: Bangun Unit Agregasi / Processing Mini di Kaltim untuk Pasok Pabrik Besar',
        'Kuasai Negosiasi B2B, Kontrak Ekspor, dan Pembiayaan Perdagangan Internasional'
      ],
      syllabus: [
        {
          topic: 'B2B (Business-to-Business) Supply Chain',
          detail: 'Model bisnis memasok bahan baku setengah jadi (seperti fillet ikan, udang HLSO, surimi, atau ekstrak kolagen) dalam jumlah tonase besar ke pabrik atau distributor luar negeri.'
        },
        {
          topic: 'Unit Economics & Yield Management (Manajemen Rendemen)',
          detail: 'Dalam industri perikanan, selisih rendemen kupas udang atau fillet ikan sebesar 2% saja bisa menentukan apakah pabrik untung miliaran atau bangkrut.'
        },
        {
          topic: 'Export Pricing Structure (Struktur Harga Ekspor)',
          detail: 'Perhitungan biaya ekspor dari hulu ke hilir: Harga Bahan Baku + Biaya Proses + Kemasan + Biaya Lab/Sertifikat + Trucking ke Pelabuhan + Ocean Freight + Asuransi + Margin Profit.'
        }
      ],
      todos: [
        'Tingkatkan kemampuan Bahasa Inggris bisnis (terutama istilah negosiasi ekspor & korespondensi email B2B).',
        'Pelajari cara menghitung HPP pabrik skala tonase termasuk biaya listrik cold storage, es, dan susut bobot.',
        'Buat profil LinkedIn profesional yang menonjolkan keahlian THP, sertifikasi HACCP, dan pengalaman lab/PKL.'
      ],
      output: 'Pengalaman profesional di industri pangan/ekspor atau kontrak pasokan B2B pertama.',
      tips: 'Gunakan 1–2 tahun pertama setelah lulus untuk digaji sambil belajar cara perusahaan besar mengelola uang dan rantai pasok.'
    },
    left: [
      {
        id: 'p6-karir-korporasi',
        category: 'branch',
        badgeText: '🏢 KARIER & KEWIRAUSAHAAN',
        badgeType: 'global',
        title: 'Jalur Korporasi (MT/QA/R&D) & Manajemen Rendemen Pabrik',
        subtitle: 'Membangun fondasi finansial, jaringan eksekutif & ketajaman hitung-hitungan pabrik',
        keywords: 'management trainee FMCG quality assurance R&D food technologist',
        visualSteps: [
          'Incar program Management Trainee (MT) di Indofood, Charoen Pokphand, Japfa, Mayora, atau Eksportir Seafood',
          'Kuasai standar audit global (BRCGS, ISO 22000, FSSC 22000, MSC/ASC)',
          'Naik posisi ke QA Manager / Plant Manager atau kelola unit produksi mandiri'
        ],
        syllabus: [
          {
            topic: 'BRCGS / FSSC 22000 (Standar Keamanan Pangan Global GFSI)',
            detail: 'Sertifikasi keamanan pangan tingkat tertinggi yang diminta oleh jaringan supermarket raksasa dunia (seperti Walmart, Costco, Carrefour).'
          },
          {
            topic: 'MSC & ASC Certification (Sertifikasi Keberlanjutan Perikanan)',
            detail: 'Marine Stewardship Council (tangkap alam) dan Aquaculture Stewardship Council (budidaya). Produk berlogo biru/hijau ini dibeli jauh lebih mahal oleh pasar Eropa dan AS.'
          }
        ],
        todos: [
          'Siapkan CV berbasis pencapaian teknis (sertifikasi HACCP, proyek lab, riset hilirisasi).',
          'Latih studi kasus pemecahan masalah produksi (Root Cause Analysis / Fishbone Diagram).'
        ],
        output: 'Diterima bekerja di posisi strategis dengan jalur kenaikan karier cepat.',
        tips: 'Koneksi dengan bagian Purchasing (pembelian bahan baku) di perusahaan besar akan sangat berguna saat kamu membuka usaha pemasok sendiri.',
        subBranches: [
          {
            id: 'p6-sub-yield-hpp',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 6.1',
            badgeType: 'global',
            title: 'Perhitungan Rendemen (Yield), HPP & Break-Even Point Pabrik',
            subtitle: 'Ilmu wajib pemilik pabrik agar margin profit tidak bocor di meja produksi',
            keywords: 'fish fillet yield calculation seafood processing cost COGS BEP',
            visualSteps: [
              'Hitung Yield Bertahap: Berat Utuh (Whole) → Tanpa Kepala (Headless ~65%) → Kupas Bersih (PTO ~48%)',
              'Kalkulasi Biaya Konversi per Kg (Tenaga kerja kupas, listrik cold storage, air, es, kemasan)',
              'Tentukan Harga Jual Minimum & Titik Impas (BEP Tonase Bulanan)'
            ],
            syllabus: [
              {
                topic: 'Processing Yield / Rendemen Pengolahan',
                detail: 'Persentase berat produk akhir yang dihasilkan dibagi berat bahan baku awal dikali 100%. Contoh: 100 kg ikan patin utuh menghasilkan ~35–38 kg fillet tanpa kulit (skinless fillet).'
              },
              {
                topic: 'Shrinkage / Susut Bobot Pembekuan',
                detail: 'Kehilangan berat daging akibat penguapan air selama proses pembekuan di mesin ABF (biasanya 1–3%) yang wajib diperhitungkan dalam rumus harga jual.'
              }
            ],
            todos: [
              'Buat template kalkulator Excel untuk menghitung HPP pengolahan udang beku dan fillet ikan patin.',
              'Simulasikan dampak kenaikan harga bahan baku 10% terhadap margin keuntungan bersih.'
            ],
            output: 'Model finansial Excel unit ekonomi pengolahan hasil perikanan.',
            tips: 'Banyak bisnis perikanan bangkrut bukan karena tidak laku, melainkan karena salah menghitung rendemen dan susut bobot!'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p6-ekspor-trade',
        category: 'branch',
        badgeText: '🚢 EKSPOR GLOBAL',
        badgeType: 'leverage',
        title: 'Mekanisme Ekspor Kontainer & Pembayaran Dunia',
        subtitle: 'Cara mengirim ikan dari Kaltim ke Jepang/AS dan dibayar aman dalam Dolar',
        keywords: 'seafood export documents health certificate COO LC incoterms FOB CIF',
        visualSteps: [
          'Cari Buyer Luar Negeri (TradeMap, pameran Seafood Expo Global, Atase Perdagangan/ITPC)',
          'Siapkan Dokumen Wajib: Health Certificate (BKIPM), Certificate of Origin (SKA), Bill of Lading',
          'Kirim via Reefer Container (-20°C) dengan pembayaran aman Letter of Credit (L/C)'
        ],
        syllabus: [
          {
            topic: 'Incoterms: FOB vs CIF (Syarat Penyerahan Barang Ekspor)',
            detail: 'FOB (Free On Board): Tanggung jawabmu sampai barang naik ke kapal di pelabuhan muat (misal Pelabuhan Kariangau/Semayang). CIF (Cost, Insurance, Freight): Kamu menanggung ongkos kirim dan asuransi sampai pelabuhan negara tujuan.'
          },
          {
            topic: 'Letter of Credit / L/C (Jaminan Pembayaran Bank)',
            detail: 'Instrumen pembayaran internasional di mana bank pembeli menjamin akan membayar eksportir begitu dokumen pengapalan (Bill of Lading & Health Certificate) diserahkan sesuai kontrak.'
          }
        ],
        todos: [
          'Pelajari cara mengakses data pembeli luar negeri gratis melalui situs TradeMap.org dan Kementerian Perdagangan.',
          'Pahami prosedur penerbitan Health Certificate dari Balai Karantina Ikan (BKIPM).'
        ],
        output: 'Simulasi penawaran harga ekspor (Export Quotation Sheet) dalam USD per kg (FOB & CIF).',
        tips: 'Jangan pernah mengirim kontainer ekspor pertama tanpa DP minimal 30–50% atau jaminan L/C dari bank terpercaya.',
        subBranches: [
          {
            id: 'p6-sub-dokumen',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 6.2',
            badgeType: 'leverage',
            title: 'Dokumen Wajib Ekspor Perikanan & Reefer Container',
            subtitle: 'Syarat mutlak agar kontainer tidak tertahan di bea cukai negara tujuan',
            keywords: 'reefer container cold chain health certificate seafood export',
            visualSteps: [
              'PEB (Pemberitahuan Ekspor Barang) & Commercial Invoice / Packing List',
              'Health Certificate (HC) dari Karantina Ikan & Catch Certificate (SHTI)',
              'Stuffing ke Reefer Container 20ft/40ft suhu terkontrol -20°C dengan Data Logger'
            ],
            syllabus: [
              {
                topic: 'Reefer Container (Kontainer Berpendingin)',
                detail: 'Kontainer pengiriman laut khusus yang dilengkapi mesin pendingin mandiri untuk menjaga suhu stabil antara -25°C hingga +25°C selama pelayaran lintas benua.'
              },
              {
                topic: 'Catch Certificate / SHTI (Sertifikat Hasil Tangkapan Ikan)',
                detail: 'Dokumen wajib untuk membuktikan bahwa ikan yang diekspor berasal dari penangkapan legal (bebas Illegal, Unreported, and Unregulated / IUU Fishing).'
              }
            ],
            todos: [
              'Pelajari kapasitas muat Reefer Container 20 feet (~10–12 ton) dan 40 feet High Cube (~22–25 ton).',
              'Cek rute pelayaran ekspor langsung dari Pelabuhan Kariangau Balikpapan ke luar negeri.'
            ],
            output: 'Checklist lengkap dokumen ekspor hasil perikanan Indonesia.',
            tips: 'Pelabuhan Kaltim Kariangau Terminal (KKT) di Balikpapan kini memiliki rute pelayaran langsung internasional yang memangkas biaya logistik!'
          },
          {
            id: 'p6-sub-buyer-hunting',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 6.3',
            badgeType: 'leverage',
            title: 'Strategi Mencari Buyer Luar Negeri & Negosiasi B2B',
            subtitle: 'Cara menembus importir seafood di Jepang, Amerika, Tiongkok & Timur Tengah',
            keywords: 'TradeMap seafood importers B2B negotiation sample shipment',
            visualSteps: [
              'Riset negara importir terbesar kode HS Perikanan (HS Code 0306 Udang, 0304 Fillet Ikan) di TradeMap',
              'Kirim Company Profile + Product Spec Sheet + Harga FOB/CIF ke email Purchasing Importir',
              'Kirim Sampel Produk Beku via Air Cargo (DHL/FedEx) → Uji Lab Buyer → Kontrak Kontainer Pertama'
            ],
            syllabus: [
              {
                topic: 'HS Code (Harmonized System Code)',
                detail: 'Kode klasifikasi barang perdagangan internasional 6–10 digit untuk mengecek tarif bea masuk dan data importir di seluruh dunia (misal: 0306.17 untuk udang beku).'
              },
              {
                topic: 'Product Specification Sheet (Lembar Spesifikasi Produk Ekspor)',
                detail: 'Dokumen teknis 1 halaman berisi nama latin spesies, ukuran (size count per pound), persentase glazing, jenis kemasan, standar mikrobiologi, dan sertifikasi pabrik.'
              }
            ],
            todos: [
              'Buat 1 dokumen Company Profile & Product Spec Sheet berbahasa Inggris yang profesional.',
              'Daftar akun gratis di TradeMap.org dan analisis 5 negara tujuan ekspor utama udang & ikan Indonesia.'
            ],
            output: 'Database 20 importir seafood luar negeri beserta dokumen penawaran B2B.',
            tips: 'Buyer luar negeri tidak peduli seberapa besar kantormu di Samarinda—yang mereka nilai adalah kelengkapan spesifikasi teknis, sertifikat mutu, dan ketepatan pengiriman sampel!'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 7: SCALE-UP PABRIK, KEPEMILIKAN ASET & EKSPANSI GLOBAL (TAHUN 3-5+)
  // ==========================================================================
  {
    id: 'phase-7',
    spine: {
      id: 'p7-spine',
      category: 'spine',
      badgeText: 'FASE 7 • TAHUN 3–5+ (ENDGAME)',
      badgeType: 'leverage',
      title: 'Scale-Up Pabrik, Kepemilikan Aset & Ekspansi Global',
      subtitle: 'Membangun kerajaan bisnis perikanan terintegrasi dari Kalimantan Timur untuk pasar dunia',
      keywords: 'seafood processing plant investment scaling B2B export business Kaltim IKN',
      visualSteps: [
        'Kuasai Hulu: Kemitraan Kontrak Tambak Delta Mahakam, Rumput Laut PPU/Kukar & Nelayan Mahakam',
        'Kuasai Tengah: Pabrik Cold Storage & Ekstraksi SUS 316L Berstandar SKP Grade A / HACCP / BPOM MD',
        'Kuasai Hilir: Ekspor Kontainer FCL via KKT Balikpapan, Kontrak B2B Kosmetik/Farmasi & Pasokan IKN'
      ],
      syllabus: [
        {
          topic: 'Vertical Integration (Integrasi Vertikal Hulu ke Hilir)',
          detail: 'Strategi menguasai rantai pasok secara menyeluruh dari sumber bahan baku (kemitraan tambak/nelayan), fasilitas pengolahan milik sendiri (pabrik dan cold storage), hingga penjualan langsung ke pembeli luar negeri atau industri hilir tanpa perantara berlapis.'
        },
        {
          topic: 'Asset and IP Leverage (Daya Ungkit Aset Fisik & Kekayaan Intelektual)',
          detail: 'Kekayaan besar dibangun dari kepemilikan fasilitas produksi berizin ekspor yang memiliki hambatan masuk tinggi (SKP Grade A, HACCP, Approval Number) serta perlindungan Paten Sederhana atas formulasi ekstraksi bernilai tinggi di DJKI.'
        },
        {
          topic: 'Good Corporate Governance (Tata Kelola Perseroan Terbatas Bankable)',
          detail: 'Transformasi usaha menjadi Perseroan Terbatas (PT) dengan NIB OSS RBA, NPWP badan, akta pendirian, Rapat Umum Pemegang Saham (RUPS), dan tim inti tersertifikasi agar layak mengakses kredit ekspor hingga Rp15 miliar.'
        }
      ],
      todos: [
        'Susun Feasibility Study (Studi Kelayakan Bisnis) lengkap mencakup CAPEX mesin, OPEX bulanan, proyeksi arus kas, dan titik impas (BEP) pendirian fasilitas di Kaltim.',
        'Resmikan badan usaha Perseroan Terbatas (PT) dan aktifkan perizinan berusaha subsektor pengolahan serta pemasaran ikan di sistem OSS RBA.',
        'Bentuk tim inti operasional: Kepala Produksi, QA Manager bersertifikat HACCP dan SPI (KKP), Penyelia Halal bersertifikat, serta Tim Export Sales.',
        'Tetapkan prioritas jalur eksekusi awal antara Ekspor Kontainer Cold Chain (Cabang Kiri) atau Pabrik Bioteknologi & Brand Nasional (Cabang Kanan).'
      ],
      output: 'Perusahaan PT eksportir hasil perikanan atau produsen bahan baku bioteknologi mandiri yang bankable.',
      tips: 'Posisi Kalimantan Timur yang berdekatan dengan IKN serta dukungan jalur pelayaran ekspor langsung di Pelabuhan Kariangau Balikpapan menjadikan daerah ini titik strategis investasi hilirisasi perikanan 10 tahun ke depan.'
    },
    left: [
      {
        id: 'p7-hulu-hilir',
        category: 'branch',
        badgeText: '🏭 KEPEMILIKAN ASET & EKSPOR',
        badgeType: 'samarinda',
        title: 'Bangun Pabrik Cold Storage & Ekspor di Kaltim',
        subtitle: 'Memotong rantai tengkulak dan mengekspor langsung dari Kalimantan ke pasar dunia',
        keywords: 'cold storage investment Kaltim seafood processing plant KKT Balikpapan',
        visualSteps: [
          'Mulai dari Gudang Pengumpul & Pembekuan Skala Menengah (Kapasitas 20–50 Ton)',
          'Urus Sertifikat SKP Grade A, PMMT/HACCP, dan Nomor Registrasi Negara Tujuan (GACC/EU)',
          'Kirim Kontainer Reefer Langsung via KKT Balikpapan dengan Dukungan Kredit LPEI & L/C'
        ],
        syllabus: [
          {
            topic: 'Working Capital Turnover (Perputaran Modal Kerja)',
            detail: 'Kecepatan mengubah uang tunai menjadi bahan baku ikan/udang dari tambak, memproses dan membekukannya, mengapalkannya ke negara tujuan, lalu mencairkan pembayaran L/C kembali menjadi kas.'
          },
          {
            topic: 'Contract Farming (Kemitraan Kontrak Tambak & Nelayan)',
            detail: 'Sistem kerja sama terikat dengan petambak udang/ikan dan nelayan di Kaltim dengan standar panen bebas antibiotik, sistem ketertelusuran (traceability), serta kepastian serapan panen.'
          }
        ],
        todos: [
          'Petakan lokasi pabrik paling efisien antara koridor sentra tambak (Samarinda/Muara Badak) dan akses pelabuhan ekspor (Kariangau Balikpapan / Palaran).',
          'Pelajari keempat sub-cabang teknis di bawah ini sebelum mengeksekusi pembangunan cold storage atau mengajukan pembiayaan ekspor.'
        ],
        output: 'Fasilitas pengolahan dan penyimpanan beku perikanan berstandar ekspor milik sendiri.',
        tips: 'Jangan memaksakan kapasitas 100 ton sekaligus di tahun pertama bila modal kerja belum siap; mulai secara modular di skala 20–50 ton lalu ekspansi mengikuti kontrak ekspor.',
        subBranches: [
          {
            id: 'p7-sub-capex-coldchain',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.1',
            badgeType: 'samarinda',
            title: '1. Desain Pabrik Cold Storage, ABF vs IQF & CAPEX/OPEX',
            subtitle: 'Kalkulasi teknis panel insulasi PIR, mesin pembeku, dan perputaran modal kerja',
            keywords: 'cold storage 50 ton ABF IQF PIR insulation panel under slab heater CAPEX',
            visualSteps: [
              'Pilih Pembekuan: ABF (-35°C s/d -40°C, hemat CAPEX) vs IQF (3–15 menit, susut drip loss hanya 3–8%)',
              'Konstruksi Ruang Beku: Panel PIR 150–200 mm, Pemanas Bawah Lantai (Under-Slab Heater), & Segel Rapat',
              'Alokasikan CAPEX (Estimasi Cold Storage 50 Ton Rp1,5–2,5 Miliar) + Cadangan Modal Kerja OPEX Bulanan'
            ],
            syllabus: [
              {
                topic: 'Air Blast Freezer vs IQF (Pembeku Hembus Udara vs Pembeku Cepat Individual)',
                detail: 'ABF bekerja secara batch (-35°C s/d -40°C) dengan kristal es > 100 mikrometer dan drip loss 10–20%, cocok untuk volume fluktuatif dengan investasi awal lebih rendah. IQF bekerja kontinu dalam 3–15 menit dengan kristal es < 25 mikrometer dan drip loss hanya 3–8%, sehingga pada throughput 1.000 kg/hari selisih susut 7% mampu menyelamatkan sekitar 70 kg bobot produk setiap hari.'
              },
              {
                topic: 'Under-Slab Heater and PIR Insulation (Pemanas Bawah Lantai & Insulasi PIR)',
                detail: 'Ruangan di bawah -20°C membutuhkan panel insulasi PIR setebal 150–200 mm (target nilai U 0,17–0,24 W/m²K; standar R-32 dinding/atap dan R-28 lantai), segel udara ketat (< 0,1 m³/jam/m² pada 50 Pa), vapour barrier di sisi hangat, serta under-slab heater untuk mencegah frost heave (tanah membeku dan meretakkan pelat lantai).'
              },
              {
                topic: 'Cold Storage CAPEX and OPEX Benchmarks (Tolok Ukur Investasi & Operasional)',
                detail: 'Berdasarkan estimasi vendor komersial, paket Cold Storage 50 ton berkisar Rp1,5–2,5 miliar (atau Rp6–20 juta/m² tergantung spesifikasi; dokumen perencanaan cold room modular dasar 50 ton saja tercatat ±Rp185–210 juta di luar bangunan sipil dan mesin pembeku). Untuk skala portabel 100 ton tanpa ABF, analisis praktisi mencatat investasi sekitar Rp4,5 miliar dengan biaya operasional bulanan Rp2,6 miliar.'
              }
            ],
            todos: [
              'Hitung payback selisih drip loss IQF vs ABF untuk komoditas targetmu (udang kupas/fillet vs ikan utuh blok).',
              'Pastikan kontrak konstruksi ruang beku mencantumkan pemasangan under-slab heater, anteroom pemuatan, dan penyekat uap air.',
              'Siapkan dana cadangan OPEX bulanan untuk pembelian bahan baku, daya listrik industri (misal 66 KVA+ pada proyek 50 ton), dan gaji operator sebelum dana ekspor cair.'
            ],
            output: 'Dokumen RAB teknik pembangunan fasilitas, spesifikasi mesin ABF/IQF, dan proyeksi kebutuhan kas bulanan.',
            tips: 'Kesalahan paling umum pemilik cold storage baru adalah menghabiskan seluruh modal untuk bangunan dan mesin, lalu kekurangan uang tunai untuk membeli ikan dan udang dari pemasok.'
          },
          {
            id: 'p7-sub-kemitraan-hulu',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.2',
            badgeType: 'samarinda',
            title: '2. Kemitraan Hulu Tambak Delta Mahakam & Nelayan Mahakam',
            subtitle: 'Mengamankan pasokan udang silvofishery, rumput laut & ikan gabus grade optimal',
            keywords: 'silvofishery Delta Mahakam contract farming traceability Channa striata 600-900g',
            visualSteps: [
              'Delta Mahakam (Muara Badak & Anggana): Kemitraan Tambak Silvofishery Udang Windu Bebas Antibiotik',
              'PPU, Paser, Berau & Muara Badak: Agregasi Rumput Laut (9.000 Ton/Thn di PPU) & Ikan Karang Ekspor',
              'Mahakam Tengah (Kota Bangun & Muara Muntai): Sortasi Ikan Gabus Bobot 600–900g (Albumin Tertinggi)'
            ],
            syllabus: [
              {
                topic: 'Silvofishery and Supplier Certification (Tambak Silvofishery & Sertifikasi Pemasok)',
                detail: 'Budidaya udang windu berbasis silvofishery di kawasan mangrove Delta Mahakam unggul karena alami dan bebas antibiotik. Untuk menembus pabrik pemegang Approval Number Uni Eropa, KKP mewajibkan sertifikasi ketertelusuran hingga tingkat pemasok bahan baku.'
              },
              {
                topic: 'Optimal Snakehead Grading (Standar Ukuran Ikan Gabus DAS Mahakam)',
                detail: 'Studi ilmiah ikan gabus asal DAS Mahakam Tengah menunjukkan kelompok ukuran sedang (600–900 g) menghasilkan kadar protein ekstrak (59,24–63,59%) dan kadar albumin ekstrak (14,23–17,85%) tertinggi secara signifikan (p < 0,05) dibanding ukuran < 600 g atau > 900 g, dengan edible portion 49,87–54,73%.'
              },
              {
                topic: 'Regional Downstream Synergy (Sinergi Ekosistem Hilirisasi Kaltim)',
                detail: 'Kaltim tengah mempercepat hilirisasi daerah, antara lain lewat 6.000 ha tambak produktif rumput laut di PPU (9.000 ton/tahun), penyelesaian pabrik olahan rumput laut Pemkab Kukar di Muara Badak, serta program HILIR BERAU dan rumah produksi pengalengan ikan di Tanjung Batu.'
              }
            ],
            todos: [
              'Bangun kemitraan kontrak dengan kelompok petambak silvofishery di Muara Badak/Anggana dan pencatatan kode lot tambak untuk traceability.',
              'Terapkan sistem harga beli bertingkat di pos pengumpul Mahakam Tengah dengan harga premium untuk ikan gabus segar bobot 600–900 gram.',
              'Lengkapi pos pengumpul hulu dengan pasokan es curai, coolbox terisolasi, dan skrining awal mutu bahan baku.'
            ],
            output: 'Perjanjian kerja sama kemitraan pasokan hulu, SOP pencatatan ketertelusuran tambak, dan desain pos pengumpul dingin.',
            tips: 'Memasang standar sortasi bobot 600–900 gram khusus ikan gabus Mahakam langsung meningkatkan rendemen ekstrak albumin dan menurunkan biaya proses per kilogram serbuk.'
          },
          {
            id: 'p7-sub-perizinan-ekspor',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.3',
            badgeType: 'global',
            title: '3. Sertifikasi SKP Grade A, HACCP, Approval Number & Logistik KKT',
            subtitle: 'Menembus pasar Tiongkok (GACC), Turki, Uni Eropa & rute direct call Kaltim',
            keywords: 'SKP Grade A KKP HACCP GACC EU approval number Kariangau Terminal Palaran',
            visualSteps: [
              'Izin Operasional: NIB OSS RBA → SKP (Permen KP 17/2019) → Sertifikat PMMT/HACCP (BPPMHKP KKP)',
              'Registrasi Mitra: Pengajuan Surat Pengesahan Nomor Registrasi Ekspor (Approval Number GACC/EU/Turki)',
              'Pengapalan: Ekspor Langsung (Direct Call) via KKT Balikpapan atau Distribusi Kontainer via TPK Palaran'
            ],
            syllabus: [
              {
                topic: 'SKP and Approval Number (Sertifikat Kelayakan Pengolahan & Nomor Registrasi Ekspor)',
                detail: 'Setiap Unit Pengolahan Ikan (UPI) wajib mengantongi SKP (penerapan Cara Pengolahan Ikan yang Baik dan SSOP sesuai Permen KP 17/2019). Untuk mendapatkan Surat Pengesahan Nomor Registrasi Ekspor (Approval Number) ke negara mitra seperti Tiongkok (GACC), Uni Eropa, atau Turki, unit usaha wajib telah mengantongi sertifikat PMMT/HACCP.'
              },
              {
                topic: 'Direct Call Export via KKT Balikpapan (Ekspor Langsung Terminal Kariangau)',
                detail: 'PT Kaltim Kariangau Terminal (KKT) di Balikpapan telah melayani kapal ekspor langsung (direct call) menuju Jepang, Korea Selatan, dan Tiongkok (seperti layanan MV SITC Tianjin). Daftar tarif FCL container crane resmi KKT mencantumkan dua tingkat tarif yakni Rp875.001 / $90,00 dan Rp1.320.000 / $135,00 per boks (perbedaan layanan/ukuran).'
              },
              {
                topic: 'TPK Palaran Container Gateway (Gerbang Peti Kemas Samarinda)',
                detail: 'Terminal Peti Kemas Palaran di Samarinda (dermaga 270 m, gudang CFS 3.000 m², lapangan penumpukan 7,7 ha, kapasitas 300.000 TEUs) menjadi pintu pengiriman logistik utama dari Samarinda dan Hulu Mahakam menuju hub Surabaya dan Jakarta.'
              }
            ],
            todos: [
              'Penuhi audit kelayakan sarana dan dokumen SSOP/GMP untuk memperoleh SKP Grade A serta sertifikasi PMMT/HACCP dari BPPMHKP KKP.',
              'Ajukan registrasi Approval Number negara tujuan (termasuk GACC Tiongkok/CIFER, Uni Eropa, serta konfirmasi persyaratan negara mitra lain seperti FDA AS).',
              'Konfirmasikan jadwal kapal direct call, ketersediaan kontainer reefer, dan tarif listrik colokan reefer langsung ke pihak KKT Balikpapan dan agen pelayaran.'
            ],
            output: 'Kelengkapan izin ekspor UPI (SKP, HACCP, Approval Number) serta skema tarif dan rute logistik reefer Kaltim.',
            tips: 'Pelayaran direct call dari KKT Balikpapan memungkinkan ekspor ke Asia Timur bahkan dengan skala belasan kontainer tanpa harus menanggung biaya bongkar-muat ulang di Surabaya.'
          },
          {
            id: 'p7-sub-lpei-trade',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.4',
            badgeType: 'global',
            title: '4. Pembiayaan Ekspor LPEI (Eximbank), Asuransi & Perputaran L/C',
            subtitle: 'Mengakses kredit ekspor bunga 6%, agunan ringan 30%, dan proteksi gagal bayar',
            keywords: 'LPEI Indonesia Eximbank kredit ekspor 15 miliar bunga 6% Trade Credit Insurance',
            visualSteps: [
              'Ikuti Coaching Program for New Exporter (CPNE) & Marketing and Matching bersama LPEI',
              'Ajukan Kredit Ekspor UKM LPEI (Plafon s/d Rp15 Miliar, Bunga 6% Skema PKE, Agunan Min. 30%)',
              'Lindungi Transaksi dengan Trade Credit Insurance, Marine Cargo Insurance & Pembayaran L/C'
            ],
            syllabus: [
              {
                topic: 'LPEI Export Financing Facility (Fasilitas Pembiayaan LPEI / Indonesia Eximbank)',
                detail: 'LPEI menyediakan pembiayaan modal kerja (tenor maks 5 tahun) dan kredit investasi (tenor min 3 tahun) dengan plafon Rp500 juta–Rp2 miliar (usaha kecil) hingga Rp2 miliar–Rp15 miliar (usaha menengah; rata-rata penyaluran UKM Rp5–6 miliar). Pada program Penugasan Khusus Ekspor (PKE), bunga kredit ditetapkan 6% setara KUR dengan agunan minimal 30% dari limit.'
              },
              {
                topic: 'Trade Credit and Marine Cargo Insurance (Asuransi Risiko Ekspor & Penjaminan)',
                detail: 'LPEI menyediakan Penjaminan Kredit (solusi bila agunan ke bank kurang), Penjaminan Proyek (meningkatkan kepercayaan buyer internasional), Trade Credit Insurance (mengganti tagihan bila buyer luar negeri gagal bayar), Marine Cargo Insurance (proteksi kerusakan barang saat pelayaran), serta fasilitas Trade Finance.'
              },
              {
                topic: 'Non-Bankable Mandate PMK 58/2020 (Mandat Pembiayaan Proyek Non-Bankable)',
                detail: 'Pasal 17 PMK No. 58/PMK.06/2020 memberi wewenang LPEI untuk membiayai proyek ekspor yang belum dapat dibiayai perbankan biasa, serta memperluas dukungan pembiayaan ekspor produk halal.'
              }
            ],
            todos: [
              'Daftar program pendampingan CPNE dan kurasi ekspor di Indonesia Eximbank (LPEI) untuk mempertemukan perusahaan dengan buyer luar negeri.',
              'Siapkan kontrak ekspor/PO, laporan keuangan PT, dan aset agunan minimal 30% dari plafon yang diajukan.',
              'Wajibkan instrumen L/C atau asuransi Trade Credit Insurance LPEI pada kontrak pengiriman pertama agar kas perusahaan aman dari risiko gagal bayar.'
            ],
            output: 'Dokumen pengajuan kredit modal kerja/investasi LPEI dan SOP manajemen risiko pembayaran ekspor.',
            tips: 'Skema agunan minimal 30% dan bunga 6% di program Penugasan Khusus Ekspor LPEI jauh lebih ringan dibanding kredit komersial bank konvensional—manfaatkan untuk memutar kontrak ekspor.'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p7-biotech-brand',
        category: 'branch',
        badgeText: '👑 HIGH-MARGIN SCALE',
        badgeType: 'leverage',
        title: 'Pabrik Ekstraksi Bioteknologi & Brand Nasional',
        subtitle: 'Monetisasi paten albumin, kolagen ikan, kitosan dan pangan sehat protein tinggi',
        keywords: 'nutraceutical marine collagen B2B supplier brand scaling DJKI BPOM',
        visualSteps: [
          'Pabrik Ekstraksi Bahan Aktif SUS 316L (Albumin Gabus, Kolagen Sisik, Kitosan) Berstandar COA Ketat',
          'Perlindungan Hukum: Paten Sederhana DJKI (~8 Bulan), Izin BPOM MD/Kosmetik & Sertifikat Halal',
          'Ekspansi Pasar: Kontrak B2B ke Maklon Jawa + Distribusi Brand Pangan Sehat & Pasar Protein IKN'
        ],
        syllabus: [
          {
            topic: 'Intellectual Property / Patent (Hak Paten Formulasi & Proses)',
            detail: 'Perlindungan hukum eksklusif atas metode ekstraksi atau formulasi produkmu sehingga pesaing tidak bisa meniru secara ilegal dan valuasi perusahaanmu melonjak tajam.'
          },
          {
            topic: 'B2B Recurring Contracts (Kontrak Pasokan Berulang)',
            detail: 'Kontrak pasokan bahan baku bulanan selama 1–3 tahun dengan pabrik farmasi atau maklon kosmetik yang memberikan arus kas stabil dan terprediksi.'
          }
        ],
        todos: [
          'Pilih produk unggulan berdaya saing tertinggi di Kaltim (misal serbuk albumin ikan gabus Mahakam dan kolagen peptida ikan halal) untuk skala pabrik.',
          'Pelajari keempat sub-cabang teknis di bawah ini guna menguasai spesifikasi mesin ekstraksi, regulasi BPOM/Halal 2026–2028, serta penetrasi B2B dan IKN.'
        ],
        output: 'Perusahaan bioteknologi kelautan & perikanan dengan margin profit tinggi dan aset kekayaan intelektual.',
        tips: 'Kombinasi antara suplai bahan baku melimpah dari Kalimantan dan penguasaan teknologi pengolahan THP menjadi formula nyata menuju kesuksesan finansial besar, terutama karena albumin cair hanya bertahan ~1 bulan beku sehingga konversi ke serbuk kering sangat krusial.',
        subBranches: [
          {
            id: 'p7-sub-mesin-biotech',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.5',
            badgeType: 'leverage',
            title: '1. Rekayasa Pabrik Ekstraksi SUS 316L, Dryer & COA B2B',
            subtitle: 'Spesifikasi peralatan industri dan parameter mutu wajib pemasok farmasi/kosmetik',
            keywords: 'stainless steel 316L spray dryer freeze dryer COA marine collagen specs',
            visualSteps: [
              'Tangki Ekstraksi Baja Tahan Karat SUS 316L → Pemurnian & Filtrasi Membran Ultrafiltrasi',
              'Pengeringan Industri: Centrifugal Spray Dryer (Outlet 80–90°C) atau In-Situ Freeze Dryer (50 kg+)',
              'Uji Batch & Terbitkan COA (Protein ≥ 90–92%, Air ≤ 6–7%, Logam Berat ≤ 10 ppm, TPC ≤ 1.000 CFU/g)'
            ],
            syllabus: [
              {
                topic: 'SUS 316L Food and Pharma Grade Equipment (Peralatan Baja Tahan Karat 316L)',
                detail: 'Proses ekstraksi asam/basa membutuhkan material logam SUS 316L tahan korosi. Centrifugal Spray Dryer SUS 316L industri bekerja dengan suhu inlet 140–350°C dan outlet 80–90°C (penawaran dasar pemasok luar negeri dimulai dari kisaran $5.200+ di luar pengiriman, bea masuk, dan fasilitas pendukung), sedangkan In-Situ Freeze Dryer skala 50 kg+ dipilih untuk senyawa sensitif panas.'
              },
              {
                topic: 'B2B Certificate of Analysis / COA Standards (Standar Parameter Mutu COA)',
                detail: 'Mengacu tolok ukur COA pemasok kolagen dan kitosan B2B global, setiap batch harus mencantumkan nomor lot, masa simpan (24–48 bulan), tanda tangan QA/lab, serta memenuhi batas mutu: Protein ≥ 90,0–92,0%, pH 5,0–7,5, Susut Pengeringan ≤ 6,0–7,0%, Abu ≤ 2%, Total Logam Berat ≤ 10 ppm (Pb ≤ 3 ppm, As ≤ 2 ppm), TPC ≤ 1.000 CFU/g, Yeast & Mold ≤ 100 CFU/g, Coliforms ≤ 30 MPN/g, serta E. coli dan Salmonella Negatif.'
              }
            ],
            todos: [
              'Minta penawaran harga lengkap lini ekstraksi (tangki berjaket SUS 316L, sistem ultrafiltrasi sesuai target kiloDalton, dan Spray/Freeze Dryer) dari vendor mesin.',
              'Gandeng laboratorium uji eksternal terakreditasi KAN untuk memvalidasi bobot molekul (HPLC/MS), profil 18 asam amino, serta kebersihan mikrobiologi per batch.'
            ],
            output: 'Spesifikasi teknis lini mesin ekstraksi SUS 316L dan template resmi Certificate of Analysis (COA) B2B.',
            tips: 'Bagi produk kitosan kelas farmasi/GMP, proses pemurnian akhir dan pengeringan perlu dilakukan di ruang bersih (clean room class C) agar lolos audit pembeli korporasi.'
          },
          {
            id: 'p7-sub-paten-regulasi',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.6',
            badgeType: 'leverage',
            title: '2. Paten Sederhana DJKI, BPOM MD (PP 15/2026) & Wajib Halal',
            subtitle: 'Strategi perlindungan HAKI cepat dan kepatuhan regulasi edar terbaru 2026–2028',
            keywords: 'paten sederhana DJKI merek dagang BPOM PP 15 2026 wajib halal BPJPH 2028',
            visualSteps: [
              'Daftarkan Merek Dagang (10 Thn) & Paten Sederhana DJKI (Rata-rata ±8 Bulan vs ±54 Bulan Paten Biasa)',
              'Audit Sarana CPPOB/CPKB Alur Linear → Registrasi Produk e-BPOM (Tarif PNBP PP No. 15 Tahun 2026)',
              'Tuntaskan Sertifikat Halal BPJPH (Menengah Pangan Sudah Wajib 2024; Suplemen/Kosmetik/UMK Hingga Okt 2028)'
            ],
            syllabus: [
              {
                topic: 'Simple Patent vs Ordinary Patent at DJKI (Paten Sederhana vs Paten Biasa)',
                detail: 'Paten Biasa memberi proteksi 20 tahun dengan waktu proses rata-rata sekitar 54 bulan (substantif maks 30 bulan), sedangkan Paten Sederhana memberi proteksi 10 tahun namun selesai jauh lebih cepat sekitar 8 bulan (formalitas 5 hari, substantif 6 bulan; PNBP UMK Rp200.000 atau Umum Rp800.000/klaim). Pendaftaran Merek berlaku 10 tahun (Rp500.000/kelas UMK; Rp1,8 juta/kelas Umum).'
              },
              {
                topic: 'BPOM Registration PP 15/2026 (Alur & Tarif Registrasi BPOM 2026)',
                detail: 'Wajib lolos audit sarana CPPOB/CPKB dengan denah alur linear tanpa kontaminasi silang sebelum akun e-BPOM disetujui. Per 26 Mei 2026 (PP No. 15/2026), PNBP pangan olahan berkisar Rp200.000–Rp3.000.000/item (Rp0 bagi UMK pangan olahan dalam negeri), notifikasi kosmetik ASEAN Rp500.000/item, dan estimasi konsultan untuk PNBP suplemen/OT Rp1–5 juta/item. Pelanggaran edar berisiko pidana maks 2 tahun atau denda Rp4 miliar (Pasal 142 UU Pangan).'
              },
              {
                topic: 'Mandatory Halal Deadlines 2024–2028 (Jadwal Wajib Sertifikat Halal)',
                detail: 'Usaha Menengah dan Besar produk pangan/minuman SUDAH wajib halal sejak 17 Oktober 2024 (biaya reguler Menengah: Rp5 juta permohonan + Rp3,7–21,1 juta audit LPH; pangan ~Rp6,5 juta, kosmetik/obat ~Rp5,9 juta). Untuk UMK, produk impor, kosmetik, obat bahan alam, dan suplemen kesehatan, tenggat diperpanjang ke 17–18 Oktober 2028, tetapi pasar ritel dan B2B tetap mewajibkannya lebih awal. Wajib memiliki Penyelia Halal Muslim bersertifikat.'
              }
            ],
            todos: [
              'Ajukan klaim Paten Sederhana atas optimasi metode ekstraksi dan daftarkan Merek Dagang sesuai kelas produk di DJKI sebelum presentasi ke pihak luar.',
              'Siapkan denah pabrik alur satu arah dan dokumen SSOP untuk lulus audit CPPOB/CPKB BPOM.',
              'Sertifikasi Penyelia Halal internal dan proses sertifikasi halal reguler lewat portal SIHALAL tanpa menunda hingga 2028.'
            ],
            output: 'Dokumen pengajuan Paten Sederhana & Merek DJKI, izin edar BPOM MD/Kosmetik/Suplemen, serta Sertifikat Halal BPJPH.',
            tips: 'Memilih jalur Paten Sederhana (~8 bulan) memberi proteksi hukum nyata dalam hitungan bulan sehingga segera dapat dijadikan daya tawar saat meneken kontrak B2B.'
          },
          {
            id: 'p7-sub-ikn-fmcg',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.7',
            badgeType: 'leverage',
            title: '3. Kontrak B2B Maklon, Ekspansi Ritel FMCG & Pasar Protein IKN',
            subtitle: 'Memasok bahan aktif ke pabrik Jawa sekaligus merebut rantai pasok pangan IKN',
            keywords: 'B2B cosmetic pharma supplier FMCG retail HORECA Ibu Kota Nusantara IKN protein',
            visualSteps: [
              'B2B Jawa: Kirim Kit Sampel + COA Kolagen/Albumin ke Pabrik Maklon Kosmetik & Farmasi Jabodetabek/Surabaya',
              'Ritel Nasional: Distribusikan Brand Suplemen & Pangan Olahan Ikan Tinggi Protein ke Apotek & Ritel Modern',
              'Pasar Strategis IKN: Pasok Protein Perikanan ke Program MBG, Katering & Hotel Kawasan KIPP Nusantara'
            ],
            syllabus: [
              {
                topic: 'IKN and Kaltim Food Protein Demand (Proyeksi Kebutuhan Protein IKN & Program MBG)',
                detail: 'Studi ketahanan pangan Kaltim-IKN mencatat kebutuhan pangan total 2024 mencapai 2.113.213,23 ton (500 kg/tahun atau 1,36 kg/hari) dengan asumsi 25% konsumsi protein berasal dari ikan (kadar protein ikan segar ~18%). Pemprov Kaltim mengandalkan sentra perikanan untuk memasok program Makan Bergizi Gratis (MBG), sementara Otorita IKN dan Balai Besar Karantina Kaltim memperketat biosecurity dan keamanan pangan di KIPP Nusantara.'
              },
              {
                topic: 'Dual-Engine Commercial Strategy (Kombinasi Arus Kas B2B & Brand Ritel)',
                detail: 'Mengamankan utilitas pabrik lewat kontrak pasokan berulang B2B berjangka 1–3 tahun ke industri maklon dan katering korporat, sambil membesarkan margin valuasi lewat merek produk jadi B2C berizin BPOM dan Halal.'
              }
            ],
            todos: [
              'Kirimkan sampel uji beserta COA lengkap dan profil perusahaan ke manajer R&D serta Purchasing pabrik maklon kosmetik dan farmasi di Jabodetabek dan Surabaya.',
              'Daftarkan perusahaan sebagai vendor pemasok pangan olahan ikan terverifikasi keamanan pangan dan biosecurity untuk ekosistem IKN dan program MBG Kaltim.',
              'Masuk ke jaringan distributor ritel modern di Kalimantan dan Pulau Jawa setelah izin edar BPOM dan sertifikat halal terbit.'
            ],
            output: 'Kontrak pasokan B2B bahan baku tahunan dan jaringan distribusi ritel/katering kawasan IKN & nasional.',
            tips: 'Kewajiban sertifikasi halal bagi segmen menengah-besar yang sudah aktif serta standar biosecurity Karantina–OIKN menjadi saringan alami yang menyingkirkan pesaing informal dari proyek pengadaan IKN.'
          },
          {
            id: 'p7-sub-tata-kelola',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 7.8',
            badgeType: 'samarinda',
            title: '4. Tata Kelola PT, Bankability & Rekrutmen Tim Inti Unmul',
            subtitle: 'Membangun sistem korporasi mandiri yang layak didanai bank maupun investor',
            keywords: 'Good Corporate Governance PT audited financial report QA Manager SPI Unmul alumni',
            visualSteps: [
              'Tata Kelola Korporasi: Pembukuan Akuntansi Terintegrasi, Kepatuhan Pajak & Audit Keuangan PT',
              'Rekrutmen Alumni THP FPIK Unmul: QA Manager (Sertifikat HACCP + SPI), Analis R&D & Supervisor Produksi',
              'Delegasi Sistem KPI → Founder Fokus pada Ekspansi Buyer Global, Paten & Kemitraan Strategis'
            ],
            syllabus: [
              {
                topic: 'Corporate Bankability and GCG (Tata Kelola & Kelayakan Kredit Perusahaan)',
                detail: 'Penerapan Good Corporate Governance melalui pemisahan total kas pribadi dan PT, penyelenggaraan RUPS, serta pelaporan keuangan teraudit guna memenuhi syarat uji tuntas LPEI, perbankan, maupun mitra investor.'
              },
              {
                topic: 'Certified Technical Leadership (Kepemimpinan Teknis Wajib Bersertifikat)',
                detail: 'Operasional UPI skala industri mewajibkan penanggung jawab mutu bersertifikat SPI dan HACCP serta Penyelia Halal tersertifikasi. Alumni THP FPIK Unmul menjadi kolam talenta lokal terbaik di Samarinda untuk mengisi posisi QA, QC, dan R&D.'
              }
            ],
            todos: [
              'Pisahkan pembukuan perusahaan secara ketat dan lakukan audit laporan keuangan tahunan oleh Kantor Akuntan Publik (KAP).',
              'Bangun jalur rekrutmen magang dan ikatan dinas langsung dengan mahasiswa tingkat akhir THP FPIK Universitas Mulawarman.',
              'Tetapkan KPI bulanan yang jelas untuk Kepala Produksi (rendemen dan efisiensi listrik), QA Manager (kepatuhan audit), dan Tim Ekspor.'
            ],
            output: 'Struktur organisasi PT profesional, SOP pengendalian mutu dan keuangan, serta tim teknis tersertifikasi.',
            tips: 'Puncak kemandirian finansial tercapai ketika pabrik di Kaltim beroperasi secara sistematis bersama tim lulusan THP Unmul sementara kamu berfokus membuka kontrak ekspor dan aliansi B2B baru.'
          }
        ]
      }
    ]
  }
];