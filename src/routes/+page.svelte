<script lang="ts">
  import { balancer } from 'svelte-action-balancer';

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

  const members = [
    {
      name: 'Prof Madya Dr Rusdi Bin Abd Rashid',
      position: 'Pengerusi',
      picture: '/images/drrusdi.png',
    },
    {
      name: 'Nurulhuda Binti Md Yunus',
      position: 'Setiausaha',
      picture: '/images/huda.png',
    },
    {
      name: 'Nik Haslina Binti Nik Ibrahim',
      position: 'Bendahari',
      picture: '/images/nikhaslina.png',
    },
    {
      name: 'Dr Harris Shah Bin Abd Hamid',
      position: 'Ahli',
      picture: '/images/drharris.png',
    },
    {
      name: 'Noor Aieda Binti Ahmad',
      position: 'Ahli',
      picture: '/images/aieda.png',
    },
    {
      name: 'Ahmad Syukry Bin Ibrahim',
      position: 'Ahli',
      picture: '/images/syukri.png',
    },
    {
      name: 'Muhammad Hazamin Bin Harun',
      position: 'Ahli',
      picture: '/images/hazamin.png',
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
  class="relative flex min-h-screen w-full items-end justify-start bg-brand py-10 text-white lg:py-40"
>
  <img
    src="/images/kpb.jpg"
    alt=""
    class="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-30 grayscale"
  />
  <div class="container w-full">
    <h1
      class="relative text-7xl font-extrabold !leading-[0.9] !tracking-tighter drop-shadow-xl lg:text-9xl"
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
      <h2
        class="text-5xl font-semibold !leading-[0.9] tracking-tight lg:text-7xl"
        use:balancer
      >
        Kami percaya dengan masa depan yang lebih baik untuk setiap insan.
      </h2>

      <p
        class="mt-16 text-2xl font-semibold !leading-tight tracking-normal lg:text-4xl [&>span]:text-gray-400"
        use:balancer
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

<section class="bg-brand py-10 text-white md:text-center lg:py-20">
  <div class="container">
    <div class="mx-auto max-w-5xl" use:balancer>
      <p
        class="mb-8 text-xl font-light !leading-tight tracking-normal lg:text-3xl"
      >
        Pewujudan kompleks ini adalah hasil gabungan tenaga Badan Amal Kebajikan
        Tenaga Isteri (BAKTI) sebagai badan NGO yang membangun kompleks ini
        bertarikh 6 Oktober 1997, Tetuan Yarisan Holdings Sdn Bhd (Swasta) dan
        Jabatan Kebajikan Masyarakat Malaysia (JKM) yang memperuntukkan sebidah
        tanah seluas 106,716 meter persegi sebagai tapak pembangunan kompleks.
      </p>

      <p
        class="text-2xl font-semibold !leading-tight tracking-normal lg:text-4xl"
      >
        Pakatan tiga pihak ini melambangkan keprihatinan setiap sektor
        masyarakat Malaysia terhadap mereka yang kurang bernasib baik serta
        menjadi contoh kerjasama yang unggul.
      </p>
    </div>
  </div>
</section>

<section class="bg-gray-800 py-10 text-white lg:py-20">
  <div class="container">
    <h3
      class="mb-16 text-center text-4xl font-semibold tracking-tighter lg:text-7xl"
    >
      Ahli Lembaga Pelawat
    </h3>

    <div class="flex flex-wrap justify-center">
      {#each members as member}
        <div
          class="flex w-full flex-col items-center p-6 text-center md:w-1/3 md:p-12"
        >
          <div>
            <img
              src={member.picture}
              alt={member.name}
              class="w-32 rounded-full bg-white object-cover object-top aspect-square md:w-40"
            />
          </div>
          <div
            class="mb-4 mt-6 text-lg font-light !leading-tight md:text-2xl"
            use:balancer
          >
            {member.name}
          </div>
          <div class="">
            <span
              class="rounded-full bg-white p-1 px-3 text-xs font-bold text-gray-800 md:text-sm"
            >
              {member.position}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-gray-900 py-20 text-white">
  <div class="container">
    <h3
      class="mb-16 text-center text-4xl font-semibold tracking-tighter lg:text-7xl"
    >
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
      <h3 class="mb-4 text-4xl font-semibold tracking-tighter lg:text-7xl">
        Mari Menyumbang
      </h3>

      <p class="text-2xl !leading-none lg:text-4xl">
        Sumbangan ikhlas untuk penghuni boleh disalurkan melalui ToyyibPay
      </p>

      <button
        on:click={() =>
          window.open('https://toyyibpay.com/penyayangbakti', '_blank')}
        class="mt-4 rounded-full bg-[#624ec4] px-8 py-6 text-3xl text-white"
        ><img
          src="/images/toyyibpay-logo-white.svg"
          alt=""
          class="h-8"
        /></button
      >

      <p class="mb-2 mt-12 text-lg font-semibold opacity-60 lg:mt-16">
        Atau transaksi terus kepada akaun
      </p>
      <p class="text-base font-bold md:text-lg">Maybank Islamic</p>
      <p class="mb-2 text-2xl font-extralight md:text-4xl">564397002361</p>
      <p
        class="mb-6 text-lg
       font-semibold !leading-snug md:text-2xl"
      >
        LEMBAGA PELAWAT KOMP PENYAYANG BAKTI
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
    <div class="font-medium">
      &copy; {new Date().getFullYear()}
      Kompleks Penyayang Bakti, Jalan SD 13/4, Persiaran Meranti, Bandar Sri Damansara,
      52200 Kuala Lumpur. Tel: 03-6277 8684 / 03-6277 8093
    </div>
  </div>
</footer>
