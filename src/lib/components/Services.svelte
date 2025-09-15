<script>
  const services = [
    {
      icon: "🤖",
      title: "Telegram Bot Development",
      description: "Advanced bots with AI integration, payment processing, and seamless user experiences."
    },
    {
      icon: "🧠",
      title: "AI Model Training",
      description: "Custom machine learning models trained specifically for your business needs and data."
    },
    {
      icon: "📈",
      title: "Social Media Growth",
      description: "Automated strategies and tools to grow your social media presence organically."
    },
    {
      icon: "🎯",
      title: "Entertainment Platforms",
      description: "Interactive digital experiences that keep your audience engaged and coming back."
    }
  ];
</script>

<!-- Services Section -->
<section id="services" class="py-24 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Section Heading -->
    <div class="text-center mb-20">
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Our <span class="text-green-500">Services</span>
      </h2>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Comprehensive digital solutions tailored to your needs and growth objectives.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {#each services as service}
        <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <div class="text-5xl mb-6 text-green-500 transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {service.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>
          <div class="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500 transition duration-300 pointer-events-none"></div>
        </div>
      {/each}
    </div>
  </div>
</section>
