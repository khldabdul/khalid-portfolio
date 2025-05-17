<script lang="ts">
	import { projects } from "$lib/stores/projects-data";
	import Section from "$components/shared/Section.svelte";
	import { ExternalLink, GitBranch } from "lucide-svelte";
	import ProjectCard from "$components/shared/ProjectCard.svelte";
</script>

<svelte:head>
	<title>Projects | Khalid Abdul Jabbar</title>
	<meta name="description" content="Explore the projects and implementations by Khalid Abdul Jabbar, including AI-assisted test automation frameworks, custom test management systems, and performance testing solutions." />
</svelte:head>

<!-- Projects Hero Section -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<h1 class="text-3xl md:text-4xl font-bold mb-6 text-secondary">My Projects</h1>
		<p class="text-lg max-w-3xl">
			Below are some of the key projects I've developed and implemented throughout my career. These represent my approach to quality assurance,
			showcasing how I combine technical expertise with innovative thinking to solve complex testing challenges.
		</p>
	</div>
</section>

<!-- Featured Projects -->
<Section title="Featured Projects" id="featured-projects">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects.filter(project => project.featured) as project}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

<!-- All Projects -->
<Section title="All Projects" id="all-projects">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects.filter(project => !project.featured) as project}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

<!-- Additional Information -->
<section class="py-12 bg-base-200">
	<div class="container-custom text-center">
		<h2 class="text-2xl font-bold mb-4">Interested in My Work?</h2>
		<p class="mb-6 max-w-2xl mx-auto">
			These projects represent a selection of my professional work. For more details about specific implementations or to discuss how I can help with your quality assurance needs, please get in touch.
		</p>
		<a href="/contact" class="btn btn-primary">Contact Me</a>
	</div>
</section>
