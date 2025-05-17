<script lang="ts">
	import { contactInfo } from "$lib/stores/portfolio-data";
	import Section from "$components/shared/Section.svelte";
	import { Mail, Phone, MapPin, Linkedin, Send, AlertCircle } from "lucide-svelte";
	import { onMount } from "svelte";
	
	// Form validation
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let formSubmitted = false;
	let submitting = false;
	let submitSuccess = false;
	let submitError = '';
	
	// Validation state
	let touched = {
		name: false,
		email: false,
		subject: false,
		message: false
	};
	
	// Validate form
	$: nameError = touched.name && !name.trim() ? 'Name is required' : '';
	$: emailError = touched.email && !email.trim() ? 'Email is required' : 
					 touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Please enter a valid email' : '';
	$: subjectError = touched.subject && !subject.trim() ? 'Subject is required' : '';
	$: messageError = touched.message && !message.trim() ? 'Message is required' : '';
	
	$: formValid = !!name.trim() && 
				   !!email.trim() && 
				   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 
				   !!subject.trim() && 
				   !!message.trim();
	
	// Handle field blur
	function handleBlur(field: keyof typeof touched) {
		touched[field] = true;
	}
	
	// Handle form submission
	async function handleSubmit(e: Event) {
		e.preventDefault();
		
		// Mark all fields as touched for validation
		Object.keys(touched).forEach(key => {
			touched[key as keyof typeof touched] = true;
		});
		
		if (!formValid) return;
		
		submitting = true;
		submitError = '';
		
		try {
			// In a real implementation, you would send this data to a backend
			// For now, we'll simulate a successful submission
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			formSubmitted = true;
			submitSuccess = true;
			
			// Reset form
			name = '';
			email = '';
			subject = '';
			message = '';
			
			// Reset touched state
			Object.keys(touched).forEach(key => {
				touched[key as keyof typeof touched] = false;
			});
			
		} catch (error) {
			submitError = 'There was an error sending your message. Please try again.';
			submitSuccess = false;
		} finally {
			submitting = false;
		}
	}
	
	// Animation data attributes
	onMount(() => {
		if (typeof document !== 'undefined') {
			const contactInfoSection = document.querySelector('#info .card:first-child');
			const contactFormSection = document.querySelector('#info .card:last-child');
			const whyWorkWithMeCards = document.querySelectorAll('#why .card');
			
			if (contactInfoSection) contactInfoSection.setAttribute('data-aos', 'fade-right');
			if (contactFormSection) contactFormSection.setAttribute('data-aos', 'fade-left');
			
			whyWorkWithMeCards.forEach((card, index) => {
				card.setAttribute('data-aos', 'fade-up');
				card.setAttribute('data-aos-delay', (index * 100).toString());
			});
		}
	});
</script>

<svelte:head>
	<title>Contact | Khalid Abdul Jabbar</title>
	<meta name="description" content="Get in touch with Khalid Abdul Jabbar for collaborations, opportunities, or questions about QA engineering and test architecture." />
</svelte:head>

<!-- Contact Hero Section -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<div class="text-center max-w-3xl mx-auto">
			<h1 class="text-3xl md:text-4xl font-bold mb-4 text-secondary">Get In Touch</h1>
			<p class="text-lg mb-6">
				I'm open to discussing new opportunities, collaborations, or answering any questions you might have about quality assurance and test automation.
			</p>
		</div>
	</div>
</section>

