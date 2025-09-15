<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import {
		ChevronRight,
		Users,
		Target,
		Lightbulb,
		Award,
		Globe,
		Heart,
		Zap,
		ArrowRight,

		CheckCircle

	} from '@lucide/svelte';

	let isVisible = false;
	let statsVisible = false;
	let teamVisible = false;
    let scrollY = 0;


	onMount(() => {
		isVisible = true;

		// Stagger animations
		setTimeout(() => (statsVisible = true), 300);
		setTimeout(() => (teamVisible = true), 600);
	});

	const stats = [
		{ number: '1000+', label: 'Projects Delivered', icon: Award },
		{ number: '50+', label: 'Happy Clients', icon: Users },
		{ number: '24/7', label: 'Support Available', icon: Heart },
		{ number: '5+', label: 'Years Experience', icon: Globe }
	];

	const values = [
		{
			icon: Lightbulb,
			title: 'Innovation',
			description:
				'We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.'
		},
		{
			icon: Users,
			title: 'Collaboration',
			description:
				'We believe in the power of teamwork and building strong partnerships with our clients.'
		},
		{
			icon: Target,
			title: 'Excellence',
			description:
				'We are committed to delivering high-quality work that exceeds expectations every time.'
		},
		{
			icon: Zap,
			title: 'Efficiency',
			description:
				'We optimize processes and leverage automation to deliver results faster and more effectively.'
		}
	];

	const team = [
		{
			name: 'Neza Hakim',
			role: 'Founder & AI Engineer',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
			bio: 'Visionary leader with 10+ years in tech innovation and business development.'
		},
		{
			name: 'Ngabo Daniel',
			role: 'Lead Developer',
			image:
				'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
			bio: 'Full-stack developer specializing in modern web technologies and AI integration.'
		},
		{
			name: 'Marcus Rodriguez',
			role: 'Design Director',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
			bio: 'Creative designer focused on user experience and innovative digital solutions.'
		},
		{
			name: 'Emma Thompson',
			role: 'Operations Manager',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
			bio: 'Operations expert ensuring smooth project delivery and client satisfaction.'
		}
	];

	const milestones = [
		{
			year: '2024',
			title: 'Company Founded',
			description: 'Started with a vision to revolutionize digital solutions'
		},
		{
			year: '2024',
			title: 'First Product Launch',
			description: 'NezaAI - the Telegram AI bot with amazing commands.'
		},
		{
			year: '2025',
			title: 'First Major Client',
			description: 'Secured our first enterprise partnership'
		},
		{
			year: '2025',
			title: 'Team Expansion',
			description: 'Grew to a team of 10+ talented professionals'
		},
		{
			year: '2024',
			title: 'AI Integration',
			description: 'Pioneered AI-powered solutions for clients'
		}
	];

	let heroRef: HTMLElement;
</script>

