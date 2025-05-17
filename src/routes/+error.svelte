<script lang="ts">
  import { page } from "$app/stores";
  import ButtonLink from "$components/shared/ButtonLink.svelte";
</script>

<svelte:head>
  <title>Error {$page.status} | Khalid Abdul Jabbar</title>
</svelte:head>

<div class="min-h-[70vh] flex items-center justify-center">
  <div class="container-custom text-center py-16">
    <h1 class="text-5xl md:text-6xl font-bold mb-4 text-primary">
      {$page.status}
    </h1>
    <p class="text-2xl md:text-3xl mb-6">
      {$page.error?.message || "Something went wrong"}
    </p>

    <div class="prose max-w-md mx-auto mb-8">
      <p>
        {#if $page.status === 404}
          The page you're looking for doesn't exist or has been moved.
        {:else}
          We're experiencing some technical difficulties. Please try again
          later.
        {/if}
      </p>
    </div>

    <div>
      <ButtonLink href="/" text="Return to Home" variant="primary" />
    </div>
  </div>
</div>
