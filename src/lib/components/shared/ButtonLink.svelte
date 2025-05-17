<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';
	
	export let href: string;
	export let text: string;
	export let external: boolean = false;
	export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let icon: ComponentType | null = null;
</script>

<a 
	{href} 
	class="btn btn-{variant} btn-{size} inline-flex items-center gap-1"
	target={external ? "_blank" : undefined}
	rel={external ? "noopener noreferrer" : undefined}
>
	{#if icon}
		<svelte:component this={icon} size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
	{/if}
	{text}
	{#if external}
		<ArrowUpRight size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
	{/if}
</a>
