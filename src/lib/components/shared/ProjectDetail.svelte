<script lang="ts">
	export let project: {
		title: string;
		description: string;
		technologies: string[];
		highlights: string[];
		company: string;
		image: string;
		featured: boolean;
	};
	export let isOpen: boolean = false;
	export let onClose: () => void;

	// Handle escape key to close modal
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			onClose();
		}
	}

	// Prevent scrolling when modal is open
	$: if (typeof document !== 'undefined') {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
		on:click={onClose}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
	>
		<!-- Modal content -->
		<div
			class="bg-base-100 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
			on:click|stopPropagation={() => {}}
		>
			<!-- Modal header -->
			<div class="p-5 border-b flex justify-between items-center">
				<h2 id="modal-title" class="text-2xl font-bold text-primary">{project.title}</h2>
				<button
					class="btn btn-sm btn-ghost"
					aria-label="Close modal"
					on:click={onClose}
				>
					✕
				</button>
			</div>

			<!-- Modal body -->
			<div class="p-5">
				<div class="flex flex-col md:flex-row gap-6">
					<!-- Image Section -->
					<div class="md:w-1/3">
						<img
							src={project.image}
							alt={project.title}
							class="w-full rounded-lg object-cover"
						/>
						<p class="mt-2 text-sm font-medium text-secondary">
							Developed at {project.company}
						</p>
					</div>

					<!-- Details Section -->
					<div class="md:w-2/3">
						<h3 class="text-xl font-semibold mb-3">Project Overview</h3>
						<p class="mb-4">{project.description}</p>

						<h3 class="text-xl font-semibold mb-3">Key Features & Highlights</h3>
						<ul class="list-disc pl-5 mb-4 space-y-1">
							{#each project.highlights as highlight}
								<li>{highlight}</li>
							{/each}
						</ul>

						<h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.technologies as tech}
								<span class="badge badge-primary">{tech}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Modal footer -->
			<div class="p-5 border-t flex justify-end">
				<button class="btn btn-primary" on:click={onClose}>Close</button>
			</div>
		</div>
	</div>
{/if}
