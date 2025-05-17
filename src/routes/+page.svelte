<script lang="ts">
	import { aboutMe, experiences, skills } from "$lib/stores/portfolio-data";
	import { projects } from "$lib/stores/projects-data";
	import Section from "$components/shared/Section.svelte";
	import ButtonLink from "$components/shared/ButtonLink.svelte";
	import ProjectCard from "$components/shared/ProjectCard.svelte";
	import { Briefcase, Code, Laptop, GraduationCap, Mail, FolderGit2 } from "lucide-svelte";
</script>

<svelte:head>
	<title>Khalid Abdul Jabbar - Senior QA Engineer & Test Architect</title>
	<meta name="description" content="Professional portfolio for Khalid Abdul Jabbar, a Senior QA Engineer and Test Architect specializing in AI-assisted test automation." />
</svelte:head>

<!-- Hero Section -->
<section class="hero min-h-[80vh] flex items-center bg-base-100">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div>
				<h1 class="text-4xl md:text-5xl font-bold mb-3 text-secondary">Khalid Abdul Jabbar</h1>
				<h2 class="text-2xl md:text-3xl font-semibold mb-5 text-primary">Senior QA Engineer & Test Architect</h2>
				<p class="text-lg mb-8">
					{aboutMe.slice(0, 200)}...
				</p>
				<div class="flex flex-wrap gap-3">
					<ButtonLink href="/about" text="About Me" variant="primary" />
					<ButtonLink href="/experience" text="My Experience" variant="outline" />
					<ButtonLink href="/contact" text="Get in Touch" variant="secondary" />
				</div>
			</div>
			<div class="flex justify-center md:justify-end">
				<div class="stats shadow">
					<div class="stat">
						<div class="stat-figure text-primary">
							<Briefcase size={36} />
						</div>
						<div class="stat-title">Experience</div>
						<div class="stat-value text-primary">4+ Years</div>
						<div class="stat-desc">In Quality Assurance</div>
					</div>
					
					<div class="stat">
						<div class="stat-figure text-secondary">
							<Code size={36} />
						</div>
						<div class="stat-title">Projects</div>
						<div class="stat-value text-secondary">10+</div>
						<div class="stat-desc">Across different industries</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<Section title="What I Do" subtitle="Specialized skills and services" id="services">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="card card-shadow bg-base-100 shadow-md hover:shadow-lg transition-shadow">
			<div class="card-body">
				<div class="flex justify-center mb-4">
					<div class="p-3 rounded-full bg-primary/10 text-primary">
						<Code size={28} />
					</div>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-center">Test Automation</h3>
				<p class="text-center">
					Creating robust automation frameworks with Playwright, Cypress, and other modern tools to ensure reliable and efficient testing pipelines.
				</p>
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100 shadow-md hover:shadow-lg transition-shadow">
			<div class="card-body">
				<div class="flex justify-center mb-4">
					<div class="p-3 rounded-full bg-accent/10 text-accent">
						<Laptop size={28} />
					</div>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-center">AI-Assisted Testing</h3>
				<p class="text-center">
					Leveraging AI for smarter test generation, case management, and execution to streamline the testing process and improve coverage.
				</p>
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100 shadow-md hover:shadow-lg transition-shadow">
			<div class="card-body">
				<div class="flex justify-center mb-4">
					<div class="p-3 rounded-full bg-secondary/10 text-secondary">
						<GraduationCap size={28} />
					</div>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-center">QA Leadership</h3>
				<p class="text-center">
					Guiding teams toward quality excellence through effective resource allocation, mentorship, and strategic quality initiatives.
				</p>
			</div>
		</div>
	</div>
</Section>

<!-- Featured Projects Section -->
<Section title="Featured Projects" subtitle="Recent work and implementations" id="projects">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each projects.filter(p => p.featured).slice(0, 3) as project}
			<ProjectCard {project} />
		{/each}
	</div>
	<div class="mt-8 text-center">
		<ButtonLink href="/projects" text="View All Projects" variant="outline" icon={FolderGit2} />
	</div>
</Section>

<!-- Experience Highlight Section -->
<Section title="Career Highlights" subtitle="Recent professional experience" id="highlights">
	<div class="timeline">
		{#each experiences.slice(0, 3) as experience}
			<div class="mb-8">
				<div class="flex flex-col md:flex-row gap-4">
					<div class="badge badge-primary py-2 px-4 self-start">{experience.period}</div>
					<div>
						<h3 class="text-xl font-semibold">{experience.title}</h3>
						<h4 class="text-lg font-medium">{experience.company} | {experience.location}</h4>
						<p class="mt-2">{experience.achievement}</p>
					</div>
				</div>
			</div>
		{/each}
		<div class="mt-6">
			<ButtonLink href="/experience" text="View Full Experience" variant="outline" />
		</div>
	</div>
</Section>

<!-- Skills Highlight -->
<Section title="Technical Skills" subtitle="Tools and technologies I work with" id="skills-highlight">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h3 class="section-subtitle">Programming Languages</h3>
			<div class="flex flex-wrap gap-2">
				{#each skills.technical as skill}
					<div class="badge badge-primary badge-lg p-3">{skill}</div>
				{/each}
			</div>
		</div>
		
		<div>
			<h3 class="section-subtitle">Testing Tools</h3>
			<div class="flex flex-wrap gap-2">
				{#each skills.testing.slice(0, 6) as skill}
					<div class="badge badge-secondary badge-lg p-3">{skill}</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="mt-6">
		<ButtonLink href="/skills" text="Explore All Skills" variant="outline" />
	</div>
</Section>

<!-- Contact CTA -->
<section class="py-16 bg-primary/10">
	<div class="container-custom text-center">
		<h2 class="text-3xl font-bold mb-4">Let's Work Together</h2>
		<p class="text-lg mb-8 max-w-2xl mx-auto">
			I'm currently open to new opportunities and collaborations. If you're looking for a quality-focused professional to improve your testing processes, let's connect.
		</p>
		<ButtonLink href="/contact" text="Get in Touch" variant="primary" size="lg" />
	</div>
</section>
