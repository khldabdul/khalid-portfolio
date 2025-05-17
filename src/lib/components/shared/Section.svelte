<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let id: string;
</script>

<section {id} class="py-16 scroll-mt-20">
	<div class="container-custom">
		<h2 class="section-title">{title}</h2>
		{#if subtitle}
			<p class="text-lg mb-8">{subtitle}</p>
		{/if}
		<div class="content">
			<slot />
		</div>
	</div>
</section>
