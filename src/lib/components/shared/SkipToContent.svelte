<script lang="ts">
	import { onMount } from 'svelte';

	// Skip to content - for accessibility
	function skipToContent() {
		const mainContent = document.querySelector('main');
		if (mainContent) {
			mainContent.setAttribute('tabindex', '-1');
			mainContent.focus();
			// Remove tabindex after focus to prevent unexpected behavior
			setTimeout(() => {
				mainContent.removeAttribute('tabindex');
			}, 1000);
		}
	}

	// Add skip link only when needed
	let showSkipLink = false;
	
	// Detect if user is using keyboard navigation
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Tab') {
			showSkipLink = true;
			window.removeEventListener('keydown', handleKeyDown);
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

{#if showSkipLink}
	<a
		href="#skip-to-content"
		class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:py-2 focus:px-4 focus:bg-primary focus:text-white focus:rounded"
		on:click|preventDefault={skipToContent}
	>
		Skip to main content
	</a>
{/if}

<style>
	/* Screen reader only class */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
