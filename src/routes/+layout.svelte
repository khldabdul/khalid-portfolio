<script lang="ts">
  import Footer from "$components/layout/Footer.svelte";
  import Header from "$components/layout/Header.svelte";
  import { initAOS, updateAOS } from "$lib/utils/animation";
  import { initTheme, toggleTheme, getCurrentTheme, debugTheme, type Theme } from "$lib/utils/theme";
  import { afterUpdate, onMount } from "svelte";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import "../app.css";

  // Handle theme toggle
  let theme: Theme = "light";

  onMount(() => {
    theme = initTheme();
    initAOS();
    
    // In development mode, debug theme state
    if (browser && import.meta.env.DEV) {
      debugTheme();
    }
  });

  // Monitor page changes to ensure theme stays consistent
  $: if (browser && $page) {
    theme = getCurrentTheme();
  }

  afterUpdate(() => {
    updateAOS();
  });

  function handleToggleTheme() {
    theme = toggleTheme(theme);
    
    // Debug theme after toggle in development mode
    if (browser && import.meta.env.DEV) {
      setTimeout(debugTheme, 100); // Small delay to allow DOM to update
    }
  }
</script>

<svelte:head>
  <title>Khalid Abdul Jabbar - Senior QA Engineer & Test Architect</title>
  <meta
    name="description"
    content="Professional portfolio for Khalid Abdul Jabbar, Senior QA Engineer, Test Architect, and Lead QA Engineer specializing in AI-assisted test automation and quality processes."
  />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <!-- Open Graph / Social Media Meta Tags -->
  <meta
    property="og:title"
    content="Khalid Abdul Jabbar - Senior QA Engineer & Test Architect"
  />
  <meta
    property="og:description"
    content="Professional portfolio showcasing expertise in AI-assisted test automation and quality processes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://khalidjabbar.com/" />
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Khalid Abdul Jabbar - Senior QA Engineer & Test Architect"
  />
  <meta
    name="twitter:description"
    content="Professional portfolio showcasing expertise in AI-assisted test automation and quality processes."
  />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header {theme} toggleTheme={handleToggleTheme} />

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div>
