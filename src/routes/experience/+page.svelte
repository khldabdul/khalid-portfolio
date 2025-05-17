<script lang="ts">
	import { experiences } from "$lib/stores/portfolio-data";
	import Section from "$components/shared/Section.svelte";
	import ExperienceCard from "$components/shared/ExperienceCard.svelte";
	import { Briefcase } from "lucide-svelte";
</script>

<svelte:head>
	<title>Professional Experience | Khalid Abdul Jabbar</title>
	<meta name="description" content="Explore Khalid Abdul Jabbar's professional experience as a Senior QA Engineer, Test Architect, and Lead QA Engineer specializing in test automation and quality processes." />
</svelte:head>

<!-- Experience Hero Section -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<div class="text-center max-w-3xl mx-auto">
			<h1 class="text-3xl md:text-4xl font-bold mb-4 text-secondary">Professional Experience</h1>
			<p class="text-lg mb-6">
				My professional journey spans multiple roles in quality assurance, from implementation to leadership, focused on automating testing processes and leveraging AI for improved efficiency.
			</p>
			
			<div class="stats shadow inline-flex">
				<div class="stat place-items-center">
					<div class="stat-title">Experience</div>
					<div class="stat-value text-primary">4+</div>
					<div class="stat-desc">Years in QA</div>
				</div>
				
				<div class="stat place-items-center">
					<div class="stat-title">Companies</div>
					<div class="stat-value">3</div>
					<div class="stat-desc">Worked with</div>
				</div>
				
				<div class="stat place-items-center">
					<div class="stat-title">Position</div>
					<div class="stat-value text-secondary">Senior</div>
					<div class="stat-desc">Current level</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Timeline Experience Section -->
<Section title="Career Timeline" id="timeline">
	<div class="relative border-l-2 border-primary pl-8 ml-4">
		{#each experiences as experience, index}
			<div class="mb-12 relative">
				<div class="absolute -left-12 p-2 rounded-full bg-primary text-white w-8 h-8 flex items-center justify-center">
					<Briefcase size={16} />
				</div>
				
				<ExperienceCard 
					title={experience.title}
					company={experience.company}
					period={experience.period}
					location={experience.location}
					description={experience.description}
					achievement={experience.achievement}
				/>
			</div>
		{/each}
	</div>
</Section>

<!-- Specialized Experience -->
<Section title="Specialized Experience" subtitle="Areas of expertise developed throughout my career" id="specialized">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<h3 class="text-xl font-semibold mb-3 text-primary">Test Automation Framework Development</h3>
				<p class="mb-4">
					I specialize in creating robust, maintainable test automation frameworks using Playwright, Cypress, and other tools. 
					My focus is on establishing best practices for organization, error handling, and ensuring maximum reliability in diverse testing environments.
				</p>
				<ul class="list-disc list-inside space-y-1">
					<li>Playwright implementation with TypeScript</li>
					<li>Cypress optimization for reliability</li>
					<li>Custom reporting dashboards</li>
					<li>CI/CD pipeline integration</li>
				</ul>
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<h3 class="text-xl font-semibold mb-3 text-primary">AI-Assisted Testing</h3>
				<p class="mb-4">
					I've pioneered the integration of AI solutions into testing workflows, revolutionizing traditional approaches to test automation. 
					This includes implementation of AI for test case generation, script creation, and intelligent test result analysis.
				</p>
				<ul class="list-disc list-inside space-y-1">
					<li>AI-based test case generation</li>
					<li>Automated script creation</li>
					<li>Smart test prioritization</li>
					<li>Enhanced coverage through AI insights</li>
				</ul>
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<h3 class="text-xl font-semibold mb-3 text-primary">Test Case Management Systems</h3>
				<p class="mb-4">
					I've designed and implemented multiple test case management systems, focusing on efficiency, clear documentation, and 
					cost-effectiveness. These systems have streamlined testing processes and improved team collaboration.
				</p>
				<ul class="list-disc list-inside space-y-1">
					<li>Standardized test case templates</li>
					<li>Gherkin format implementation</li>
					<li>API integrations with external systems</li>
					<li>Cost-effective custom solutions</li>
				</ul>
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<h3 class="text-xl font-semibold mb-3 text-primary">QA Leadership & Mentorship</h3>
				<p class="mb-4">
					I have significant experience leading QA teams, aligning testing processes with organizational objectives, 
					and mentoring team members. My leadership approach focuses on effective resource allocation, knowledge sharing, and continuous improvement.
				</p>
				<ul class="list-disc list-inside space-y-1">
					<li>Cross-functional team collaboration</li>
					<li>QA process design & implementation</li>
					<li>Technical mentorship</li>
					<li>Resource allocation optimization</li>
				</ul>
			</div>
		</div>
	</div>
</Section>

<!-- Key Achievements Section -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<h2 class="section-title text-center mb-10">Key Professional Achievements</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each experiences as experience}
				<div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
					<div class="card-body">
						<h3 class="card-title text-primary">{experience.company}</h3>
						<p class="font-medium">{experience.title}</p>
						<div class="divider my-2"></div>
						<p>{experience.achievement}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
