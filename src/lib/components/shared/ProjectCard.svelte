<script lang="ts">
	import ProjectDetail from './ProjectDetail.svelte';
	
	export let project: {
		title: string;
		description: string;
		technologies: string[];
		highlights: string[];
		company: string;
		image: string;
		featured: boolean;
	};
	
	let isModalOpen = false;
	
	function openModal() {
		isModalOpen = true;
	}
	
	function closeModal() {
		isModalOpen = false;
	}
</script>

<div 
	class="card bg-base-100 h-full shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
	data-aos="fade-up"
>
	<figure class="h-48 overflow-hidden">
		<img
			src={project.image}
			alt={project.title}
			class="w-full h-full object-cover"
			loading="lazy"
		/>
	</figure>
	<div class="card-body">
		<h3 class="card-title text-lg md:text-xl font-bold text-primary mb-1">
			{project.title}
		</h3>
		<p class="text-sm mb-3 font-medium text-secondary">
			{project.company}
		</p>
		<p class="text-sm mb-4">
			{project.description}
		</p>
		
		<div class="flex flex-wrap gap-1 mb-4">
			{#each project.technologies.slice(0, 3) as tech}
				<span class="badge badge-sm badge-outline">{tech}</span>
			{/each}
			{#if project.technologies.length > 3}
				<span class="badge badge-sm">+{project.technologies.length - 3}</span>
			{/if}
		</div>
		
		<div class="card-actions justify-end mt-auto">
			<button class="btn btn-primary btn-sm" on:click={openModal}>View Details</button>
		</div>
	</div>
</div>

<ProjectDetail project={project} isOpen={isModalOpen} onClose={closeModal} />
