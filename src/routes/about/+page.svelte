<script lang="ts">
	import { aboutMe, education, contactInfo } from "$lib/stores/portfolio-data";
	import Section from "$components/shared/Section.svelte";
	import ButtonLink from "$components/shared/ButtonLink.svelte";
	import { Briefcase, GraduationCap, Mail, MapPin, Linkedin } from "lucide-svelte";
</script>

<svelte:head>
	<title>About Me | Khalid Abdul Jabbar</title>
	<meta name="description" content="Learn more about Khalid Abdul Jabbar, a Senior QA Engineer and Test Architect passionate about improving traditional work processes with AI and innovative testing technologies." />
</svelte:head>

<!-- About Hero Section -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div>
				<h1 class="text-3xl md:text-4xl font-bold mb-6 text-secondary">About Me</h1>
				<div class="space-y-4">
					<p class="text-lg">{aboutMe}</p>
				</div>
			</div>
			<div class="flex justify-center">
				<div class="card bg-base-100 shadow-xl max-w-md">
					<div class="card-body">
						<h2 class="card-title text-primary">Khalid Abdul Jabbar</h2>
						<p class="text-lg">Senior QA Engineer | Test Architect | Lead QA Engineer</p>
						
						<div class="divider"></div>
						
						<div class="space-y-2">
							<div class="flex items-center gap-2">
								<MapPin size={18} />
								<span>{contactInfo.location}</span>
							</div>
							<div class="flex items-center gap-2">
								<Mail size={18} />
								<a href={`mailto:${contactInfo.email}`} class="link link-hover">{contactInfo.email}</a>
							</div>
							<div class="flex items-center gap-2">
								<Linkedin size={18} />
								<a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" class="link link-hover">{contactInfo.linkedin}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Professional Philosophy -->
<Section title="Professional Philosophy" id="philosophy">
	<div class="prose prose-lg max-w-none">
		<p>
			My approach to quality assurance is grounded in the belief that testing should be both rigorous and efficient. 
			I specialize in implementing AI-assisted testing strategies that enhance traditional methods without sacrificing quality.
		</p>
		
		<h3>Key Principles:</h3>
		<ul>
			<li>
				<strong>Innovation with Purpose</strong> - I believe in adopting new technologies that solve real problems, 
				not just for the sake of novelty.
			</li>
			<li>
				<strong>Knowledge Sharing</strong> - As a mentor, I'm committed to helping others develop their technical skills 
				and grow professionally.
			</li>
			<li>
				<strong>Collaborative Leadership</strong> - I excel at guiding teams toward shared goals while fostering a 
				culture of collaboration and continuous improvement.
			</li>
			<li>
				<strong>Forward-Looking Solutions</strong> - By integrating advanced automation and AI systems with existing frameworks, 
				I create solutions that balance cutting-edge technology with reliable results.
			</li>
		</ul>
		
		<p>
			This philosophy has guided my career from Quality Assurance Engineer to Senior QA Engineer and Test Architect, allowing 
			me to deliver value to organizations through improved testing processes, enhanced quality, and faster delivery times.
		</p>
	</div>
</Section>

<!-- Education Section -->
<Section title="Education" id="education">
	<div class="card card-shadow bg-base-100 shadow-lg">
		<div class="card-body">
			<div class="flex items-start gap-4">
				<div class="p-3 rounded-full bg-primary/10 text-primary hidden sm:block">
					<GraduationCap size={28} />
				</div>
				<div>
					<h3 class="text-xl font-bold text-primary">{education.university}</h3>
					<p class="text-lg">{education.degree}</p>
					<div class="flex flex-col sm:flex-row sm:gap-4 mt-2">
						<span>{education.graduationDate}</span>
						<span class="hidden sm:block">•</span>
						<span>{education.location}</span>
						<span class="hidden sm:block">•</span>
						<span>GPA: {education.gpa}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- Career Journey & Path -->
<Section title="Career Journey" subtitle="My path in the world of quality assurance" id="journey">
	<div class="prose prose-lg max-w-none">
		<p>
			My career in quality assurance began at Investree as a Quality Assurance Engineer, where I built a strong foundation in manual 
			and automated testing methodologies. This role allowed me to gain expertise in cross-platform quality assurance and develop 
			a comprehensive understanding of testing principles.
		</p>
		
		<p>
			As I progressed to Associate Test Architect, I focused on designing testing architectures for complex systems, 
			establishing performance testing baselines, and creating innovative, cost-effective test management solutions. This role allowed me to 
			demonstrate my technical creativity and problem-solving abilities.
		</p>
		
		<p>
			In my role as Lead QA Engineer, I developed my leadership skills through effective team management and strategic quality initiatives. 
			I overssaw QA processes across multiple product teams, led engineers through resource allocation and mentorship, and contributed to 
			continuous improvement initiatives.
		</p>
		
		<p>
			At Qwiik as a Senior Test Engineer, I established a BDD testing framework that improved team collaboration and defect detection rates, 
			developed test case management systems, and implemented automated testing with Playwright and TypeScript.
		</p>
		
		<p>
			Currently, as a Senior QA Engineer at LittleLives, I've revolutionized the testing approach by introducing AI-assisted test automation, 
			significantly reducing development time while improving coverage. I continue to push the boundaries of what's possible in quality assurance 
			through innovative tools and methodologies.
		</p>
	</div>
	
	<div class="mt-8">
		<ButtonLink href="/experience" text="View Detailed Experience" variant="primary" />
	</div>
</Section>