<main id="about" class="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
	<!-- Hero Section -->
	<section
		id="about-hero"
		bind:this={heroRef}
		class="relative flex min-h-screen items-center justify-center overflow-hidden"
	>
		<!-- Animated Background -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20"
		>
			<div class="bg-grid-pattern absolute inset-0 opacity-5"></div>
			<div
				class="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-green-400/20 blur-3xl"
				style="transform: translateY({scrollY * 0.3}px)"
			></div>
			<div
				class="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-blue-400/20 blur-3xl"
				style="transform: translateY({scrollY * -0.2}px)"
			></div>
		</div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 800, delay: 200 }}>
					<h1
						class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl lg:text-7xl dark:text-white"
					>
						About <span
							class="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
							>Notifycode</span
						>
					</h1>
					<p
						class="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl dark:text-gray-300"
					>
						We're a passionate team of innovators, creators, and problem-solvers dedicated to
						transforming ideas into exceptional digital experiences.
					</p>
					<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<button
							class="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
						>
							<span>Our Story</span>
							<ArrowRight
								class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
							/>
						</button>
						<button
							class="rounded-full border-2 border-green-500 px-8 py-4 text-lg font-semibold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white"
						>
							Meet the Team
						</button>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Stats Section -->
	{#if statsVisible}
		<section
			class="border-y border-gray-200 bg-white py-16 dark:border-gray-700 dark:bg-gray-800"
			in:fade={{ duration: 600, delay: 300 }}
		>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
					{#each stats as stat, i}
						<div class="group text-center" in:fly={{ y: 20, duration: 500, delay: i * 100 }}>
							<div
								class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-200 transition-transform duration-300 group-hover:scale-110 dark:from-green-900/30 dark:to-green-800/30"
							>
								<svelte:component
									this={stat.icon}
									class="h-8 w-8 text-green-600 dark:text-green-400"
								/>
							</div>
							<div class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
								{stat.number}
							</div>
							<div class="font-medium text-gray-600 dark:text-gray-300">
								{stat.label}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Our Story Section -->
	  <!-- Mission & Vision -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div in:fly="{{ x: -50, duration: 800 }}">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Notifycode, we believe technology should empower, not complicate. Our mission is to bridge the gap between complex technical solutions and real-world business needs, creating digital experiences that are both powerful and intuitive.
              </p>
              <div class="space-y-4">
                {#each ['Custom AI Solutions', 'Telegram Bot Development', 'Web & Mobile Apps', 'Social Media Integration'] as feature}
                  <div class="flex items-center space-x-3">
                    <CheckCircle class="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span class="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                {/each}
              </div>
            </div>
            
            <div class="relative" in:fly="{{ x: 50, duration: 800, delay: 200 }}">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  class="w-full h-80 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
	<!-- Values Section -->
	<section class="bg-white py-20 dark:bg-gray-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
					Our Values
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
					The principles that guide everything we do and shape our approach to client relationships
					and project delivery.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each values as value, i}
					<div
						class="group rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-700"
						in:fly={{ y: 30, duration: 500, delay: i * 150 }}
					>
						<div
							class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-200 transition-transform duration-300 group-hover:scale-110 dark:from-green-900/30 dark:to-green-800/30"
						>
							<svelte:component
								this={value.icon}
								class="h-8 w-8 text-green-600 dark:text-green-400"
							/>
						</div>
						<h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
							{value.title}
						</h3>
						<p class="leading-relaxed text-gray-600 dark:text-gray-300">
							{value.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Timeline Section -->
	<section class="bg-gray-50 py-20 dark:bg-gray-900">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
					Our Journey
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
					Key milestones in our growth and evolution as a technology company.
				</p>
			</div>

			<div class="relative">
				<!-- Timeline line -->
				<div
					class="absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full bg-gradient-to-b from-green-400 to-blue-500"
				></div>

				<div class="space-y-12">
					{#each milestones as milestone, i}
						<div
							class="relative flex items-center {i % 2 === 0 ? 'justify-start' : 'justify-end'}"
							in:fly={{ x: i % 2 === 0 ? -30 : 30, duration: 600, delay: i * 100 }}
						>
							<!-- Timeline dot -->
							<div
								class="absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-green-500 shadow-lg dark:border-gray-900"
							></div>

							<!-- Content -->
							<div class="w-5/12 {i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}">
								<div
									class="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
								>
									<div class="mb-2 text-2xl font-bold text-green-600 dark:text-green-400">
										{milestone.year}
									</div>
									<h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
										{milestone.title}
									</h3>
									<p class="text-gray-600 dark:text-gray-300">
										{milestone.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	{#if teamVisible}
		<section class="bg-white py-20 dark:bg-gray-800" in:fade={{ duration: 600, delay: 600 }}>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
						Meet Our Team
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
						The talented individuals behind Notifycode's success, each bringing unique expertise and
						passion to every project.
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{#each team as member, i}
						<div class="group text-center" in:fly={{ y: 30, duration: 500, delay: i * 150 }}>
							<div class="relative mb-6">
								<div
									class="mx-auto h-48 w-48 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
								>
									<img
										src={member.image}
										alt={member.name}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								<div
									class="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
							</div>

							<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
								{member.name}
							</h3>
							<div class="mb-3 font-semibold text-green-600 dark:text-green-400">
								{member.role}
							</div>
							<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
								{member.bio}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-blue-600 py-20"
	>
		<div class="absolute inset-0 bg-black/10"></div>
		<div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<div in:fly={{ y: 30, duration: 600, delay: 200 }}>
				<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">Ready to Start Your Project?</h2>
				<p class="mx-auto mb-8 max-w-3xl text-xl text-white/90">
					Let's work together to bring your vision to life with innovative solutions tailored to
					your needs.
				</p>

				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<button
						class="group flex items-center space-x-2 rounded-full bg-white px-8 py-4 font-semibold text-green-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					>
						<span>Start a Project</span>
						<ChevronRight
							class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
						/>
					</button>

					<button
						class="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
					>
						Learn More
					</button>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.bg-grid-pattern {
		background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
