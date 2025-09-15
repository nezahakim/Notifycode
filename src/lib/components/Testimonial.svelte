<script>
	import { onMount } from "svelte";
	let currentTestimonial = $state(0);

	const testimonials = [
		{
			text: "Notifycode transformed our notification system completely. Our user engagement increased by 300%.",
			author: "Sarah Chen",
			role: "CTO, TechFlow"
		},
		{
			text: "The most intuitive and powerful notification platform we've ever used. Absolutely game-changing.",
			author: "Marcus Rodriguez",
			role: "Head of Product, DataSync"
		},
		{
			text: "Implementation was seamless and the results were immediate. Our customers love the experience.",
			author: "Emily Watson",
			role: "CEO, CloudVision"
		}
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		}, 6000); // Slower for better readability
		return () => clearInterval(interval);
	});
</script>

<!-- Testimonials Section -->
<section class="py-24 bg-white dark:bg-gray-900">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

		<h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
			What Our Clients Say
		</h2>

		<div class="relative h-56 sm:h-64">
			{#each testimonials as testimonial, i}
				<div class="absolute inset-0 transition-all duration-700 ease-in-out 
          {i === currentTestimonial 
            ? 'opacity-100 transform translate-y-0 scale-100 z-10' 
            : 'opacity-0 transform translate-y-4 scale-95 z-0'}">
					
					<div class="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-100 dark:border-gray-700 transition-all">
						<blockquote class="text-xl sm:text-2xl font-light italic text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
							“{testimonial.text}”
						</blockquote>
						<div class="flex items-center justify-center gap-4">
							<div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
								{testimonial.author.charAt(0)}
							</div>
							<div class="text-left">
								<div class="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
								<div class="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Dot Navigation -->
		<div class="flex justify-center gap-2 mt-10">
			{#each testimonials as _, i}
				<button
					aria-label="Testimonial Switch"
					onclick={() => currentTestimonial = i}
					class="w-3.5 h-3.5 rounded-full border border-gray-400 dark:border-gray-600 transition-all duration-300
            {i === currentTestimonial ? 'bg-green-500 scale-110' : 'bg-gray-300 dark:bg-gray-700'}"
				></button>
			{/each}
		</div>

	</div>
</section>
