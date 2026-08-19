<script lang="ts">
  import '@fontsource-variable/plus-jakarta-sans';
  import Logo from '$lib/components/logo.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Lembaga Pelawat Kompleks Penyayang BAKTI</title>
  <meta
    name="description"
    content="Lembaga Pelawat Kompleks Penyayang BAKTI menyediakan khidmat kebajikan bersepadu untuk mereka yang kurang bernasib baik."
  />
</svelte:head>

<nav aria-label="Utama" class="absolute top-0 right-0 left-0 z-50 py-8">
  <div class="container"><Logo /></div>
</nav>

{@render children()}
