<script>
  const partners = [
    "ESTG/TSS", "Google", "Amazon", "Stripe", "Shopify", "Slack"
  ];
</script>

<!-- Partners Section -->
<section class="py-24 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <!-- Title -->
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-14">
      Trusted by Industry Leaders
    </h2>

    <!-- Logo Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
      {#each partners as partner}
        <div class="text-lg font-medium text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transform hover:scale-105 transition-all duration-300">
          {partner}
        </div>
      {/each}
    </div>

    <!-- Optional: CTA -->
    <div class="mt-12 text-center">
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Want to join these leaders? <a href="/apply" class="text-green-500 hover:underline font-medium">Become a partner →</a>
      </p>
    </div>
  </div>
</section>
