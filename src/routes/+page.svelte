<script lang="ts">
  const activities = [
    { title: 'Program Bacaan Yaasin' },
    { title: 'Gotong-Royong Pembasmian Nyamuk Aedes' },
    { title: 'Sambutan Perayaan' },
    { title: 'Program Kesedaran Anti Dadah' },
    { title: 'Program ke Kalumpang, Kuala Selangor' },
    {
      title: 'Program Bacaan Al-Quran dan Mathurat Anjuran CELPAD (UIAM)',
    },
    { title: 'Aktiviti Kelas Agama dan Fardu Ain' },
    { title: 'Program Kursus Pertolongan Cemas' },
    { title: 'Program Sambutan Awal Muharam' },
    { title: 'Program Lawatan ke KLCC' },
    { title: 'Rawatan Psikiatrik untuk penghuni' },
    { title: 'Aktiviti Penanaman Nenas' },
    { title: 'Program Gotong Royong penghuni' },
    { title: 'Sambutan Hari Warga Emas' },
    { title: 'Pemeriksaan Dokumen & Identiti' },
    {
      title:
        'Penghuni bersama Jabatan Pendaftaran Negara Cawangan Negeri Selangor',
    },
  ];

  function isLight(r: number, g: number, b: number) {
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return true;
    }
    return false;
  }

  const toRGB = function (str: string): { bg: string; text: string } {
    var hash = 0;

    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }
    var rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 255;
      rgb[i] = value;
    }
    return {
      bg: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
      text: isLight(rgb[0], rgb[1], rgb[2]) ? '#000' : '#fff',
    };
  };
</script>

<section
  class="flex min-h-screen w-full items-end justify-start bg-brand-600 py-10 text-white lg:py-40"
>
  <div class="container w-full">
    <h1
      class="text-7xl font-bold !leading-[0.9] !tracking-[-0.065em] lg:text-9xl"
    >
      Kebajikan integrasi untuk yang kurang bernasib baik
    </h1>
  </div>
</section>

<section class="min-h-screen bg-gray-900 py-10 text-white lg:py-20">
  <div class="container grid grid-cols-1 items-end gap-16 lg:grid-cols-2">
    <div>
      <img src="/images/hands.jpg" alt="" class="rounded-3xl grayscale" />
    </div>
    <div>
      <h2 class="text-6xl font-semibold tracking-tighter lg:text-7xl">
        Kami percaya dengan masa depan yang lebih baik untuk setiap insan.
      </h2>

      <p
        class="mt-16 text-3xl font-medium tracking-tighter lg:text-4xl [&>span]:text-gray-500"
      >
        Kompleks Penyayang BAKTI lahir atas dasar <span>kesedaran</span>
        terhadap perlunya <span>sebuah institusi</span> yang memberikan
        <span>khidmat kebajikan</span> berbentuk integrasi kepada mereka yang
        <span>kurang bernasib baik</span> seperti kanak-kanak, warga emas dan ibu-ibu
        tunggal atau wanita hamil luar nikah dan menjadi mangsa keganasan rumah tangga.
      </p>
    </div>
  </div>
</section>

<section class="bg-brand-600 py-10 text-white lg:py-20">
  <div class="container">
    <p class="mb-12 max-w-3xl text-2xl font-light tracking-tight lg:text-3xl">
      Pewujudan kompleks ini adalah hasil gabungan tenaga Badan Amal Kebajikan
      Tenaga Isteri (BAKTI) sebagai badan NGO yang membangun kompleks ini
      bertarikh 6 Oktober 1997, Tetuan Yarisan Holdings Sdn Bhd (Swasta) dan
      Jabatan Kebajikan Masyarakat Malaysia (JKM) yang memperuntukkan sebidah
      tanah seluas 106,716 meter persegi sebagai tapak pembangunan kompleks.
    </p>

    <p class="max-w-3xl text-3xl font-normal tracking-tighter lg:text-4xl">
      Pakatan Tiga Pihak ini melambangkan keprihatinan setiap sektor masyarakat
      Malaysia terhadap mereka yang kurang bernasib baik serta menjadi contoh
      kerjasama yang unggul.
    </p>
  </div>
</section>

<section class="bg-gray-900 py-20 text-white">
  <div class="container">
    <h3 class="mb-16 text-5xl font-semibold tracking-tighter lg:text-7xl">
      Aktiviti &amp; Program
    </h3>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {#each activities as activity}
        <div
          class="flex flex-col justify-start rounded-3xl bg-gray-500/10 p-6 aspect-square"
          style:background-color={toRGB(activity.title).bg}
        >
          <h4
            class="text-xl font-light !leading-[1.2] tracking-tighter opacity-80 sm:text-2xl md:text-3xl xl:text-4xl"
            style:color={toRGB(activity.title).text}
          >
            {activity.title}
          </h4>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-white py-20">
  <div class="container grid grid-cols-1 items-center gap-6 md:grid-cols-2">
    <div>
      <h3 class="mb-4 text-5xl font-semibold tracking-tighter lg:text-7xl">
        Mari Menyumbang
      </h3>

      <p class="text-3xl !leading-none tracking-tighter lg:text-4xl">
        Sumbangan ikhlas untuk penghuni boleh disalurkan kepada akaun
      </p>

      <p class="mt-12 text-xl font-semibold tracking-tight lg:mt-24">
        LEMBAGA PELAWAT KOMP PENYAYANG BAKTI
      </p>
      <p class="text-4xl font-extralight tracking-tighter">
        564397002361 (Maybank Islamic)
      </p>
      <img
        src="/images/maybank-islamic.png"
        alt=""
        class="mt-2 w-60 rounded-xl"
      />
    </div>

    <div>
      <img
        src="/images/donate.jpg"
        alt=""
        class="rounded-3xl object-cover aspect-square"
      />
    </div>
  </div>
</section>

<footer class="bg-gray-900 py-10 text-white">
  <div class="container">
    <div class="font-medium tracking-tight">
      &copy; {new Date().getFullYear()}
      Kompleks Penyayang Bakti, Jalan SD 13/4, Persiaran Meranti, Bandar Sri Damansara,
      52200 Kuala Lumpur. Tel: 03-6277 8684 / 03-6277 8093
    </div>
  </div>
</footer>