<!-- Contact Information -->
<Section title="Contact Information" id="info">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<h3 class="card-title text-primary mb-4">Reach Out</h3>
				
				<div class="space-y-4">
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-full bg-primary/10 text-primary">
							<Mail size={20} />
						</div>
						<div>
							<h4 class="font-medium">Email</h4>
							<a href={`mailto:${contactInfo.email}`} class="link link-hover text-primary">{contactInfo.email}</a>
						</div>
					</div>
					
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-full bg-primary/10 text-primary">
							<Phone size={20} />
						</div>
						<div>
							<h4 class="font-medium">Phone</h4>
							<a href={`tel:${contactInfo.phone}`} class="link link-hover text-primary">{contactInfo.phone}</a>
						</div>
					</div>
					
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-full bg-primary/10 text-primary">
							<MapPin size={20} />
						</div>
						<div>
							<h4 class="font-medium">Location</h4>
							<p>{contactInfo.location}</p>
						</div>
					</div>
					
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-full bg-primary/10 text-primary">
							<Linkedin size={20} />
						</div>
						<div>
							<h4 class="font-medium">LinkedIn</h4>
							<a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" class="link link-hover text-primary">{contactInfo.linkedin}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-shadow bg-base-100">
			<div class="card-body">
				<h3 class="card-title text-primary mb-4">Send a Message</h3>
				
				{#if formSubmitted && submitSuccess}
					<div class="alert alert-success shadow-lg" role="alert">
						<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<div>
							<h3 class="font-bold">Thank you!</h3>
							<div class="text-sm">Your message has been sent successfully. I'll get back to you soon.</div>
						</div>
					</div>
					
					<button class="btn btn-primary mt-4" on:click={() => formSubmitted = false}>
						Send Another Message
					</button>
				{:else}
					<form class="space-y-4" on:submit={handleSubmit} novalidate>
						{#if submitError}
							<div class="alert alert-error" role="alert">
								<AlertCircle size={16} />
								<span>{submitError}</span>
							</div>
						{/if}
						
						<div class="form-control">
							<label class="label" for="name">
								<span class="label-text">Name</span>
							</label>
							<input 
								type="text" 
								id="name" 
								bind:value={name}
								on:blur={() => handleBlur('name')} 
								placeholder="Your Name" 
								class="input input-bordered w-full focus:input-primary {nameError ? 'input-error' : ''}" 
								aria-required="true"
								aria-invalid={!!nameError}
								aria-describedby={nameError ? 'name-error' : undefined}
								required 
							/>
							{#if nameError}
								<label class="label" id="name-error">
									<span class="label-text-alt text-error">{nameError}</span>
								</label>
							{/if}
						</div>
						
						<div class="form-control">
							<label class="label" for="email">
								<span class="label-text">Email</span>
							</label>
							<input 
								type="email" 
								id="email" 
								bind:value={email}
								on:blur={() => handleBlur('email')} 
								placeholder="Your Email" 
								class="input input-bordered w-full focus:input-primary {emailError ? 'input-error' : ''}" 
								aria-required="true"
								aria-invalid={!!emailError}
								aria-describedby={emailError ? 'email-error' : undefined}
								required 
							/>
							{#if emailError}
								<label class="label" id="email-error">
									<span class="label-text-alt text-error">{emailError}</span>
								</label>
							{/if}
						</div>
						
						<div class="form-control">
							<label class="label" for="subject">
								<span class="label-text">Subject</span>
							</label>
							<input 
								type="text" 
								id="subject" 
								bind:value={subject}
								on:blur={() => handleBlur('subject')} 
								placeholder="Subject" 
								class="input input-bordered w-full focus:input-primary {subjectError ? 'input-error' : ''}" 
								aria-required="true"
								aria-invalid={!!subjectError}
								aria-describedby={subjectError ? 'subject-error' : undefined}
								required 
							/>
							{#if subjectError}
								<label class="label" id="subject-error">
									<span class="label-text-alt text-error">{subjectError}</span>
								</label>
							{/if}
						</div>
						
						<div class="form-control">
							<label class="label" for="message">
								<span class="label-text">Message</span>
							</label>
							<textarea 
								id="message" 
								bind:value={message}
								on:blur={() => handleBlur('message')} 
								placeholder="Your Message" 
								class="textarea textarea-bordered h-32 focus:textarea-primary {messageError ? 'textarea-error' : ''}" 
								aria-required="true"
								aria-invalid={!!messageError}
								aria-describedby={messageError ? 'message-error' : undefined}
								required
							></textarea>
							{#if messageError}
								<label class="label" id="message-error">
									<span class="label-text-alt text-error">{messageError}</span>
								</label>
							{/if}
						</div>
						
						<button 
							type="submit" 
							class="btn btn-primary w-full {!formValid ? 'opacity-70' : ''}"
							disabled={submitting || !formValid}
						>
							{#if submitting}
								<span class="loading loading-spinner loading-sm"></span>
								Sending...
							{:else}
								<Send size={16} class="mr-2" />
								Send Message
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</Section>

<!-- Work With Me Section -->
<Section title="Why Work With Me" id="why">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="card bg-base-100 card-shadow hover:shadow-lg transition-all duration-300">
			<div class="card-body">
				<h3 class="card-title text-primary">Innovative Approach</h3>
				<p class="mt-2">
					I bring innovative solutions to testing challenges, particularly through the integration of AI-assisted 
					methodologies that significantly improve efficiency and coverage.
				</p>
			</div>
		</div>
		
		<div class="card bg-base-100 card-shadow hover:shadow-lg transition-all duration-300">
			<div class="card-body">
				<h3 class="card-title text-primary">Proven Track Record</h3>
				<p class="mt-2">
					My experience across multiple organizations demonstrates a consistent ability to revolutionize testing 
					approaches and create cost-effective, efficient solutions.
				</p>
			</div>
		</div>
		
		<div class="card bg-base-100 card-shadow hover:shadow-lg transition-all duration-300">
			<div class="card-body">
				<h3 class="card-title text-primary">Leadership & Mentorship</h3>
				<p class="mt-2">
					I excel at leading QA teams, sharing knowledge, and fostering environments where team members can develop 
					their skills and contribute to high-quality outcomes.
				</p>
			</div>
		</div>
	</div>
</Section>

<!-- FAQs -->
<section class="py-16 bg-primary/5">
	<div class="container-custom">
		<h2 class="section-title text-center mb-10">Frequently Asked Questions</h2>
		
		<div class="max-w-3xl mx-auto space-y-4">
			<div class="collapse collapse-arrow bg-base-100" data-aos="fade-up">
				<input type="radio" name="faq-accordion" checked /> 
				<div class="collapse-title text-xl font-medium">
					What testing services do you provide?
				</div>
				<div class="collapse-content">
					<p>I offer a comprehensive range of testing services, including test automation framework development, AI-assisted testing implementation, test architecture design, and QA leadership. My approach combines traditional methodologies with innovative techniques to ensure high-quality outcomes.</p>
				</div>
			</div>
			
			<div class="collapse collapse-arrow bg-base-100" data-aos="fade-up" data-aos-delay="100">
				<input type="radio" name="faq-accordion" /> 
				<div class="collapse-title text-xl font-medium">
					How do you integrate AI into testing processes?
				</div>
				<div class="collapse-content">
					<p>I integrate AI into testing processes through several approaches: using AI for test case generation based on requirements, implementing AI-assisted script creation for improved efficiency, leveraging intelligent test prioritization for focused testing efforts, and applying AI insights for enhanced coverage analysis.</p>
				</div>
			</div>
			
			<div class="collapse collapse-arrow bg-base-100" data-aos="fade-up" data-aos-delay="200">
				<input type="radio" name="faq-accordion" /> 
				<div class="collapse-title text-xl font-medium">
					What industries have you worked with?
				</div>
				<div class="collapse-content">
					<p>I've worked primarily in the financial technology (fintech) sector with Investree, educational technology with LittleLives, and software development services with Qwiik. This diverse experience allows me to apply best practices across different domains and adapt my approach to various industry requirements.</p>
				</div>
			</div>
			
			<div class="collapse collapse-arrow bg-base-100" data-aos="fade-up" data-aos-delay="300">
				<input type="radio" name="faq-accordion" /> 
				<div class="collapse-title text-xl font-medium">
					Are you available for remote work?
				</div>
				<div class="collapse-content">
					<p>Yes, I am available for remote work opportunities. I have experience working in distributed teams and can effectively collaborate using various communication and project management tools to ensure seamless integration with your team regardless of location.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="py-12 bg-primary text-white">
	<div class="container-custom text-center">
		<h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your QA Processes?</h2>
		<p class="text-lg mb-6 max-w-2xl mx-auto">
			Let's discuss how my expertise in test automation, AI-assisted testing, and quality leadership can help your organization deliver better software, faster.
		</p>
		<a href={`mailto:${contactInfo.email}`} class="btn btn-lg bg-white text-primary hover:bg-white/90">
			Get in Touch Today
		</a>
	</div>
</section>
