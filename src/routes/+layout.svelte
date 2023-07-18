<script>
  import '@fontsource-variable/plus-jakarta-sans';
  import Logo from '$lib/components/logo.svelte';
  import '../app.postcss';
</script>

<svelte:head>
  <title>Lembaga Pelawat Kompleks Penyayang BAKTI</title>
</svelte:head>

<nav class="absolute left-0 right-0 top-0 z-50 py-8">
  <div class="container"><Logo /></div>
</nav>

<slot />
