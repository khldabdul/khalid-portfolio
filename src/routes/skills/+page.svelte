<script lang="ts">
	import { skills } from "$lib/stores/portfolio-data";
	import Section from "$components/shared/Section.svelte";
	import SkillsList from "$components/shared/SkillsList.svelte";
	import { Code, Database, Cpu, Globe, BarChart4, Server } from "lucide-svelte";
</script>

<svelte:head>
	<title>Skills & Expertise | Khalid Abdul Jabbar</title>
	<meta name="description" content="Explore Khalid Abdul Jabbar's technical skills, tools and technologies in testing, programming, and QA management." />
</svelte:head>

<!-- Skills Hero Section -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<div class="text-center max-w-3xl mx-auto">
			<h1 class="text-3xl md:text-4xl font-bold mb-4 text-secondary">Skills & Expertise</h1>
			<p class="text-lg mb-6">
				My diverse technical skill set enables me to implement innovative solutions across various testing environments and platforms.
			</p>
		</div>
	</div>
</section>

<!-- Technical Skills Section -->
<Section title="Technical Skills" id="technical">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-4">
					<div class="p-2 rounded-full bg-primary/10 text-primary">
						<Code size={24} />
					</div>
					<h3 class="text-xl font-semibold">Programming Languages</h3>
				</div>
				<SkillsList skills={skills.technical} columns={2} />
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-4">
					<div class="p-2 rounded-full bg-accent/10 text-accent">
						<Cpu size={24} />
					</div>
					<h3 class="text-xl font-semibold">Testing Tools</h3>
				</div>
				<SkillsList skills={skills.testing} columns={2} />
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-4">
					<div class="p-2 rounded-full bg-secondary/10 text-secondary">
						<BarChart4 size={24} />
					</div>
					<h3 class="text-xl font-semibold">TCMS & Reporting Tools</h3>
				</div>
				<SkillsList skills={skills.tcms} columns={2} />
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-4">
					<div class="p-2 rounded-full bg-primary/10 text-primary">
						<Server size={24} />
					</div>
					<h3 class="text-xl font-semibold">Project Management</h3>
				</div>
				<SkillsList skills={skills.projectManagement} columns={2} />
			</div>
		</div>
	</div>
</Section>

<!-- Language Skills -->
<Section title="Language Skills" id="languages">
	<div class="card card-shadow bg-base-100">
		<div class="card-body">
			<div class="flex items-center gap-3 mb-4">
				<div class="p-2 rounded-full bg-primary/10 text-primary">
					<Globe size={24} />
				</div>
				<h3 class="text-xl font-semibold">Languages</h3>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each skills.languages as language}
					<div class="flex flex-col p-4 border rounded-lg">
						<p class="font-medium">{language}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>

<!-- Core Competencies -->
<Section title="Core Competencies" subtitle="Beyond technical skills" id="competencies">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="card bg-base-100 card-shadow">
			<div class="card-body">
				<h3 class="card-title text-primary">Test Architecture</h3>
				<div class="divider my-2"></div>
				<ul class="space-y-2">
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Designing scalable testing architectures</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Test strategy development</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Performance testing baselines</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Testing frameworks selection</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="card bg-base-100 card-shadow">
			<div class="card-body">
				<h3 class="card-title text-primary">Quality Leadership</h3>
				<div class="divider my-2"></div>
				<ul class="space-y-2">
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Team mentorship and development</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Resource allocation optimization</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Cross-functional collaboration</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Quality metrics definition</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="card bg-base-100 card-shadow">
			<div class="card-body">
				<h3 class="card-title text-primary">Process Innovation</h3>
				<div class="divider my-2"></div>
				<ul class="space-y-2">
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>AI integration in testing</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Cost-effective solution design</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Process optimization</span>
					</li>
					<li class="flex items-start gap-2">
						<div class="badge badge-primary mt-1">•</div>
						<span>Continuous improvement initiatives</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</Section>

<!-- Methodology Expertise -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<h2 class="section-title text-center">Testing Methodologies</h2>
		<p class="text-lg text-center mb-10 max-w-3xl mx-auto">
			My approach incorporates various established testing methodologies, tailored to each project's specific needs.
		</p>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="card bg-base-100 card-shadow">
				<div class="card-body text-center">
					<h3 class="text-xl font-semibold text-primary mb-3">BDD Testing</h3>
					<p>Behavior-Driven Development approach with Gherkin specifications, focusing on collaboration between technical and non-technical stakeholders.</p>
				</div>
			</div>
			
			<div class="card bg-base-100 card-shadow">
				<div class="card-body text-center">
					<h3 class="text-xl font-semibold text-primary mb-3">TDD Approach</h3>
					<p>Test-Driven Development methodology, writing tests before code implementation to ensure requirements are met from the start.</p>
				</div>
			</div>
			
			<div class="card bg-base-100 card-shadow">
				<div class="card-body text-center">
					<h3 class="text-xl font-semibold text-primary mb-3">Performance Testing</h3>
					<p>Specialized in k6 performance testing with baseline establishment and optimization for critical system components.</p>
				</div>
			</div>
			
			<div class="card bg-base-100 card-shadow">
				<div class="card-body text-center">
					<h3 class="text-xl font-semibold text-primary mb-3">AI-Assisted Testing</h3>
					<p>Innovative approach leveraging AI for test case generation, script creation, and improved testing efficiency.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Certifications & Continuous Learning -->
<Section title="Continuous Professional Development" id="development">
	<div class="prose prose-lg max-w-none">
		<p>
			I'm committed to continuous learning and staying current with the latest advancements in quality assurance, testing methodologies, 
			and AI technologies. This commitment ensures I can provide innovative, effective solutions to complex testing challenges.
		</p>
		
		<p>
			My ongoing professional development focuses on:
		</p>
		
		<ul>
			<li>Expanding expertise in AI-assisted testing methodologies</li>
			<li>Deepening knowledge of advanced testing architectures</li>
			<li>Enhancing leadership and mentorship capabilities</li>
			<li>Exploring cutting-edge tools and frameworks in the QA ecosystem</li>
		</ul>
		
		<p>
			This dedication to continuous learning allows me to bring fresh perspectives and innovative approaches to every project, 
			driving improvements in testing processes and quality outcomes.
		</p>
	</div>
</Section>
