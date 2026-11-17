/**
 * ============================================================================
 * DATA ROADMAP: TEKNOLOGI HASIL PERIKANAN (THP) FPIK UNIVERSITAS MULAWARMAN
 * Peta Jalan Hilirisasi Perikanan, Bioteknologi & Ekspor Global
 * ============================================================================
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
      title: 'Fondasi Sains Pascapanen Tropis Lembap & Biokimia Ikan',
      subtitle: 'Menguasai struktur molekul daging ikan, rancangan statistik, dan peta produksi Kaltim',
      keywords: 'Teknologi Hasil Perikanan FPIK Unmul biokimia pascapanen ikan tropis rigor mortis K-value',
      visualSteps: [
        'Ikan hidup (ATP penuh, pH netral ~7,0, otot lentur) → Ditangkap & mati di lingkungan tropis lembap',
        'Fase Pre-Rigor → Fase Rigor Mortis (ikatan aktomiosin mengunci; suhu dingin 0°C memperpanjang fase ini)',
        'Fase Post-Rigor (enzim autolisis katepsin/kolagenase) → Degradasi ATP ke Hipoksantin & pertumbuhan bakteri',
        'Analisis Data Mutu: Pengolahan data eksperimen memakai Rancangan Acak Lengkap (ANOVA) & Regresi Linier'
      ],
      syllabus: [
        {
          topic: 'Post-Mortem Biochemistry (Biokimia Pascamati Ikan Tropis)',
          detail: 'Perubahan reaksi kimia di dalam otot ikan tepat setelah suplai oksigen berhenti. Cadangan glikogen diubah secara anaerob menjadi asam laktat sehingga pH daging turun dari ~7,0 menjadi 6,2–6,5. Pada suhu ruang Samarinda (28–32°C), laju penurunan pH dan fase rigor berlangsung 3–4 kali lebih cepat dibanding suhu es 0°C.'
        },
        {
          topic: 'Rigor Mortis & ATP Degradation Pathway (Jalur Degradasi Energi Otot)',
          detail: 'Urutan pemecahan energi otot: ATP → ADP → AMP → IMP (asam inosinat pemberi rasa gurih umami) → Inosin (HxR) → Hipoksantin (Hx, penyebab rasa pahit dan bau busuk). Saat ATP habis, filamen aktin dan miosin terkunci menjadi aktomiosin yang menyebabkan tubuh ikan kaku.'
        },
        {
          topic: 'K-Value (Indeks Kesegaran Kimiawi)',
          detail: 'Rasio persentase [(HxR + Hx) / (ATP + ADP + AMP + IMP + HxR + Hx)] × 100%. Ikan kualitas sashimi atau ekspor segar grade A wajib memiliki nilai K-Value di bawah 20%, sedangkan ikan di atas 60% sudah memasuki fase pembusukan awal.'
        },
        {
          topic: 'Experimental Design & Biostatistics (Statistika Rancangan Percobaan FPIK)',
          detail: 'Penguasaan Analisis Ragam (ANOVA / RAL & RAK) untuk menguji beda nyata perlakuan suhu, konsentrasi pereaksi, atau lama penyimpanan, serta Regresi Linier untuk memprediksi umur simpan di Kampus Gunung Kelua FPIK Unmul.'
        }
      ],
      todos: [
        'Unduh dokumen Kurikulum, RPS, dan daftar peralatan laboratorium internal Prodi THP FPIK Unmul (Kampus Gunung Kelua, Jl. Gunung Tabur, Samarinda).',
        'Amati perubahan kekakuan (rigor mortis) pada ikan nila/patin segar di suhu ruang Samarinda (~30°C) vs boks es curai 0°C setiap jam hingga fase post-rigor.',
        'Hafalkan jalur degradasi ATP → ADP → AMP → IMP → Inosin → Hipoksantin serta rumus perhitungan K-Value.',
        'Ikuti kegiatan pengabdian pesisir atau kompetisi ilmiah FPIK Unmul (seperti PHYCOFEST atau PKM di Pulau Tihi-Tihi Bontang / Sungai Kapih Samarinda).'
      ],
      output: 'Matriks Pemetaan Komoditas Kalimantan Timur (berbasis data BPS & DKP) serta laporan praktikum pengamatan rigor mortis berbasis uji statistik ANOVA.',
      tips: 'Paham biokimia dasar dan statistik membuatmu langsung mengerti kenapa pabrik ekspor rela membayar mahal untuk es curai dan pembekuan cepat, sekaligus memudahkanmu menyusun proposal hibah riset sejak semester awal.'
    },
    left: [
      {
        id: 'p1-komoditas',
        category: 'branch',
        badgeText: '📍 LOKAL KALTIM',
        badgeType: 'samarinda',
        title: 'Identifikasi & Peta Produksi Komoditas Kaltim',
        subtitle: 'Data produksi BPS 162.125 ton/tahun & realisasi ekspor Rp230 miliar di Kaltim',
        keywords: 'komoditas perikanan Delta Mahakam udang windu kepiting bakau rumput laut Bontang',
        visualSteps: [
          'Basis Budidaya Kaltim (BPS 2022): Total 162.125 ton (Rp7,04 Triliun) dari Tambak Sederhana (77.316 ton) & Karamba (73.885 ton)',
          'Sentra Regional: Kutai Kartanegara (72.027 ton karamba & 52.277 ton tambak), Paser (13.889 ton), PPU (9.201 ton), Bontang (4.185 ton rumput laut)',
          'Kinerja Ekspor (Jan–Mei 2026): 1.262 ton senilai Rp230 Miliar (Ekspor Udang Jan–Jul 2026 mencapai 1.385,88 ton / Rp274,74 Miliar)'
        ],
        syllabus: [
          {
            topic: 'Regional Aquaculture Production Map (Peta Produksi Budidaya Kaltim)',
            detail: 'Berdasarkan data BPS Kaltim (2022), produksi didominasi tambak sederhana (77.316 ton; Rp4,15 triliun) dan karamba air tawar (73.885 ton; Rp2,68 triliun), disusul rumput laut (5.396 ton; Rp22,14 miliar) dan kolam air tenang (4.813 ton). Rata-rata nilai hulu tambak Rp53.617/kg, sedangkan rata-rata nilai ekspor udang 2026 menembus Rp198.242/kg (lompatan >3,6x lipat).'
          },
          {
            topic: 'Pelagic vs Demersal Fish (Ikan Pelagis vs Ikan Demersal)',
            detail: 'Ikan pelagis (tongkol, cakalang, kembung) berenang aktif di lapisan permukaan sehingga tinggi lemak tak jenuh dan asam amino histidin (precursor histamin). Ikan demersal (kakap, kerapu, patin, bawal putih) hidup di dasar perairan dengan daging putih rendah lemak.'
          },
          {
            topic: 'Sarcoplasmic vs Myofibrillar Protein (Fraksi Protein Otot Ikan)',
            detail: 'Protein sarkoplasma (20–30%) larut dalam air/larutan garam rendah (mioglobin, enzim, albumin). Protein miofibril (65–75%; aktin dan miosin) larut dalam garam konsentrasi tinggi dan bertanggung jawab membentuk gel kenyal pada surimi/bakso.'
          }
        ],
        todos: [
          'Kunjungi Pasar Pagi / Pasar Segiri Samarinda dan TPI lokal untuk mendata harga harian, ukuran rata-rata, dan asal pasokan ikan (Sungai Mahakam vs pesisir).',
          'Susun tabel basis data 5 komoditas prioritas Kaltim (udang windu, kepiting bakau, ikan gabus, ikan patin karamba, dan rumput laut Bontang) beserta volume produksi tiap kabupaten/kota.',
          'Bandingkan struktur serat dan kadar lemak daging merah (dark muscle) vs daging putih (white muscle) pada ikan tongkol dan ikan patin.'
        ],
        output: 'Database pribadi profil kimia, volume pasokan daerah, dan harga bahan baku 10 komoditas utama Kalimantan Timur.',
        tips: 'Jangan hanya melihat daging ikannya; sentra tambak Kukar (52.277 ton) dan karamba Mahakam menghasilkan puluhan ribu ton limbah cangkang, kulit, dan tulang murah untuk diekstrak pada fase bioteknologi.',
        subBranches: [
          {
            id: 'p1-sub-mahakam',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.1',
            badgeType: 'samarinda',
            title: 'Komoditas Perairan Darat (DAS Mahakam)',
            subtitle: 'Ikan Gabus (Haruan), Patin Karamba Kukar, Baung & Jelawat',
            keywords: 'Channa striata albumin 62.24 g/kg Pangasius hypothalamus Mahakam fisheries',
            visualSteps: [
              'Ikan Gabus / Haruan (Channa striata) → Kadar albumin tinggi 62,24 g/kg (6,22%), bahan baku suplemen medis',
              'Ikan Patin Karamba (Kutai Kartanegara 72.027 ton) → Lemak perut tinggi untuk minyak Omega-9 & fillet beku',
              'Ikan Jelawat, Baung & Bawal Putih (Ekspor Kaltim 77,9 ton senilai Rp8,9 Miliar / Rp114.249/kg)'
            ],
            syllabus: [
              {
                topic: 'Channa striata Albumin Profile (Profil Albumin Ikan Gabus)',
                detail: 'Ikan gabus air tawar mengandung albumin sebesar 62,24 g/kg (6,22%) atau menyusun 55–60% total protein plasma. Protein globular ini bersifat larut air, mempertahankan tekanan onkotik darah, dan mudah terkoagulasi bila dipanaskan di atas suhu 50–60°C.'
              },
              {
                topic: 'Lipid Oxidation in Freshwater Fatty Fish (Oksidasi Lemak Ikan Patin)',
                detail: 'Ikan patin budidaya karamba memiliki kandungan lemak abdomen tinggi yang mudah teroksidasi oleh oksigen udara menjadi hidroperoksida dan aldehida penyebab ketengikan (rancidity) dan warna kekuningan (yellowing) jika tidak dikemas vakum.'
              }
            ],
            todos: [
              'Hitung rendemen bagian dapat dimakan (edible portion) serta persentase limbah kepala, tulang, dan kulit pada ikan patin dan ikan gabus segar.',
              'Petakan jalur pengepul ikan gabus dari Kota Bangun, Muara Muntai, dan Danau Semayang/Melintang menuju Samarinda.'
            ],
            output: 'Tabel rendemen daging, fraksi limbah, dan potensi turunan produk dari 4 ikan khas Sungai Mahakam.',
            tips: 'Ikan gabus adalah "emas cair" Kalimantan Timur jika diekstrak pada suhu terkontrol menjadi serbuk albumin standar farmasi.'
          },
          {
            id: 'p1-sub-pesisir',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.2',
            badgeType: 'samarinda',
            title: 'Ekosistem Delta Mahakam, Krustasea & Rumput Laut Bontang',
            subtitle: 'Mosaik mangrove–tambak 1.500 km², udang windu ekspor & 4.185 ton rumput laut Bontang',
            keywords: 'Delta Mahakam mangrove pond Penaeus monodon melanosis Eucheuma cottonii Bontang',
            visualSteps: [
              'Delta Mahakam (1.500 km²): Udang Windu (P. monodon), Udang Putih (P. merguiensis), Baramundi & Kepiting Bakau',
              'Mitigasi Ekologi Mangrove: Belajar dari model silvofishery Pegat Batumbuk Berau agar tambak bebas antibiotik',
              'Rumput Laut Bontang (4.185 ton dari 5.396 ton Kaltim; Rp4.102/kg) → Sumber Karaginan & Pangan Fungsional'
            ],
            syllabus: [
              {
                topic: 'Delta Mahakam Mangrove–Pond Mosaic (Ekosistem Tambak Delta Mahakam)',
                detail: 'Kawasan sedimentasi seluas ±1.500 km² yang bermuara ke Selat Makassar dengan vegetasi Nypa fruticans, Avicennia alba, dan Bruguiera gymnorrhiza. Tantangan utamanya adalah menjaga keberlanjutan tambak ekstensif agar bebas residu kimia dan bersertifikat ekspor.'
              },
              {
                topic: 'Melanosis / Blackspot (Noda Hitam Enzimatis Udang)',
                detail: 'Reaksi oksidasi senyawa fenol menjadi kuinon berwarna hitam pada kepala dan ruas kulit udang akibat kerja enzim polifenol oksidase (PPO) saat udang terkena oksigen dan suhu hangat di atas 4°C.'
              },
              {
                topic: 'Carrageenan Hydrocolloid (Hidrokoloid Karaginan Rumput Laut)',
                detail: 'Polisakarida sulfat yang diekstrak dari rumput laut merah (Eucheuma cottonii / Kappaphycus alvarezii) asal Bontang dan Paser yang mampu membentuk gel termoreversibel kuat untuk industri pangan dan kosmetik.'
              }
            ],
            todos: [
              'Pelajari protokol pencegahan blackspot pada udang menggunakan es curai 1:1 dan perendaman natrium metabisulfit sesuai batas residu SO2 SNI.',
              'Kaji studi kasus pengolahan rumput laut di Pulau Tihi-Tihi Bontang (seperti inovasi brownies rumput laut kukus FPIK Unmul) dan hitung potensi nilai tambahnya dari harga hulu Rp4.102/kg.'
            ],
            output: 'Ringkasan protokol penanganan pascapanen krustasea Delta Mahakam dan peta pasokan rumput laut Bontang–Paser.',
            tips: 'Udang windu organik dari tambak silvofishery Delta Mahakam merupakan komoditas penyumbang devisa terbesar Kaltim (Rp274,74 miliar pada Jan–Jul 2026) yang diburu buyer Jepang.'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p1-kimia-dasar',
        category: 'branch',
        badgeText: '🧪 LAB UNMUL & SNI',
        badgeType: 'samarinda',
        title: 'Kimia Pangan & Analisis Proksimat Standar SNI/AOAC',
        subtitle: 'Protokol resmi pengujian air, abu, protein, lemak & garam beserta tolok ukur biaya lab',
        keywords: 'SNI 2354 proximate analysis AOAC fish moisture protein lipid ash salt',
        visualSteps: [
          'Sampel Daging Ikan Dihaluskan (Homogenisasi) agar mewakili seluruh bagian tubuh',
          'Dipecah menjadi Fraksi Resmi SNI: Air (SNI 2354.2), Abu (SNI 2354.1), Protein (01-2354.4), Lemak (2354.3), Garam (01-2359)',
          'Data digunakan untuk menyusun Label Nutrition Facts, Formulasi Produk & Certificate of Analysis (CoA)'
        ],
        syllabus: [
          {
            topic: 'SNI Proximate Suite & Testing Cost Benchmarks (Standar Uji Proksimat SNI)',
            detail: 'Rangkaian uji kimia resmi BPPMHKP: Kadar Abu (SNI 2354.1:2010; tarif rujukan Rp50.000), Kadar Air (SNI 2354.2:2015; Rp30.000), Kadar Lemak (SNI 2354.3:2017; Rp75.000), Kadar Protein (SNI 01-2354.4:2006; Rp75.000), dan Kadar Garam (SNI 01-2359:1991).'
          },
          {
            topic: 'Water Activity / Aw (Aktivitas Air)',
            detail: 'Jumlah air bebas di dalam makanan yang bisa dipakai mikroba untuk tumbuh (skala 0,00–1,00). Ikan segar punya Aw ~0,99; ikan asin kering harus di bawah 0,75 agar awet tanpa kulkas.'
          }
        ],
        todos: [
          'Pahami perbedaan mendasar antara Kadar Air (Moisture Content) dan Aktivitas Air (Aw).',
          'Latih ketelitian menimbang sampel menggunakan neraca analitik 4 desimal (0,0001 g) di lab FPIK Unmul.',
          'Hitung total anggaran pengujian proksimat lengkap + kadar garam untuk 1 sampel produk baru saat menyusun RAB penelitian atau P2MW.'
        ],
        output: 'Kemampuan membaca, menghitung, dan menganggarkan hasil uji proksimat sesuai seri SNI 2354.',
        tips: 'Setiap pabrik makanan dan eksportir pasti menguji proksimat untuk menjamin mutu produknya konsisten dan memenuhi syarat label gizi BPOM.',
        subBranches: [
          {
            id: 'p1-sub-air-abu',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.3',
            badgeType: 'samarinda',
            title: '1. Kadar Air (SNI 2354.2:2015) & Kadar Abu (SNI 2354.1:2010)',
            subtitle: 'Metode Gravimetri penguapan air oven 105°C dan pembakaran mineral tanur 550°C',
            keywords: 'SNI 2354.2 moisture oven 105C SNI 2354.1 ash muffle furnace 550C',
            visualSteps: [
              'Cawan porselen dikeringkan di oven → Didinginkan di Desikator → Ditimbang kosong (W0)',
              'Sampel dimasukkan (W1) → Dipanaskan di Oven 105°C sampai berat konstan (Kadar Air - SNI 2354.2:2015)',
              'Sampel dibakar di Tanur (Muffle Furnace) suhu 550°C hingga jadi abu putih (Kadar Abu - SNI 2354.1:2010)'
            ],
            syllabus: [
              {
                topic: 'Gravimetry (Metode Gravimetri SNI 2354.1 & 2354.2)',
                detail: 'Metode analisis kimia kuantitatif berdasarkan pengukuran selisih berat sampel sebelum dan sesudah proses penguapan air pada suhu 105°C hingga bobot konstan atau pengabuan pada 550°C.'
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
            output: 'Lembar kerja perhitungan kadar air dan kadar abu bebas galat penimbangan sesuai SNI.',
            tips: 'Pada ekstraksi kitosan dan gelatin komersial, kadar abu sangat rendah (<0,1%–1,5%) menjadi indikator utama keberhasilan tahap demineralisasi HCl!'
          },
          {
            id: 'p1-sub-protein',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.4',
            badgeType: 'samarinda',
            title: '2. Uji Protein Metode Kjeldahl (SNI 01-2354.4:2006)',
            subtitle: '3 Tahap: Destruksi H2SO4, Destilasi Amonia, dan Titrasi Nitrogen',
            keywords: 'SNI 01-2354.4 Kjeldahl protein determination digestion distillation titration fish',
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
                detail: 'Rata-rata protein hewani/ikan mengandung 16% unsur Nitrogen (100 / 16 = 6,25). Jadi kadar nitrogen total dikalikan 6,25 untuk mendapatkan kadar protein kasar (untuk kolagen/gelatin murni faktor konversinya 5,55).'
              }
            ],
            todos: [
              'Pelajari fungsi tiap reagen Kjeldahl (H2SO4, katalis selenium, NaOH 40%, Asam Borat, indikator PP/MM).',
              'Kerjakan 3 latihan soal perhitungan % Protein dari volume titrasi HCl sesuai SNI 01-2354.4:2006.'
            ],
            output: 'Penguasaan penuh alur laboratorium uji protein Kjeldahl.',
            tips: 'Kjeldahl adalah metode wajib di seluruh laboratorium QC industri pangan, pakan ikan, dan ekspor.'
          },
          {
            id: 'p1-sub-lemak',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 1.5',
            badgeType: 'samarinda',
            title: '3. Uji Lemak Soxhlet (SNI 2354.3:2017) & Profil Omega-3',
            subtitle: 'Ekstraksi lemak berkelanjutan menggunakan pelarut organik non-polar',
            keywords: 'SNI 2354.3 Soxhlet fat extraction hexane fish oil EPA DHA',
            visualSteps: [
              'Sampel dibungkus kertas saring bebas lemak (Thimble) → Dimasukkan ke tabung ekstraktor Soxhlet',
              'Pelarut N-Heksana dipanaskan → Menguap ke kondensor → Menetes merendam sampel',
              'Sirkulasi berulang 6 jam → Pelarut diuapkan di oven → Lemak murni ditimbang di labu lemak'
            ],
            syllabus: [
              {
                topic: 'Solvent Extraction (Ekstraksi Pelarut Non-Polar SNI 2354.3:2017)',
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
      title: 'Keamanan Pangan, Pengujian SNI & Rantai Dingin',
      subtitle: 'Senjata utama Quality Control (QC) & QA pabrik pengolahan ekspor berstandar BPPMHKP',
      keywords: 'SNI 2346 SNI 2354.8 TVB-N seafood food safety microbiology cold chain MAP',
      visualSteps: [
        'Bahan Baku Segar → Kontrol Suhu Pusat (SNI 01-2372.1:2006) & Rantai Dingin 0°C s/d -25°C tanpa terputus',
        'Uji Sensori Skala 1–9 (SNI 2346:2015) & Konfirmasi Kimia TVB-N (SNI 2354.8:2009) + Patogen',
        'Teknologi Kemasan MAP / Pembekuan Cepat → Produk Lolos Inspeksi BPPMHKP / FDA / Uni Eropa'
      ],
      syllabus: [
        {
          topic: 'Organoleptic & TVB-N Verification (SNI 2346:2015 & SNI 2354.8:2009)',
          detail: 'Penilaian panelis terlatih (misal 30 panelis pada uji tuna) memakai skor skala angka 1–9 (sampel tuna beku pasca-pelelehan memenuhi standar dengan rata-rata nilai 8, interval 7,60–8,40). Bila skor sensori meragukan, dikonfirmasi secara objektif dengan uji TVB-N & TMA-N (SNI 2354.8:2009: ekstraksi HClO4 6%, pembasaan NaOH 20%, destilasi uap ke H3BO3 3%, titrasi HCl 0,02 N; satuan mgN%; tarif rujukan Rp60.000).'
        },
        {
          topic: 'Foodborne Pathogens (Bakteri Patogen Bawaan Pangan)',
          detail: 'Bakteri berbahaya yang tidak mengubah bau, warna, atau rasa ikan, tetapi menyebabkan keracunan fatal pada manusia (seperti Salmonella, Vibrio cholerae, Listeria monocytogenes, dan Clostridium botulinum).'
        },
        {
          topic: 'Time-Temperature Abuse (Penyalahgunaan Waktu & Suhu)',
          detail: 'Membiarkan ikan berada di zona bahaya suhu (Danger Zone: 5°C – 60°C) terlalu lama sehingga bakteri membelah diri setiap 20 menit dan memproduksi toksin tahan panas seperti histamin.'
        },
        {
          topic: 'Psychrotrophic Bacteria (Bakteri Psikrotrof)',
          detail: 'Kelompok bakteri pembusuk khas ikan laut (seperti Pseudomonas dan Shewanella) yang tetap mampu tumbuh perlahan pada suhu dingin kulkas (0°C – 5°C) dan menghasilkan senyawa basa volatil (TVB-N / TMA).'
        }
      ],
      todos: [
        'Kuasai teknik kerja aseptis di dekat api bunsen dan di dalam Laminar Air Flow (LAF).',
        'Praktikkan penilaian sensori skala 1–9 (SNI 2346:2015) dan prosedur titrasi TVB-N (SNI 2354.8:2009) menggunakan pereaksi HClO4 6%, NaOH 20%, H3BO3 3%, dan HCl 0,02 N.',
        'Pelajari dokumen syarat mutu SNI 2729:2021 (ikan segar) dan SNI 4110:2020 (ikan beku) serta kurva pertumbuhan bakteri (Lag, Log, Stasioner, Kematian).'
      ],
      output: 'Dokumen Protokol Uji Mutu SNI terstandar dan laporan simulasi Certificate of Analysis (CoA) internal.',
      tips: 'Alasan utama kontainer ekspor udang/ikan Indonesia ditolak di Amerika atau Jepang adalah kegagalan parameter objektif: ALT, Salmonella, Vibrio, histamin, residu antibiotik, atau logam berat Pb > 0,4 ppm.'
    },
    left: [
      {
        id: 'p2-mikrobiologi',
        category: 'branch',
        badgeText: '🦠 LAB MIKROBIOLOGI & KIMIA',
        badgeType: 'samarinda',
        title: 'Mikrobiologi, Residu & Keamanan Hayati Perikanan',
        subtitle: 'Protokol pengujian resmi SNI 2332, logam berat AAS, histamin & swab sanitasi 100 cm²',
        keywords: 'SNI 2332 ALT Salmonella Vibrio histamine SNI 2354.10 heavy metals Pb 0.4 ppm',
        visualSteps: [
          'Sampel ikan 25g ditimbang steril di kantong Stomacher + 225 mL Larutan pengencer (BPW)',
          'Uji Mikrobiologi SNI 2332 (ALT, E. coli APM, Salmonella per 25g, Vibrio) & Swab Permukaan per 100 cm²',
          'Uji Toksin & Kimia: Histamin (SNI 2354.10), Logam Berat AAS (Pb ≤ 0,4 ppm), dan Residu Antibiotik'
        ],
        syllabus: [
          {
            topic: 'Official SNI Microbiology Suite (Rangkaian Uji Mikrobiologi SNI 2332)',
            detail: 'Meliputi Angka Lempeng Total / ALT (SNI 2332.3:2015; tarif Rp50.000), Coliform & E. coli APM/g (SNI 2332.1:2015), Salmonella per 25g (SNI 01-2332.2:2006; Rp200.000), Vibrio cholerae & V. parahaemolyticus (SNI 2332.4–5:2006), Staphylococcus aureus (SNI 2332.9:2015; Rp200.000), serta inspeksi parasit (SNI 2332.6:2009) dan filth (SNI 2372.7:2011).'
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
        output: 'Hasil uji ALT dan identifikasi koloni bakteri pada produk perikanan segar & olahan sesuai SNI 2332.',
        tips: 'Analis mikrobiologi yang menguasai seri SNI 2332 dan perhitungan biaya uji laboratorium selalu dicari oleh pabrik cold storage dan laboratorium pengujian.',
        subBranches: [
          {
            id: 'p2-sub-tpc',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.1',
            badgeType: 'samarinda',
            title: 'Uji ALT (SNI 2332.3:2015) & E. coli APM (SNI 2332.1:2015)',
            subtitle: 'Indikator kebersihan proses produksi, air pencuci, dan sanitasi pekerja',
            keywords: 'SNI 2332.3 CFU colony forming unit E. coli APM SNI 2332.1 seafood hygiene',
            visualSteps: [
              'Media PCA (Plate Count Agar) diinkubasi 35°C selama 48 jam untuk hitung total bakteri (koloni/g)',
              'Uji Coliform & E. coli metode APM 3 seri tabung (LSTB → BGLB → EC Broth) suhu 44,5°C',
              'Konfirmasi E. coli di media EMB Agar (koloni hijau metalik khas) & uji IMViC'
            ],
            syllabus: [
              {
                topic: 'CFU / Colony Forming Unit (Unit Pembentuk Koloni - SNI 2332.3:2015)',
                detail: 'Satuan hitung mikrobiologi di mana 1 titik koloni yang tumbuh di cawan agar diasumsikan berasal dari 1 sel bakteri hidup. Cawan yang sah dihitung hanya yang berisi 30–300 koloni. Standar ekspor ikan beku umumnya maksimal 5 × 10^5 koloni/g.'
              },
              {
                topic: 'APM / Most Probable Number (Angka Paling Mungkin - SNI 2332.1:2015)',
                detail: 'Metode estimasi statistik jumlah bakteri Coliform dan E. coli berdasarkan pembentukan gas di dalam tabung kecil terbalik (tabung Durham).'
              },
              {
                topic: 'Fecal Indicator Bacteria (Bakteri Indikator Sanitasi)',
                detail: 'Keberadaan Escherichia coli menandakan produk atau air pencuci pabrik terkontaminasi kotoran akibat sanitasi toilet atau tangan pekerja yang buruk.'
              }
            ],
            todos: [
              'Hafalkan rumus perhitungan koloni/g dengan mempertimbangkan faktor pengenceran dan aturan pembulatan 2 angka signifikan.',
              'Praktikkan pewarnaan Gram (Gram positif berwarna ungu vs Gram negatif merah muda).'
            ],
            output: 'Laporan perhitungan ALT (koloni/g) dan indeks sanitasi air & es pabrik.',
            tips: 'Air dan es yang dipakai di pabrik pengolahan wajib diuji E. coli setiap bulan (syarat: < 3 APM/100 mL).'
          },
          {
            id: 'p2-sub-patogen',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.2',
            badgeType: 'global',
            title: 'Deteksi Patogen Kritis: Salmonella, Vibrio & Listeria',
            subtitle: 'Penyebab utama penolakan kontainer ekspor di FDA Amerika & Uni Eropa',
            keywords: 'SNI 01-2332.2 Salmonella SNI 2332.4 Vibrio cholerae parahaemolyticus Listeria',
            visualSteps: [
              'Pre-Enrichment (Pengayaan awal) sampel 25g agar bakteri yang stres/pingsan pulih kembali',
              'Selective Enrichment & Goresan di Media Selektif (XLD/HE untuk Salmonella; TCBS untuk Vibrio)',
              'Uji Biokimia (TSIA, LIA, Urease) atau PCR / Rapid Test Kit untuk konfirmasi spesies'
            ],
            syllabus: [
              {
                topic: 'Salmonella sp. (SNI 01-2332.2:2006)',
                detail: 'Bakteri batang Gram negatif penyebab demam tifoid dan salmonellosis yang sering mencemari udang tambak akibat kotoran burung/hewan di sekitar tambak. Pada media XLD Agar membentuk koloni merah dengan titik hitam (H2S) di tengah (wajib negatif per 25 g).'
              },
              {
                topic: 'Vibrio cholerae & Vibrio parahaemolyticus (SNI 2332.4–5:2006)',
                detail: 'Bakteri alami perairan payau dan laut yang tumbuh subur di media TCBS Agar (V. cholerae berwarna kuning karena memfermentasi sukrosa; V. parahaemolyticus berwarna hijau kebiruan).'
              },
              {
                topic: 'Listeria monocytogenes (Patogen Tahan Dingin)',
                detail: 'Bakteri berbahaya pada produk siap makan (ready-to-eat seperti ikan asap atau daging kepiting kaleng) karena tetap sanggup berkembang biak pada suhu kulkas 4°C.'
              }
            ],
            todos: [
              'Pelajari perbedaan warna koloni bakteri pada media diferensial XLD Agar, TCBS Agar, dan MSA (Staphylococcus aureus SNI 2332.9:2015).',
              'Pahami prosedur pemusnahan limbah biakan bakteri patogen menggunakan autoklaf sebelum dibuang.'
            ],
            output: 'Alur diagnostik identifikasi patogen perikanan sesuai standar SNI 2332 & ISO.',
            tips: 'Jika kamu paham cara mencegah dan menguji Salmonella & Vibrio, pabrik udang ekspor akan langsung merekrutmu sebagai staf QC.'
          },
          {
            id: 'p2-sub-histamin',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.3',
            badgeType: 'samarinda',
            title: 'Histamin (SNI 2354.10), Antibiotik & Logam Berat AAS',
            subtitle: 'Keamanan kimiawi untuk ikan Scombridae, udang tambak & ikan Sungai Mahakam',
            keywords: 'SNI 2354.10 histamine HPLC SNI 2354.5 lead 0.4 ppm SNI 7587 antibiotics',
            visualSteps: [
              'Ikan Tuna/Tongkol tidak didinginkan → Uji Histamin (SNI 2354.10:2009) via Spektrofluorometri / HPLC',
              'Udang Tambak → Uji Residu Antibiotik Chloramphenicol & Nitrofuran (AOZ, AMOZ, AHD, SEM; SNI 7587.3–5:2010)',
              'Uji Formalin/Boraks/Rhodamin-B (AOAC) & Logam Berat Pb, Cd (SNI 2354.5), Hg (SNI 2354.6) via AAS'
            ],
            syllabus: [
              {
                topic: 'Histamine Analysis (SNI 2354.10:2009)',
                detail: 'Pengujian wajib untuk ikan famili Scombridae (tuna, cakalang, tongkol) secara kuantitatif memakai spektrofluorometri atau Kromatografi Cair Kinerja Tinggi (HPLC). Racun ini tahan panas dan tidak hilang meski dimasak/dikalengkan.'
              },
              {
                topic: 'Banned Antibiotics (SNI 7587.3–5:2010)',
                detail: 'Pengujian residu antibiotik terlarang Chloramphenicol dan metabolit Nitrofuran (AOZ, AMOZ, AHD, SEM) pada udang tambak (tarif rujukan Rp300.000/parameter). Deteksi sekecil 0,1 ppb menyebabkan penolakan ekspor.'
              },
              {
                topic: 'Heavy Metals AAS (SNI 2354.5:2011 & SNI 2354.6:2016)',
                detail: 'Pengukuran logam berat Timbal (Pb), Kadmium (Cd), dan Merkuri (Hg) menggunakan Atomic Absorption Spectrophotometer (AAS; tarif rujukan Rp200.000). Batas maksimum Pb sesuai SNI 7387:2009 dan Uni Eropa untuk tuna sebesar 0,4 ppm.'
              }
            ],
            todos: [
              'Lakukan simulasi uji kualitatif formalin, boraks, dan rhodamin-B (metode AOAC) pada sampel produk pasar.',
              'Hafalkan batas maksimum Pb (0,4 ppm pada tuna SNI 7387:2009 / UE) dan histamin (maks 50 ppm FDA / 100 ppm SNI).'
            ],
            output: 'Protokol skrining bahaya kimiawi untuk penerimaan bahan baku pabrik.',
            tips: 'Di Kaltim yang banyak aktivitas tambang dan sungai, penguasaan uji logam berat AAS adalah nilai jual riset yang sangat penting.'
          },
          {
            id: 'p2-sub-sanitasi',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.4',
            badgeType: 'samarinda',
            title: 'Sanitasi Industri, Swab Test 100 cm² & Pengendalian Biofilm',
            subtitle: 'Verifikasi kebersihan meja stainless, lantai, dan pekerja sesuai standar BPPMHKP',
            keywords: 'sanitation swab test 100 cm2 biofilm chlorine ATP seafood plant',
            visualSteps: [
              'Pre-rinse (Bilas kotoran kasar) → Pembersihan dengan Deterjen Alkalis (angkat lemak/protein)',
              'Pembilasan air bersih → Disinfeksi dengan Klorin / Peracetic Acid / Alkohol 70%',
              'Verifikasi kebersihan menggunakan Metode Swab Permukaan per 100 cm² & ATP Bioluminescence'
            ],
            syllabus: [
              {
                topic: 'Surface Swabbing Protocol (Metode Swab Sanitasi per 100 cm²)',
                detail: 'Pengambilan sampel usap steril pada luas area standar 100 cm² di permukaan meja kerja, pisau, dan tangan pekerja untuk menguji cemaran ALT dan Coliform/E. coli sebelum lini produksi beroperasi.'
              },
              {
                topic: 'Biofilm & Free Chlorine Concentration (Biofilm & Kadar Klorin Bebas)',
                detail: 'Biofilm adalah lapisan lendir bakteri resisten pada permukaan baja tahan karat. Standar klorin bebas pabrik: air pencuci ikan (1–3 ppm), air celup sepatu/footbath (100–200 ppm), dan air sanitasi meja/alat (50–100 ppm).'
              }
            ],
            todos: [
              'Praktikkan teknik swabbing area 10 × 10 cm (100 cm²) menggunakan template steril di laboratorium.',
              'Hitung rumus pengenceran larutan klorin (NaOCl) untuk kebutuhan sanitasi ruang produksi.'
            ],
            output: 'Jadwal, konsentrasi larutan sanitasi, dan formulir uji swab 100 cm² standar pabrik.',
            tips: 'Disinfektan tidak akan bekerja jika meja masih berminyak—wajib dicuci deterjen dulu baru disanitasi!'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p2-coldchain',
        category: 'branch',
        badgeText: '❄️ RANTAI DINGIN & MAP',
        badgeType: 'global',
        title: 'Teknologi Rantai Dingin, Pembekuan & Kemasan MAP',
        subtitle: 'Kontrol suhu pusat SNI 01-2372.1, pembekuan cepat & perpanjangan umur simpan 9x lipat',
        keywords: 'SNI 01-2372.1 core temperature IQF ABF MAP modified atmosphere packaging',
        visualSteps: [
          'Penanganan cepat (Chilling 0°C es curai 1:1) & Ukur Suhu Pusat Ikan (SNI 01-2372.1:2006)',
          'Pembekuan cepat melewati Thermal Arrest Zone (-1°C s/d -5°C) & Cek Bobot Tuntas (SNI 2372-8:2019)',
          'Penyimpanan Cold Storage (-20°C s/d -25°C) atau Kemasan MAP (V/W 2,5:1 pada suhu mendekati 0°C)'
        ],
        syllabus: [
          {
            topic: 'Core Temperature & Drained Weight Inspection (SNI 01-2372.1 & SNI 2372-8)',
            detail: 'Pengukuran suhu pusat ikan (SNI 01-2372.1:2006) memastikan pusat termal mencapai ≤ -18°C pada produk beku (mengacu SNI 4110:2020) dan 0–4°C pada ikan segar (SNI 2729:2021), sementara uji bobot tuntas (SNI 2372-8:2019) memverifikasi berat bersih tanpa lapisan es glazing.'
          },
          {
            topic: 'Thermal Arrest Zone & Drip Loss (-1°C s/d -5°C)',
            detail: 'Rentang suhu di mana 75–80% air di dalam daging ikan berubah menjadi kristal es. Harus dilewati secepat mungkin agar kristal es berukuran mikro dan tidak merobek dinding sel daging sehingga drip loss saat pelelehan tetap rendah.'
          },
          {
            topic: 'Eutectic Point (Titik Eutektik Ikan -55°C)',
            detail: 'Suhu di mana 100% seluruh air bebas dan air terikat di dalam daging ikan membeku sempurna. Pada suhu cold storage komersial (-20°C), sekitar 90% air sudah membeku.'
          }
        ],
        todos: [
          'Bandingkan tekstur dan jumlah air keluar (drip loss) daging ikan yang dibekukan lambat di freezer rumah tangga vs pembekuan cepat.',
          'Praktikkan pengukuran suhu pusat ikan (SNI 01-2372.1:2006) menggunakan termometer tusuk terkalibrasi dan uji bobot tuntas (SNI 2372-8:2019).'
        ],
        output: 'SOP penanganan rantai dingin dari tambak/kapal hingga masuk kontainer reefer mengacu SNI 2729:2021 & SNI 4110:2020.',
        tips: 'Bisnis penyewaan Cold Storage dan pabrik es curai di sentra perikanan Kaltim adalah bisnis infrastruktur yang sangat menguntungkan.',
        subBranches: [
          {
            id: 'p2-sub-ikejime',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.5',
            badgeType: 'global',
            title: 'Teknik Ikejime & Penanganan Premium Jepang',
            subtitle: 'Menaikkan harga jual ikan segar 3x lipat untuk pasar restoran & ekspor',
            keywords: 'ikejime technique shinkei jime bleeding fish quality sashimi',
            visualSteps: [
              'Tusuk titik otak ikan (Brain Spiking) agar ikan mati instan tanpa stres',
              'Potong insang & pangkal ekor → Keluarkan seluruh darah di air es (Bleeding)',
              'Masukkan kawat baja ke saluran saraf tulang belakang (Shinkei-jime) agar rigor mortis tertunda'
            ],
            syllabus: [
              {
                topic: 'Ikejime & Shinkei-jime (Teknik Pemingsanan & Penghancuran Saraf)',
                detail: 'Metode tradisional Jepang mematikan ikan secara instan dan merusak sumsum tulang belakang agar sinyal refleks stres tidak menghabiskan cadangan ATP otot sehingga K-Value bertahan di bawah 20% lebih lama.'
              },
              {
                topic: 'Exsanguination / Bleeding (Pengeluaran Darah Sempurna)',
                detail: 'Darah ikan cepat membusuk dan berbau amis akibat oksidasi hemoglobin. Mengeluarkan seluruh darah membuat daging ikan berwarna putih bersih, tidak amis, dan tahan simpan lebih lama.'
              }
            ],
            todos: [
              'Tonton video anatomi titik otak ikan kerapu/kakap dan praktikkan teknik ikejime.',
              'Bandingkan warna daging dan pH ikan yang di-bleeding vs tidak di-bleeding.'
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
            keywords: 'Air Blast Freezer Contact Plate IQF shrimp glazing SNI 4110',
            visualSteps: [
              'Contact Plate Freezer (CPF): Pembekuan blok udang/surimi di antara pelat logam bersuhu -40°C',
              'Air Blast Freezer (ABF): Hembusan udara dingin kecepatan tinggi (-35°C s/d -40°C)',
              'IQF Tunnel: Pembekuan satuan di atas konveyor → Glazing 5–10% → Master Carton'
            ],
            syllabus: [
              {
                topic: 'IQF (Individual Quick Freezing)',
                detail: 'Teknik pembekuan cepat di mana setiap ekor udang atau potong fillet dibekukan secara terpisah menggunakan hembusan udara sangat dingin (-40°C) di atas konveyor berjalan sehingga tidak saling menempel (catatan: spesifikasi detail kecepatan udara dan suhu koil tiap pabrik diverifikasi pada katalog vendor dan SNI 4110:2020).'
              },
              {
                topic: 'Glazing & Freezer Burn (Pelapisan Es & Luka Bakar Beku)',
                detail: 'Glazing adalah lapisan es tipis pelindung di permukaan produk beku. Tanpa glazing, es di daging akan menyublim menjadi uap sehingga timbul bercak putih kering dan alot (Freezer Burn).'
              }
            ],
            todos: [
              'Pelajari cara mengukur persentase glazing (de-glazing test SNI 2372-8:2019) dan Net Weight (berat bersih tanpa es) sesuai standar ekspor.',
              'Bandingkan kapan pabrik memakai Contact Plate Freezer vs ABF vs IQF.'
            ],
            output: 'Diagram alir proses pembekuan udang HLSO / PTO standar pabrik ekspor.',
            tips: 'Semua pabrik pengolahan udang dan ikan ekspor di Surabaya, Tarakan, dan Makassar menggunakan mesin CPF, ABF, dan IQF.'
          },
          {
            id: 'p2-sub-map-coldstorage',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 2.7',
            badgeType: 'leverage',
            title: 'Modified Atmosphere Packaging (MAP) & Manajemen Gudang Beku',
            subtitle: 'Memperpanjang umur simpan fillet tuna dari 2 hari menjadi 18 hari tanpa pengawet',
            keywords: 'MAP Modified Atmosphere Packaging CO2 N2 gas flushing vacuum gas injection',
            visualSteps: [
              'Metode MAP: Gas Flushing (produksi cepat) vs Vacuum + Gas Injection (residu O2 sangat rendah & presisi)',
              'Formulasi Gas & Rasio V/W 2,5:1: Fillet Tuna (50% N2 : 50% CO2) | Otak-Otak (5% O2 : 35% CO2 : 60% N2)',
              'Syarat Mutlak FAO: Kemasan MAP wajib disimpan pada suhu mendekati 0°C sepanjang rantai distribusi'
            ],
            syllabus: [
              {
                topic: 'Modified Atmosphere Packaging / MAP (Kemasan Atmosfer Termodifikasi)',
                detail: 'Penggantian udara ambien di dalam kemasan kedap udara dengan campuran CO2, N2, dan sedikit O2 menggunakan metode gas flushing atau vacuum + gas injection. Riset menunjukkan rasio volume gas terhadap berat produk (V/W) 2,5:1 dengan komposisi 50% N2 : 50% CO2 memperpanjang umur simpan fillet tuna dari 2 hari (kontrol) menjadi 18 hari, sedangkan 5% O2 : 35% CO2 : 60% N2 optimal pada otak-otak ikan.'
              },
              {
                topic: 'Cold Storage Recrystallization & FAO Temperature Mandate',
                detail: 'FAO menegaskan seluruh manfaat MAP hilang bila suhu rantai distribusi naik; produk MAP wajib dijaga mendekati 0°C untuk mencegah pertumbuhan patogen anaerob. Pada gudang beku (-20°C), fluktuasi suhu memicu rekristalisasi es yang merusak serat daging.'
              }
            ],
            todos: [
              'Rancang percobaan pengemasan MAP dengan metode vacuum + gas injection (rasio V/W 2,5:1, komposisi 50% CO2 : 50% N2) pada suhu mendekati 0°C dan bandingkan umur simpannya terhadap kemasan konvensional.',
              'Pelajari sistem rotasi gudang FEFO (First Expired First Out) dan pencatatan suhu otomatis (Data Logger).'
            ],
            output: 'Laporan eksperimen umur simpan kemasan MAP dan checklist inspeksi harian gudang dingin.',
            tips: 'Teknologi MAP memungkinkan pengiriman fillet ikan segar berkualitas tinggi ke hotel dan restoran modern tanpa perlu dibekukan!'
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
      keywords: 'seafood value added product processing surimi canning shelf life ASLT',
      visualSteps: [
        'Bahan Baku Ikan Utuh (Margin Tipis & Cepat Busuk)',
        'Proses Pemisahan Daging (Fillet / Surimi) + Teknologi Pengawetan Termal / Non-Termal',
        'Uji Sensori (SNI 2346:2015) & Penentuan Umur Simpan (ASLT) → Produk Siap Ritel & Ekspor'
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
              'Pelajari cara mengukur kadar garam (SNI 01-2359:1991) dan aktivitas air (Aw meter) pada ikan kering.'
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
              'Rancang varian rasa modern (misal: Rumput Laut Pulau Tihi-Tihi, Pedas Daun Jeruk, Keju) dengan klaim Tinggi Protein.'
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
        keywords: 'fish canning retort sterilization F0 value liquid smoke shelf life sensory',
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
            title: 'Vacuum Packaging, Edible Coating Kitosan & Asap Cair',
            subtitle: 'Teknologi pengawetan modern untuk ritel supermarket & ekspor',
            keywords: 'chitosan edible coating 1% acetic acid liquid smoke pyrolysis vacuum pack',
            visualSteps: [
              'Vacuum Pack: Menyedot seluruh oksigen (O2) untuk mematikan bakteri aerob & cegah tengik',
              'Edible Coating Kitosan: Pelapisan larutan kitosan dalam asam asetat encer 1% (perpanjang umur simpan udang segar +2 hari)',
              'Liquid Smoke: Pirolisis tempurung kelapa/kayu ulin → Destilasi asap bebas tar karsinogenik'
            ],
            syllabus: [
              {
                topic: 'Chitosan Antimicrobial Coating (Pelapis Edibel Kitosan)',
                detail: 'Gugus amino bermuatan positif (NH3+) pada larutan kitosan dalam asam asetat 1% mampu mendepolarisasi membran sel bakteri pembusuk bermuatan negatif sehingga memperpanjang kesegaran fisik udang putih segar selama 2 hari dibanding kontrol.'
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
              'Uji efektivitas pelapisan larutan kitosan 1% dalam asam asetat pada kesegaran udang putih/windu di suhu dingin.'
            ],
            output: 'Analisis perbandingan umur simpan produk kemasan vakum & edible coating kitosan vs kontrol.',
            tips: 'Ikan asap modern kemasan vakum dan udang berlapis edible coating kitosan adalah inovasi alami yang sangat disukai pasar ekspor bebas bahan pengawet sintetis.'
          },
          {
            id: 'p3-sub-sensori-aslt',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 3.5',
            badgeType: 'global',
            title: 'Uji Sensori (SNI 2346:2015) & Penentuan Umur Simpan (ASLT)',
            subtitle: 'Membuktikan secara ilmiah produkmu enak dan tahan simpan 12 bulan untuk izin BPOM',
            keywords: 'SNI 2346 sensory evaluation hedonic test ASLT Arrhenius shelf life',
            visualSteps: [
              'Uji Score Sheet SNI 2346:2015 (Skala 1–9: Mata, Insang, Lendir, Daging, Bau, Tekstur ikan segar)',
              'Uji Hedonik (Tingkat kesukaan konsumen 30–50 panelis) & Uji Segitiga (Triangle Test)',
              'Simulasi ASLT (Accelerated Shelf-Life Testing) pada suhu ekstrem untuk hitung tanggal kadaluarsa'
            ],
            syllabus: [
              {
                topic: 'Organoleptic Score Sheet SNI 2346:2015 (Lembar Penilaian Sensori)',
                detail: 'Standar pengujian mutu ikan segar menggunakan panca indra manusia terlatih (skala 1–9). Ikan segar layak konsumsi dan ekspor wajib memiliki nilai minimal 7 (rata-rata tuna beku standar mencapai nilai 8 pada interval 7,60–8,40).'
              },
              {
                topic: 'ASLT / Accelerated Shelf-Life Testing (Uji Umur Simpan Dipercepat)',
                detail: 'Metode menyimpan produk pada 3 suhu berbeda (misal 25°C, 35°C, dan 45°C) lalu menghitung laju kerusakan menggunakan persamaan Arrhenius sehingga umur simpan 1 tahun bisa diprediksi dalam waktu 1 bulan saja!'
              }
            ],
            todos: [
              'Praktikkan penilaian Score Sheet SNI 2346:2015 pada ikan segar di laboratorium THP Unmul.',
              'Pelajari cara membuat grafik regresi linier Arrhenius di Microsoft Excel untuk menentukan tanggal Expired Date.'
            ],
            output: 'Laporan uji organoleptik SNI 2346:2015 dan perhitungan tanggal kadaluarsa (Best Before) produk.',
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
      subtitle: 'Jalur "Crazy Rich" R&D: Parameter kimia presisi untuk ekstrak farmasi & kosmetik B2B',
      keywords: 'marine biotechnology collagen chitosan extraction albumin FPH enzymatic hydrolysis',
      visualSteps: [
        'Limbah Industri Perikanan Kaltim (Cangkang Udang Windu, Kulit/Tulang Ikan, Ikan Gabus & Rucah)',
        'Ekstraksi Presisi: Basa/Asam Dingin 4°C (Kolagen), Deasetilasi NaOH 60% (Kitosan), Enzim Alkalase 55°C (FPH)',
        'Bahan Aktif B2B Terkarakterisasi (FTIR, %DD, %DH, Rendemen & Kadar Abu) → Dijual ke Pabrik Skincare & Farmasi'
      ],
      syllabus: [
        {
          topic: 'Zero-Waste Blue Economy (Ekonomi Biru Tanpa Limbah)',
          detail: 'Konsep mengolah 100% bagian tubuh ikan. Dagingnya jadi makanan (40%), sedangkan 60% sisanya (kulit, tulang, jeroan, cangkang udang Delta Mahakam) diekstrak menjadi senyawa bernilai jual puluhan kali lipat.'
        },
        {
          topic: 'Bioactive Peptides & Enzymatic Hydrolysis (Peptida Bioaktif 2–20 Asam Amino)',
          detail: 'Rantai pendek asam amino (2–20 residu) hasil pemotongan protein ikan menggunakan enzim protease (Alkalase B. licheniformis atau Papain) yang memiliki fungsi antioksidan, antihipertensi, dan kelarutan air 99,94–99,99%.'
        },
        {
          topic: 'Nutraceuticals & Cosmeceuticals (Nutrasetika & Kosmesetika)',
          detail: 'Produk pangan atau ekstrak bahan alam yang memiliki manfaat medis klinis (suplemen albumin serum dewasa 3,5–5,5 g/dL) maupun efek aktif perawatan kulit tingkat medis.'
        }
      ],
      todos: [
        'Dekati dosen di FPIK Unmul yang memiliki riset/paten terkait ekstraksi albumin, kolagen, karaginan, atau kitosan.',
        'Jadikan topik ekstraksi bioteknologi dengan parameter kimia terukur ini sebagai judul Skripsi agar fasilitas & bahan lab ditanggung proyek penelitian.',
        'Pelajari metode karakterisasi bahan aktif modern: FTIR (bilangan gelombang amida 1655 cm⁻¹ & hidroksil 3450 cm⁻¹ untuk %DD), SDS-PAGE, dan uji viskositas.'
      ],
      output: 'Tiga prototipe bahan aktif B2B skala lab (kitosan udang windu abu <0,1%, ekstrak albumin ikan gabus, dan serbuk FPH kelarutan >99%) beserta Technical Data Sheet.',
      tips: 'Pembeli industri kosmetik dan farmasi tidak membeli klaim umum; mereka membeli konsistensi spesifikasi—seperti %DD kitosan ≥70% dengan kadar abu mendekati nol, kekuatan gel gelatin, atau kelarutan FPH >99%.'
    },
    left: [
      {
        id: 'p4-albumin',
        category: 'branch',
        badgeText: '💊 FARMASI & NUTRASETIKA',
        badgeType: 'leverage',
        title: 'Ekstraksi Albumin Ikan Gabus & Pemurnian Minyak Ikan',
        subtitle: 'Protokol suhu terkontrol waterbath 40°C (rendemen 18,55%) vs perebusan singkat 10 menit',
        keywords: 'Channa striata albumin extraction waterbath 40C Lowry BCG fish oil refining',
        visualSteps: [
          'Fillet daging ikan gabus tanpa kulit dihaluskan + akuades rasio 1:1',
          'Ekstraksi Termal Terkontrol: Waterbath 40°C (30–45 mnt) atau Perebusan 10 mnt → Penyaringan',
          'Pengeringan Vakum / Spray Drying → Uji Kadar Albumin (Lowry / BCG) → Kapsul & Minuman Kesehatan'
        ],
        syllabus: [
          {
            topic: 'Controlled Thermal Extraction of Snakehead Albumin (Ekstraksi Albumin Channa striata)',
            detail: 'Ekstraksi waterbath suhu 40°C selama 30–45 menit menghasilkan rendemen 18,55%, kadar albumin 9,76%, dan kadar protein 10,39%. Pada studi metode pemanasan rasio 1:1, perebusan singkat 10 menit mencatat kadar albumin ekstrak tertinggi 47,01 ± 1,05 %b/b (uji Lowry) dibanding dua metode pembanding lain.'
          },
          {
            topic: 'Clinical Target & Sensory Formulation (Target Klinis & Formulasi Minuman)',
            detail: 'Albumin terkoagulasi pada suhu tinggi sehingga pengeringan memakai vacuum/spray drying. Suplementasi ditujukan memenuhi albumin serum dewasa normal 3,5–5,5 g/dL (batas pencegahan hipoalbuminemia 4 g/dL), sedangkan formulasi minuman kesehatan diuji hingga 80°C dengan skor hedonik 5.'
          },
          {
            topic: 'Bromocresol Green / BCG & Lowry Assay (Uji Kuantitatif Albumin)',
            detail: 'Metode spektrofotometri standar untuk mengukur konsentrasi albumin murni secara akurat pada panjang gelombang 628 nm (BCG) atau reagen Folin-Ciocalteu (Lowry).'
          }
        ],
        todos: [
          'Lakukan ekstraksi albumin ikan gabus (Channa striata) pada suhu terkontrol waterbath 40°C (30–45 menit) serta bandingkan kadar protein dan rendemennya terhadap metode perebusan singkat 10 menit.',
          'Hitung rendemen serbuk albumin kering dari 10 kg ikan gabus segar DAS Mahakam dan kalkulasi biaya produksinya.'
        ],
        output: 'Prototipe serbuk / kapsul ekstrak albumin ikan gabus Mahakam terkarakterisasi.',
        tips: 'Suplemen kapsul albumin ikan gabus sudah diresepkan luas oleh dokter bedah di rumah sakit seluruh Indonesia.',
        subBranches: [
          {
            id: 'p4-sub-fishoil',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 4.1',
            badgeType: 'leverage',
            title: 'Pemurnian Minyak Ikan (Refining) & Konsentrat Omega-3',
            subtitle: 'Tahapan degumming, refining & bleaching karbon aktif (perlu validasi parameter lab)',
            keywords: 'fish oil refining degumming neutralization bleaching activated carbon Omega-3',
            visualSteps: [
              'Wet Rendering (Ekstraksi minyak kasar dari lemak perut patin/limbah kepala ikan)',
              'Pemurnian 3 Tahap Utama: Degumming (buang getah fosfolipid) → Refining/Netralisasi (buang FFA)',
              'Bleaching dengan Karbon Aktif (pemucatan & penghilangan bau amis) → Uji PV, FFA & Profil EPA/DHA'
            ],
            syllabus: [
              {
                topic: 'Fish Oil Refining Stages (Tahapan Pemurnian Minyak Ikan)',
                detail: 'Meliputi degumming, refining (netralisasi asam lemak bebas), dan bleaching menggunakan adsorben karbon aktif untuk menjernihkan warna serta mengurangi bau amis minyak ikan kasar dari limbah pengolahan.'
              },
              {
                topic: 'Lab Validation Note & TOTOX Benchmark (Catatan Validasi Lab & Standar TOTOX)',
                detail: 'Catatan teknis: karena variasi asam lemak tiap spesies ikan berbeda, parameter suhu reaksi, dosis asam/basa, serta persentase EPA/DHA spesifik wajib divalidasi langsung di laboratorium dan dibandingkan terhadap standar TOTOX < 26.'
              }
            ],
            todos: [
              'Susun rancangan uji pemurnian minyak ikan hasil samping melalui proses degumming, refining, dan bleaching karbon aktif.',
              'Lakukan penelusuran literatur lanjutan untuk mengunci parameter suhu, dosis adsorben, dan profil EPA/DHA pada minyak ikan patin Kaltim.'
            ],
            output: 'Sampel minyak ikan jernih hasil bleaching karbon aktif dan matriks parameter uji mutu minyak.',
            tips: 'Pabrik fillet ikan patin membuang berton-ton lemak perut setiap minggu—kamu bisa membelinya super murah dan memurnikannya menjadi minyak Omega-3/Omega-9!'
          },
          {
            id: 'p4-sub-fph',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 4.2',
            badgeType: 'leverage',
            title: 'Hidrolisat Protein Ikan (FPH) Enzimatis (Kelarutan 99,99%)',
            subtitle: 'Parameter presisi enzim Alkalase (20.000 U/kg) & Papain 5% vs risiko hidrolisis asam',
            keywords: 'fish protein hydrolysate FPH Alcalase 20000 U/kg Papain 5% degree of hydrolysis',
            visualSteps: [
              'Substrat Ikan/Sampingan Fillet + Air (1:1 b/v) + Enzim Alkalase (20.000 U/kg) atau Papain 5% (b/v)',
              'Inkubasi Terkontrol: Suhu 55–60°C, pH 7–8, waktu 6–7 jam (hindari suhu tinggi tak terkendali / Maillard)',
              'Inaktivasi Enzim 90°C → Sentrifugasi → Bubuk FPH (Kelarutan 99,94–99,99%, Kecerahan L* 94,80)'
            ],
            syllabus: [
              {
                topic: 'Enzymatic Hydrolysis Parameters (Parameter Hidrolisis Enzimatis Presisi)',
                detail: 'Menggunakan rasio daging:air 1:1 (b/v) dengan enzim Alkalase (Bacillus licheniformis) dosis 20.000 U/kg substrat pada suhu 55–60°C (optimal 55–65°C), pH 7–8 selama 6–7 jam dan inaktivasi 90°C (menghasilkan kelarutan 99,94–99,99%, kecerahan L* 94,80, peptida 2–20 asam amino), atau enzim Papain 5% (b/v) selama 6 jam pada lele dumbo (%DH 35,37%, kadar protein serbuk 53,29%).'
              },
              {
                topic: 'Enzymatic vs Acid Hydrolysis & Maillard Control',
                detail: 'Hidrolisis enzimatik jauh lebih unggul daripada hidrolisis kimia asam suhu ekstrem (121–138°C selama 2–8 jam) yang mengoksidasi sistein dan metionin serta merusak serin dan treonin. Kontrol suhu dan waktu juga mencegah pencoklatan non-enzimatis Maillard.'
              }
            ],
            todos: [
              'Produksi sampel FPH berbahan ikan air tawar atau hasil samping fillet menggunakan enzim Alkalase (20.000 U/kg substrat, pH 7–8, 55–60°C, 6–7 jam, inaktivasi 90°C) atau Papain 5% selama 6 jam.',
              'Catat tingkat kelarutan air, derajat hidrolisis (%DH), kecerahan warna, dan kadar protein serbuknya.'
            ],
            output: 'Formulasi bubuk Hidrolisat Protein Ikan (FPH) kelarutan >99% untuk suplemen atau penyedap alami.',
            tips: 'Tren makanan sehat global sedang meninggalkan MSG sintetis dan beralih ke ekstrak kaldu ikan alami (Natural Seafood Extract) dengan kelarutan air tinggi.'
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
        title: 'Kolagen Kulit Ikan (4°C), Gelatin & Kitosan Udang Windu',
        subtitle: 'Resep kimiawi teruji dari cangkang udang Delta Mahakam & kulit ikan air tawar',
        keywords: 'fish skin collagen NaOH 0.05M acetic acid 4C chitosan NaOH 60% microwave DD 85%',
        visualSteps: [
          'Kolagen Kulit Ikan: Pre-treatment NaOH 0,05 M → Ekstraksi Asam Asetat 0,25–0,75 M (1:10 b/v) suhu 4°C (16–72 jam)',
          'Kitosan Cangkang Udang Windu: Deproteinasi NaOH → Demineralisasi HCl → Deasetilasi NaOH 60% (40–50°C, 4 jam)',
          'Karakterisasi Mutu: Uji FTIR (%DD hingga 85,32%), Kadar Abu (0,04%), Viskositas (3,53 cP) & Kekuatan Gel'
        ],
        syllabus: [
          {
            topic: 'Acid-Soluble Collagen Extraction at 4°C (Ekstraksi Kolagen Kulit Ikan)',
            detail: 'Kulit ikan patin direndam basa lemah NaOH 0,05 M hingga pH netral lalu diekstrak dengan asam asetat (CH3COOH) 0,25–0,75 M rasio 1:10 (b/v) selama 16–72 jam pada suhu dingin ~4°C agar tidak terdegradasi menjadi gelatin. Kulit nila hitam (asam asetat 0,75 M, 16 jam) menghasilkan rendemen 5,96% dengan suhu denaturasi 35,75°C (kulit kakap mencapai 8,1% bk).'
          },
          {
            topic: 'Shrimp Shell Chitosan Synthesis & FTIR %DD (Sintesis Kitosan & Derajat Deasetilasi)',
            detail: 'Tahapan: (1) Deproteinasi NaOH 3,5% atau 1 M (80–90°C, 1 jam atau 40–50°C, 4 jam); (2) Demineralisasi HCl 1–1,5 M atau 2 M (melarutkan CaCO3); (3) Deasetilasi NaOH 60% rasio 1:20 (b/v), 40–50°C, 4 jam, 50 rpm. Pada udang windu menghasilkan rendemen 78,03%, air 4%, abu 0,04%, viskositas 3,53 cP, dan adsorpsi logam Cu 100 ppm sebesar 90,37%.'
          },
          {
            topic: 'Microwave-Assisted Deacetylation (Deasetilasi Gelombang Mikro Cepat)',
            detail: 'Metode gelombang mikro mempercepat pemutusan gugus asetil (-NHCOCH3) menjadi gugus amino bebas (-NH2): NaOH 50% (60°C, 3 menit) menghasilkan DD 69,80% dan NaOH 70% (70°C, 15 menit) mencapai DD 85,32% berdasarkan pembacaan puncak FTIR 1655 cm⁻¹ dan 3450 cm⁻¹.'
          }
        ],
        todos: [
          'Lakukan ekstraksi kitin dan kitosan skala lab dari limbah cangkang udang windu (P. monodon) Delta Mahakam menggunakan NaOH 60% (40–50°C, 4 jam), lalu ukur rendemen, air, abu, dan viskositas.',
          'Bandingkan efisiensi energi deasetilasi konvensional vs microwave (NaOH 50%, 60°C, 3 menit) dan kirim sampel untuk pembacaan derajat deasetilasi FTIR.'
        ],
        output: 'Sampel kitosan udang windu (abu 0,04%) dan kolagen kulit ikan lengkap dengan data uji FTIR & kelarutan.',
        tips: 'Kitosan dengan kadar abu 0,04% dan DD >85% bernilai berkali-kali lipat dibanding kitosan pertanian biasa karena memenuhi spesifikasi kosmetik dan pengolahan limbah logam berat (adsorpsi Cu 90,37%)!'
      },
      {
        id: 'p4-sub-gelatin-kolagen',
        category: 'branch',
        badgeText: 'SUB-CABANG 4.3',
        badgeType: 'leverage',
        title: 'Gelatin Halal Tulang (HCl 3%) & Kulit Ikan (55°C, 4 Jam)',
        subtitle: 'Parameter demineralisasi tulang & ekstraksi termal kulit untuk kapsul dan pangan',
        keywords: 'fish gelatin HCl 3% demineralization 55C 4 hours gel strength 13.5 N viscosity 7.66 cP',
        visualSteps: [
          'Tulang Ikan: Demineralisasi dengan HCl 3% → Ekstraksi Termal → Rendemen 7,92% (Air 1,75%, Abu 1,51%)',
          'Kulit Ikan (misal Ikan Anggoli): Perlakuan Asam/Basa → Ekstraksi Suhu 55°C selama 4 Jam',
          'Karakterisasi Mutu: Rendemen 14,36%, Kekuatan Gel 13,5 N, Viskositas 7,66 cP, Titik Gel 11°C, Titik Leleh 25,6°C'
        ],
        syllabus: [
          {
            topic: 'Bone Demineralization & Skin Thermal Extraction (Demineralisasi Tulang & Ekstraksi Kulit)',
            detail: 'Demineralisasi tulang ikan memakai HCl 3% menghasilkan gelatin dengan rendemen 7,92%, kadar air 1,75%, dan kadar abu 1,51%. Ekstraksi kulit ikan pada suhu 55°C selama 4 jam menghasilkan rendemen 14,36%, kekuatan gel 13,5 N, viskositas 7,66 cP, titik gel 11°C, titik leleh 25,6°C, dan pH 6,83.'
          },
          {
            topic: 'Low Molecular Weight Collagen Peptide (< 3000 Dalton)',
            detail: 'Gelatin/kolagen ikan yang dihidrolisis enzimatis lebih lanjut menjadi ukuran molekul < 3 kDa sehingga larut jernih di air dingin dan langsung diserap usus untuk minuman kecantikan halal.'
          }
        ],
        todos: [
          'Praktikkan ekstraksi gelatin tulang ikan (demineralisasi HCl 3%) vs kulit ikan (55°C, 4 jam) di laboratorium THP Unmul.',
          'Ukur kekuatan gel, viskositas (cP), titik gel, dan titik leleh gelatin ikan air tawar Kaltim.'
        ],
        output: 'Protokol ekstraksi gelatin halal dari limbah kulit/tulang ikan Kaltim beserta data reologinya.',
        tips: 'Pasar minuman kolagen dan cangkang kapsul halal di Indonesia tumbuh miliaran dolar—hampir semua bahannya masih impor!'
      },
      {
        id: 'p4-sub-rumputlaut',
        category: 'branch',
        badgeText: 'SUB-CABANG 4.4',
        badgeType: 'samarinda',
        title: 'Hilirisasi Rumput Laut Bontang (4.185 Ton) & Karaginan SRC',
        subtitle: 'Mengubah bahan baku Rp4.102/kg menjadi tepung Semi-Refined Carrageenan (SRC) & pangan fungsional',
        keywords: 'carrageenan extraction KOH Kappaphycus alvarezii Bontang 4185 ton SRC',
        visualSteps: [
          'Pasokan Hulu Bontang (4.185 ton) & Paser (Rp4.102/kg) → Pencucian bersih dari garam & pasir',
          'Pemasakan dalam larutan Alkali (KOH 6–8%) pada suhu 80°C selama 2 jam untuk modifikasi kappa-karaginan',
          'Pencucian netral → Pemotongan → Pengeringan & Penepungan (Tepung SRC) / Pangan Fungsional'
        ],
        syllabus: [
          {
            topic: 'Alkali Treatment / KOH Modification (Modifikasi Alkali Kalium Hidroksida)',
            detail: 'Proses pemasakan rumput laut merah (Eucheuma cottonii) dengan KOH yang mengubah struktur molekul prekursor menjadi kappa-karaginan murni sehingga kekuatan gelnya meningkat tajam.'
          },
          {
            topic: 'SRC vs RC (Semi-Refined vs Refined Carrageenan)',
            detail: 'SRC adalah tepung karaginan yang masih mengandung selulosa dinding sel (dipakai industri sosis/bakso/pakan hewan), sedangkan RC adalah ekstrak murni yang diendapkan dengan alkohol/KCl (dipakai industri farmasi & es krim).'
          }
        ],
        todos: [
          'Praktikkan ekstraksi karaginan di lab THP Unmul dan ukur kekuatan gel serta viskositasnya.',
          'Pelajari rantai pasok rumput laut di Kota Bontang (4.185 ton), Kabupaten Paser, dan Berau.'
        ],
        output: 'Sampel tepung Semi-Refined Carrageenan (SRC) standar industri pangan.',
        tips: 'Harga bahan baku rumput laut kering di Kaltim hanya sekitar Rp4.102/kg—mengolahnya menjadi tepung SRC atau pangan fungsional melipatgandakan nilainya secara drastis!'
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
      title: 'Sertifikasi Mutu OSS-SIAPMUTU, HACCP & PKL Industri',
      subtitle: 'Menguasai sistem terpadu Barantin–BPPMHKP & mencuri sistem kerja pabrik ekspor besar',
      keywords: 'SKP PMMT HACCP SPDI SMKHP SIAPMUTU Barantin BPPMHKP Balikpapan',
      visualSteps: [
        'Integrasi Sistem Nasional: OSS (SKP, PMMT/HACCP, SPDI) + Aplikasi SIAPMUTU & Sistem Terpadu Barantin–BPPMHKP',
        'Koordinasi Teknis Regional: Balai PPMHKP / KIPM Balikpapan (Jl. Kolonel Syarifudin Yoes No. 10)',
        'Wajib PKL / Magang di Pabrik Seafood Ekspor Besar (Surabaya / Sidoarjo / Bitung / Makassar / Tarakan)'
      ],
      syllabus: [
        {
          topic: 'Integrated KKP–Barantin Export Quality System (Sistem Mutu Terpadu KKP–Barantin)',
          detail: 'KKP melalui BPPMHKP mengintegrasikan layanan sertifikasi penerapan mutu melalui sistem OSS dan aplikasi SIAPMUTU (Kep Ka BPPMHKP No. 44 Tahun 2024). Sejak Juli 2026 diperkuat penyatuan sistem Barantin–BPPMHKP untuk memangkas proses dua langkah menjadi satu alur layanan ekspor guna memperkuat jaminan kesehatan ikan dan traceability.'
        },
        {
          topic: 'PMMT / HACCP Certification Requirements (Syarat Sertifikat PMMT/HACCP di OSS)',
          detail: 'Diterbitkan Kepala BPPMHKP melalui OSS dengan 5 syarat wajib: (1) Perizinan Berusaha Subsektor Pengolahan/Pemasaran Ikan; (2) NIB; (3) Manual HACCP yang telah divalidasi; (4) Laporan hasil pembinaan; dan (5) Hasil audit internal, diikuti inspeksi lapangan oleh tim UPT BPPMHKP.'
        },
        {
          topic: '7 Principles of HACCP & CCP (7 Prinsip Utama HACCP)',
          detail: '(1) Analisis bahaya, (2) Penentuan CCP, (3) Penetapan batas kritis, (4) Sistem pemantauan CCP, (5) Tindakan koreksi, (6) Prosedur verifikasi/audit, (7) Dokumentasi & pencatatan.'
        }
      ],
      todos: [
        'Ikuti pelatihan sertifikasi HACCP dan SPI yang diadakan KKP / LSP / kampus sebelum lulus.',
        'Kirim proposal PKL sejak semester 5 ke pabrik pengolahan udang/ikan ekspor skala besar di Jawa Timur, Sulawesi, atau Tarakan.',
        'Hubungi Balai PPMHKP / KIPM Balikpapan untuk memetakan jadwal pembinaan teknis dan syarat inspeksi lapangan SKP/HACCP.'
      ],
      output: 'Sertifikat kompetensi HACCP + Berkas kesiapan pra-inspeksi (NIB, Manual GMP/SSOP, Manual HACCP Tervalidasi, Laporan Audit Internal).',
      tips: 'Jangan PKL di tempat yang santai di Samarinda jika ingin level-up cepat. Lihat langsung mesin pabrik miliaran rupiah di Jawa/Sulawesi atau bermitra dengan UPI ber-SKP di Balikpapan.'
    },
    left: [
      {
        id: 'p5-gmp-haccp',
        category: 'branch',
        badgeText: '📋 REGULASI & LEGALITAS KKP',
        badgeType: 'samarinda',
        title: 'Penyusunan Dokumen SKP, SPDI, HACCP & SMKHP',
        subtitle: 'Alur lengkap perizinan OSS, aplikasi SIAPMUTU, dan layanan Balai PPMHKP Balikpapan',
        keywords: 'SKP GMP SSOP SPDI SMKHP SIAPMUTU Balai PPMHKP Balikpapan',
        visualSteps: [
          'Langkah 1 (OSS): Daftarkan NIB & Perizinan Subsektor Pengolahan/Pemasaran Ikan + SKP (GMP & SSOP)',
          'Langkah 2 (OSS): Sertifikat PMMT/HACCP (5 dokumen wajib) & SPDI (Sertifikat Penerapan Distribusi Ikan)',
          'Langkah 3 (SIAPMUTU): Ajukan SMKHP via Balai PPMHKP Balikpapan (0542-7581248) dengan Packing List & Hasil Lab'
        ],
        syllabus: [
          {
            topic: 'SKP & SPDI via OSS (Sertifikat Kelayakan Pengolahan & Distribusi Ikan)',
            detail: 'SKP memastikan penerapan GMP dan SSOP (kelayakan bangunan, peralatan, sanitasi fasilitas, higiene pekerja) melalui audit tim KKP. SPDI menjamin kepatuhan rantai dingin selama pengangkutan dan distribusi dengan syarat surat keterangan mengikuti bimbingan teknis cara distribusi ikan yang baik.'
          },
          {
            topic: 'SMKHP via SIAPMUTU & Balai PPMHKP Balikpapan',
            detail: 'Sertifikat Mutu dan Keamanan Hasil Perikanan (Kep Ka BPPMHKP No. 44/2024) diajukan melalui SIAPMUTU dengan melampirkan packing list, pemenuhan SKP/PMMT-HACCP, hasil uji lab terakreditasi, dan nomor registrasi negara mitra. Dilayani di Kaltim oleh Balai PPMHKP Balikpapan (Jl. Kolonel Syarifudin Yoes RT 094 No. 10, Balikpapan 76115).'
          },
          {
            topic: '8 Keys of SSOP & Traceability (8 Kunci Sanitasi & Ketertelusuran)',
            detail: '(1) Keamanan air & es, (2) Kebersihan permukaan kontak produk, (3) Pencegahan kontaminasi silang, (4) Fasilitas cuci tangan & toilet, (5) Perlindungan dari bahan kimia, (6) Pelabelan bahan beracun, (7) Kesehatan karyawan, (8) Pengendalian hama, ditambah kode lot/batch hingga tambak asal.'
          }
        ],
        todos: [
          'Mendaftarkan NIB dan Perizinan Berusaha Subsektor Pengolahan/Pemasaran Ikan pada sistem OSS serta menyusun SOP sanitasi (SSOP) dan GMP.',
          'Menyusun draf Manual HACCP tervalidasi dan formulir audit internal untuk produk Udang Beku IQF atau Fillet Ikan.',
          'Mengikuti bimbingan teknis cara distribusi ikan yang baik sebagai syarat pengajuan SPDI di OSS.'
        ],
        output: 'Berkas kesiapan pra-inspeksi berisi NIB, Draf Manual GMP/SSOP, Draf Manual HACCP Tervalidasi, dan Laporan Audit Internal awal.',
        tips: 'Mahasiswa rintisan tidak harus membangun gedung pabrik senilai miliaran rupiah di awal untuk memperoleh SKP/HACCP; manfaatkan skema kerja sama produksi dengan UPI mitra di Balikpapan atau Samarinda yang sudah memiliki SKP dan registrasi ekspor aktif.',
        subBranches: [
          {
            id: 'p5-sub-bpom-halal',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 5.1',
            badgeType: 'samarinda',
            title: 'Kepatuhan BPOM, Halal & Registrasi Negara Mitra (FDA/EU/GACC)',
            subtitle: 'Daftar periksa wajib untuk ritel nutraseutikal dalam negeri & syarat registrasi ekspor',
            keywords: 'BPOM MD Halal FDA FSMA EU Approval Number GACC traceability',
            visualSteps: [
              'Pasar Domestik (Nutraseutikal/Albumin/Frozen Food): Wajib Izin Edar BPOM MD, Audit CPPOB & Sertifikat Halal',
              'Pasar Ekspor (FDA FSMA AS, EU Approval Number, GACC Tiongkok): Wajib Nomor Registrasi Negara Mitra di SMKHP',
              'Konsultasi Verifikasi: Hubungi Pejabat Mutu Balai PPMHKP Balikpapan (bkipmbpp@gmail.com) sebelum pengajuan'
            ],
            syllabus: [
              {
                topic: 'Partner Country Registration Numbers (Nomor Registrasi Negara Mitra)',
                detail: 'Standar pelayanan BPPMHKP mewajibkan pencantuman nomor registrasi unit pengolahan ke negara mitra apabila dipersyaratkan negara tujuan (seperti FDA FSMA untuk AS, EU Approval Number untuk Uni Eropa dengan batas Pb tuna ≤ 0,4 ppm, dan GACC untuk Tiongkok).'
              },
              {
                topic: 'Verification Note for External Schemes (Catatan Verifikasi Regulasi Eksternal)',
                detail: 'Karena prosedur teknis pendaftaran BPOM MD, Halal BPJPH, FDA FSMA, EU Approval Number, dan GACC memiliki portal serta syarat audit masing-masing, mahasiswa perlu menyusun daftar periksa dan berkonsultasi langsung dengan pejabat mutu Balai PPMHKP Balikpapan sebelum mengajukan registrasi.'
              }
            ],
            todos: [
              'Identifikasi celah persyaratan regulasi spesifik tujuan pasar (izin edar BPOM dan Halal untuk produk ritel albumin/pangan dalam negeri, serta nomor registrasi negara mitra FDA/EU/GACC bagi ekspor langsung).',
              'Buat rancangan label kemasan pangan lengkap dengan Informasi Nilai Gizi (Nutrition Facts) dan kode lot ketertelusuran.'
            ],
            output: 'Daftar periksa nomor registrasi negara tujuan dan kelengkapan dokumen izin edar domestik.',
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
        keywords: 'seafood export company Surabaya Sidoarjo Banyuwangi Makassar Bitung Tarakan',
        visualSteps: [
          'Klaster Jawa Timur (Surabaya, Sidoarjo, Pasuruan, Banyuwangi): Pusat pabrik udang & tuna terbesar',
          'Klaster Sulawesi (Makassar, Bitung, Kendari): Pusat ekspor ikan pelagis, gurita & rajungan',
          'Klaster Kaltara/Kaltim (Tarakan & Balikpapan): Pabrik cold storage ekspor udang windu & kepiting'
        ],
        syllabus: [
          {
            topic: 'Export Processing Plant Standards (Standar Pabrik Pengolahan Ekspor)',
            detail: 'Operasional pabrik skala ekspor memadukan SKP Grade A, sertifikat PMMT/HACCP dari BPPMHKP, serta nomor registrasi negara tujuan (GACC/EU/FDA) dengan kapasitas produksi puluhan ton per hari.'
          },
          {
            topic: 'Supply Chain Gap Opportunity (Celah Pasokan Bahan Baku Kalimantan)',
            detail: 'Banyak pabrik ekspor di Jawa Timur kekurangan bahan baku udang windu dan ikan demersal dari Kalimantan—memahami sistem kerja mereka saat PKL membuka peluang kemitraan pasokan setelah lulus.'
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
              'Catat spesifikasi material dinding, lantai, dan pencahayaan ruang produksi sesuai standar SKP.'
            ],
            output: 'Gambar teknis tata letak pabrik pengolahan perikanan standar ekspor.',
            tips: 'Jika suatu hari kamu membangun pabrik sendiri di Samarinda atau Balikpapan, desain layout yang benar sejak awal akan menghemat biaya renovasi ratusan juta rupiah.'
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // FASE 6: KARIER AKSELERASI & EKONOMI UNIT EKSPOR (TAHUN 1-2)
  // ==========================================================================
  {
    id: 'phase-6',
    spine: {
      id: 'p6-spine',
      category: 'spine',
      badgeText: 'FASE 6 • LULUS & TAHUN 1–2',
      badgeType: 'global',
      title: 'Karier Akselerasi, Pendanaan & Unit Economics Ekspor',
      subtitle: 'Memanfaatkan P2MW/Kedaireka, neraca massa rendemen & lompatan nilai ekspor Kaltim',
      keywords: 'P2MW Kemdiktisaintek Kedaireka unit economics mass balance seafood export Kaltim',
      visualSteps: [
        'Akselerasi Kampus & Lulusan: Pendanaan P2MW (3–5 mahasiswa) / Kedaireka Delta Mahakam atau MT/QA Industri',
        'Kalkulasi Unit Economics: Neraca Massa (Mass Balance), Rendemen Lab & Lompatan Harga Hulu vs Ekspor',
        'Validasi Pasar B2B & Ekspor: Kirim Sample Kit + CoA SNI & Petakan Logistik Reefer / Dokumen Ekspor'
      ],
      syllabus: [
        {
          topic: 'Competitive University Funding: P2MW & Kedaireka (Pendanaan Wirausaha & Hilirisasi)',
          detail: 'Program Pembinaan Mahasiswa Wirausaha (P2MW) Kemdiktisaintek memberi bantuan dana pengembangan usaha dan pendampingan bagi kelompok 3–5 mahasiswa dengan usaha berjalan (maksimal 2 kali keikutsertaan pada tahun berbeda). Di FPIK Unmul juga terdapat rekam jejak kolaborasi Sekolah Lapang Kedaireka untuk komoditas ekspor pesisir Delta Mahakam.'
        },
        {
          topic: 'Kaltim Upstream vs Export Value Leap (Lompatan Nilai Hulu ke Ekspor Kaltim)',
          detail: 'Perbandingan data BPS 2022 vs realisasi ekspor 2026: Rumput laut hulu Rp4.102/kg, ikan karamba Rp36.266/kg, dan tambak sederhana Rp53.617/kg; sedangkan ekspor ikan segar/hidup 2026 mencapai Rp79.796/kg (2,2x karamba), bawal putih segar Rp114.249/kg, rata-rata ekspor perikanan Rp182.250/kg, dan ekspor udang menembus Rp198.242/kg (3,7x tambak hulu).'
        },
        {
          topic: 'Mass Balance & Yield Management (Neraca Massa & Manajemen Rendemen)',
          detail: 'Perhitungan presisi kebutuhan bahan kimia, enzim, dan energi per kilogram output berdasarkan rendemen laboratorium aktual (misal 78,03% pada kitosan udang windu atau 18,55% pada ekstrak albumin waterbath 40°C) untuk menetapkan harga jual B2B.'
        }
      ],
      todos: [
        'Bentuk tim 3–5 mahasiswa lintas keahlian (THP FPIK dan manajemen bisnis) untuk menyusun proposal pendanaan P2MW Kemdiktisaintek atau bergabung dalam riset terapan/Kedaireka.',
        'Susun spreadsheet neraca massa (mass balance) dan biaya bahan kimia berdasarkan data rendemen lab nyata.',
        'Buat profil LinkedIn profesional yang menonjolkan keahlian THP, sertifikasi HACCP, dan prototipe riset hilirisasi.'
      ],
      output: 'Proposal P2MW atau hibah hilirisasi siap ajukan dan model keuangan unit economics berbasis rendemen lab aktual.',
      tips: 'Gunakan fasilitas pendanaan P2MW/Kedaireka saat kuliah atau gaji 1–2 tahun pertama di perusahaan multinasional untuk membangun modal kerja dan kredibilitas teknis tanpa berutang besar.'
    },
    left: [
      {
        id: 'p6-karir-korporasi',
        category: 'branch',
        badgeText: '🏢 KARIER & KEWIRAUSAHAAN',
        badgeType: 'global',
        title: 'Jalur Korporasi (MT/QA/R&D) & Neraca Massa Pabrik',
        subtitle: 'Membangun fondasi finansial, jaringan eksekutif & ketajaman hitung-hitungan rendemen',
        keywords: 'management trainee FMCG quality assurance R&D mass balance COGS BEP',
        visualSteps: [
          'Incar program Management Trainee (MT) di Indofood, Charoen Pokphand, Japfa, Mayora, atau Eksportir Seafood',
          'Kuasai standar audit global (BRCGS, ISO 22000, FSSC 22000, MSC/ASC)',
          'Terapkan Spreadsheet Neraca Massa (Mass Balance) untuk menghitung biaya pereaksi, enzim & HPP'
        ],
        syllabus: [
          {
            topic: 'BRCGS / FSSC 22000 & MSC/ASC (Standar Global & Keberlanjutan)',
            detail: 'Sertifikasi keamanan pangan tingkat tertinggi (GFSI) dan sertifikasi keberlanjutan tangkap alam (MSC) / budidaya (ASC) yang memberikan harga jual premium di pasar Eropa dan Amerika.'
          },
          {
            topic: 'Chemical & Enzyme Mass Balance (Neraca Massa Bahan Kimia & Enzim)',
            detail: 'Menghitung kebutuhan aktual HCl 1,5 M, NaOH 60%, dan energi untuk menghasilkan 1 kg kitosan udang windu pada rendemen 78,03%, atau biaya enzim Alkalase 20.000 U/kg substrat untuk FPH guna mengunci margin bersih.'
          }
        ],
        todos: [
          'Siapkan CV berbasis pencapaian teknis (sertifikasi HACCP, proyek lab SNI, riset ekstraksi bioteknologi).',
          'Latih studi kasus pemecahan masalah produksi (Root Cause Analysis / Fishbone Diagram).'
        ],
        output: 'Diterima bekerja di posisi strategis atau siap menjalankan unit produksi mandiri berbasis hitungan neraca massa.',
        tips: 'Koneksi dengan bagian Purchasing (pembelian bahan baku) dan R&D di perusahaan besar akan sangat berguna saat kamu menawarkan sampel bahan baku bioteknologi sendiri.',
        subBranches: [
          {
            id: 'p6-sub-yield-hpp',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 6.1',
            badgeType: 'global',
            title: 'Spreadsheet Neraca Massa, Rendemen (Yield) & BEP Produksi',
            subtitle: 'Menghitung biaya konversi udang beku, fillet patin & serbuk ekstrak B2B',
            keywords: 'mass balance fish fillet yield calculation COGS BEP seafood processing',
            visualSteps: [
              'Hitung Yield Bertahap: Berat Utuh (Whole) → Tanpa Kepala (Headless ~65%) → Kupas Bersih (PTO ~48%)',
              'Hitung Neraca Massa Ekstraksi: Bahan Baku Limbah + Pereaksi (NaOH/HCl/Enzim) + Energi → Rendemen Serbuk',
              'Tentukan Harga Jual Minimum B2B & Titik Impas (BEP Tonase Bulanan)'
            ],
            syllabus: [
              {
                topic: 'Processing Yield & Shrinkage (Rendemen & Susut Bobot)',
                detail: 'Persentase berat produk akhir dibagi berat bahan baku awal dikali 100% (misal fillet patin tanpa kulit ~35–38%), ditambah perhitungan susut bobot pembekuan 1–3%.'
              },
              {
                topic: 'Commercial Cost Verification Note (Catatan Verifikasi HPP Komersial)',
                detail: 'Karena harga pereaksi industri teknis, tarif listrik kawasan, dan efisiensi mesin skala pabrik berbeda dari skala lab, spreadsheet neraca massa wajib diperbarui dengan penawaran harga vendor lokal sebelum penandatanganan kontrak.'
              }
            ],
            todos: [
              'Buat template kalkulator Excel neraca massa untuk menghitung HPP pengolahan udang beku, fillet patin, dan 1 kg serbuk kitosan/FPH.',
              'Simulasikan dampak kenaikan harga bahan baku 10% terhadap margin keuntungan bersih.'
            ],
            output: 'Model finansial Excel unit ekonomi & neraca massa pengolahan hasil perikanan.',
            tips: 'Banyak bisnis perikanan bangkrut bukan karena tidak laku, melainkan karena salah menghitung rendemen dan biaya pereaksi/energi per kilogram output!'
          }
        ]
      }
    ],
    right: [
      {
        id: 'p6-ekspor-trade',
        category: 'branch',
        badgeText: '🚢 EKSPOR GLOBAL & B2B',
        badgeType: 'leverage',
        title: 'Mekanisme Ekspor Kontainer, B2B Sample Kit & Trade Finance',
        subtitle: 'Cara mengirim produk dari Kaltim ke pasar global & validasi buyer B2B dengan CoA SNI',
        keywords: 'seafood export documents SMKHP PEB SKA Bill of Lading LC TT Incoterms',
        visualSteps: [
          'Kirim Sample Kit B2B + CoA SNI Lab Terakreditasi & Technical Data Sheet ke Industri Pangan/Kosmetik/Farmasi',
          'Siapkan Dokumen Ekspor: PEB, Commercial Invoice, Packing List, SKA (COO), B/L & SMKHP Terpadu Barantin–BPPMHKP',
          'Wawancara & Validasi Rute Reefer Container / Air Cargo Kaltim + Kontrak Incoterms (FOB/CIF) & L/C atau T/T'
        ],
        syllabus: [
          {
            topic: 'B2B Sample Kit & Technical Data Sheet Strategy (Strategi Penawaran Sampel B2B)',
            detail: 'Mengirimkan sample kit prototipe bioteknologi (kitosan, kolagen, albumin, FPH) atau olahan MAP yang dilengkapi CoA SNI dari lab terakreditasi dan Lembar Data Teknis ke manajer R&D pabrik pangan fungsional, kosmetik, dan nutraseutikal untuk meraih Letter of Intent (LoI).'
          },
          {
            topic: 'Incoterms (FOB vs CIF) & Payment Instruments (L/C vs T/T)',
            detail: 'FOB (Free On Board): Tanggung jawab eksportir sampai barang naik ke kapal di pelabuhan muat. CIF (Cost, Insurance, Freight): Eksportir menanggung ongkos kirim dan asuransi sampai pelabuhan tujuan. Pembayaran diamankan via Letter of Credit (L/C) bank atau Telegraphic Transfer (T/T) dengan DP.'
          }
        ],
        todos: [
          'Lakukan wawancara teknis langsung dengan minimal dua pelaku ekspor perikanan di Kalimantan Timur atau dinas terkait untuk memetakan rute pengiriman reefer container dan kargo udara.',
          'Kirimkan sample kit produk bioteknologi atau olahan MAP (dilengkapi CoA SNI dan lembar data teknis) ke industri pangan fungsional, kosmetik, dan nutraseutikal nasional untuk memperoleh LoI.'
        ],
        output: 'Minimal satu Letter of Intent (LoI) atau kontrak uji coba pembelian sampel B2B serta simulasi Export Quotation Sheet (FOB/CIF).',
        tips: 'Jangan pernah mengirim kontainer ekspor pertama tanpa DP minimal 30–50% atau jaminan L/C dari bank terpercaya.',
        subBranches: [
          {
            id: 'p6-sub-dokumen',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 6.2',
            badgeType: 'leverage',
            title: 'Dokumen Kepabeanan Ekspor, Reefer Container & Air Cargo Kaltim',
            subtitle: 'Integrasi PEB, SKA, B/L, SMKHP Barantin–BPPMHKP & verifikasi logistik berpendingin',
            keywords: 'reefer container air freight Kaltim PEB SKA Bill of Lading SMKHP',
            visualSteps: [
              'PEB (Pemberitahuan Ekspor Barang), Commercial Invoice, Packing List & SKA (Certificate of Origin)',
              'SMKHP Terpadu Barantin–BPPMHKP (satu pintu layanan ekspor sejak Juli 2026) & SHTI (Catch Certificate)',
              'Stuffing ke Reefer Container (-20°C) atau Air Cargo Berpendingin setelah verifikasi jadwal pelayaran Kaltim'
            ],
            syllabus: [
              {
                topic: 'Reefer Container & Air Cargo Verification (Verifikasi Logistik Berpendingin Kaltim)',
                detail: 'Kontainer berpendingin menjaga suhu -25°C hingga +25°C (kapasitas 20ft ~10–12 ton; 40ft HC ~22–25 ton). Catatan lapangan: jadwal kapal reefer, tarif kontainer, dan kapasitas kargo udara dingin dari pelabuhan/bandara Kaltim wajib dikonfirmasi langsung ke penyedia logistik dan eksportir terdaftar sebelum menutup kontrak CIF.'
              },
              {
                topic: 'Catch Certificate / SHTI & Single-Window SMKHP',
                detail: 'SHTI membuktikan ikan berasal dari penangkapan legal (bebas IUU Fishing), sedangkan sistem terpadu Barantin–BPPMHKP memangkas birokrasi karantina dan sertifikat mutu ekspor menjadi satu alur digital.'
              }
            ],
            todos: [
              'Verifikasi rute aktual, jadwal kapal reefer, dan tarif kargo udara berpendingin dari pelabuhan/bandara Kalimantan Timur bersama penyedia logistik.',
              'Susun daftar periksa dokumen ekspor lengkap (PEB, SKA, B/L, Packing List, SMKHP terpadu).'
            ],
            output: 'Checklist lengkap dokumen ekspor hasil perikanan Indonesia dan matriks biaya logistik Kaltim.',
            tips: 'Pelabuhan Kaltim Kariangau Terminal (KKT) di Balikpapan memiliki layanan ekspor langsung yang memangkas biaya transit domestik!'
          },
          {
            id: 'p6-sub-buyer-hunting',
            category: 'subbranch',
            badgeText: 'SUB-CABANG 6.3',
            badgeType: 'leverage',
            title: 'Strategi Mencari Buyer Luar Negeri & Negosiasi B2B',
            subtitle: 'Menembus importir seafood & bahan aktif di Jepang, AS, Tiongkok & Timur Tengah',
            keywords: 'TradeMap seafood importers HS Code 0306 0304 B2B negotiation sample shipment',
            visualSteps: [
              'Riset negara importir terbesar kode HS Perikanan (HS 0306 Udang, HS 0304 Fillet Ikan) di TradeMap',
              'Kirim Company Profile + Technical Data Sheet / Product Spec Sheet + Harga FOB/CIF ke Purchasing Importir',
              'Kirim Sampel Beku/Serbuk via Air Cargo (DHL/FedEx) → Uji Lab Buyer → Kontrak Pengiriman Pertama'
            ],
            syllabus: [
              {
                topic: 'HS Code (Harmonized System Code)',
                detail: 'Kode klasifikasi barang perdagangan internasional 6–10 digit untuk mengecek tarif bea masuk dan data importir di seluruh dunia (misal: 0306.17 untuk udang beku).'
              },
              {
                topic: 'Product Specification Sheet (Lembar Spesifikasi Produk Ekspor)',
                detail: 'Dokumen teknis 1 halaman berisi nama latin spesies, ukuran (size count per pound) atau parameter kemurnian ekstrak, standar mikrobiologi SNI, dan nomor registrasi pabrik.'
              }
            ],
            todos: [
              'Buat 1 dokumen Company Profile & Technical Data Sheet berbahasa Inggris yang profesional.',
              'Daftar akun gratis di TradeMap.org dan analisis 5 negara tujuan ekspor utama udang & ikan Indonesia serta lakukan verifikasi kredibilitas calon buyer.'
            ],
            output: 'Database 20 calon buyer B2B/importir seafood terverifikasi beserta dokumen penawaran resmi.',
            tips: 'Buyer luar negeri tidak peduli seberapa besar kantormu di Samarinda—yang mereka nilai adalah kelengkapan CoA laboratorium terakreditasi, nomor registrasi resmi, dan ketepatan pengiriman sampel!'
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
        'Kuasai Hulu: Kemitraan Kontrak Tambak Silvofishery Delta Mahakam, Rumput Laut Bontang/PPU & Nelayan Mahakam',
        'Kuasai Tengah: Pabrik Cold Storage & Ekstraksi SUS 316L Berstandar SKP Grade A / PMMT-HACCP / BPOM MD',
        'Kuasai Hilir: Ekspor Kontainer FCL via KKT Balikpapan, Kontrak B2B Kosmetik/Farmasi & Pasokan IKN'
      ],
      syllabus: [
        {
          topic: 'Vertical Integration (Integrasi Vertikal Hulu ke Hilir)',
          detail: 'Strategi menguasai rantai pasok secara menyeluruh dari sumber bahan baku (kemitraan tambak silvofishery/nelayan), fasilitas pengolahan milik sendiri (pabrik dan cold storage), hingga penjualan langsung ke pembeli luar negeri atau industri hilir tanpa perantara berlapis.'
        },
        {
          topic: 'Asset and IP Leverage (Daya Ungkit Aset Fisik & Kekayaan Intelektual)',
          detail: 'Kekayaan besar dibangun dari kepemilikan fasilitas produksi berizin ekspor yang memiliki hambatan masuk tinggi (SKP Grade A, PMMT/HACCP, Approval Number) serta perlindungan Paten Sederhana atas formulasi ekstraksi bernilai tinggi di DJKI.'
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
              'Bontang (4.185 Ton), PPU, Paser & Berau: Agregasi Rumput Laut & Ikan Karang Ekspor',
              'Mahakam Tengah (Kota Bangun & Muara Muntai): Sortasi Ikan Gabus Bobot 600–900g (Albumin Tertinggi)'
            ],
            syllabus: [
              {
                topic: 'Silvofishery and Supplier Certification (Tambak Silvofishery & Sertifikasi Pemasok)',
                detail: 'Budidaya udang windu berbasis silvofishery di kawasan mangrove Delta Mahakam dan Pegat Batumbuk Berau unggul karena alami dan bebas antibiotik. Untuk menembus pabrik pemegang Approval Number Uni Eropa, KKP mewajibkan sertifikasi ketertelusuran hingga tingkat pemasok bahan baku.'
              },
              {
                topic: 'Optimal Snakehead Grading (Standar Ukuran Ikan Gabus DAS Mahakam)',
                detail: 'Studi ilmiah ikan gabus asal DAS Mahakam Tengah menunjukkan kelompok ukuran sedang (600–900 g) menghasilkan kadar protein ekstrak (59,24–63,59%) dan kadar albumin ekstrak (14,23–17,85%) tertinggi secara signifikan (p < 0,05) dibanding ukuran < 600 g atau > 900 g, dengan edible portion 49,87–54,73%.'
              },
              {
                topic: 'Regional Downstream Synergy (Sinergi Ekosistem Hilirisasi Kaltim)',
                detail: 'Kaltim tengah mempercepat hilirisasi daerah, antara lain lewat 6.000 ha tambak produktif rumput laut di PPU (9.000 ton/tahun), produksi rumput laut Bontang 4.185 ton/tahun, penyelesaian pabrik olahan rumput laut Pemkab Kukar di Muara Badak, serta program HILIR BERAU dan rumah produksi pengalengan ikan di Tanjung Batu.'
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