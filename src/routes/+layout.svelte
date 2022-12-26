<script>
  import Logo from '$lib/components/logo.svelte';
  import '../app.postcss';
</script>

<svelte:head>
  <title>Lembaga Pelawat Kompleks Penyayang BAKTI</title>
</svelte:head>

<nav class="absolute top-0 left-0 right-0 z-50 py-8">
  <div class="container"><Logo /></div>
</nav>

<slot />
