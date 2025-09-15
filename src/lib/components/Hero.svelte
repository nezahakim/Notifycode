<script>
  // No changes needed here assuming scrollToSection is a robust function passed down.
  // It's clean and uses modern Svelte 5 runes.
  let { scrollToSection } = $props();
</script>

<section
  id="hero"
  aria-labelledby="hero-title"
  class="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden"
>
  <div class="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
    <div
      class="absolute top-1/3 left-1/4 w-80 h-80 bg-green-400 rounded-full filter blur-3xl opacity-20 mix-blend-multiply motion-safe:animate-pulse"
    ></div>
    <div
      class="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply motion-safe:animate-pulse"
      style="animation-delay: 1000ms;"
    ></div>
    <div
      class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-lime-400 rounded-full filter blur-3xl opacity-20 mix-blend-multiply motion-safe:animate-pulse"
      style="animation-delay: 2000ms;"
    ></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <header>
      <h1
        id="hero-title"
        class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
      >
        <span class="block text-lg font-medium text-lime-800 dark:text-lime-300 mb-2">
          Celebrating 1 Year of Innovation!
        </span>
        <span class="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
          Building the Intelligent Future
        </span>
      </h1>

      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        Empowering businesses with cutting-edge Telegram bots, AI solutions, automation tools, and beautiful websites that redefine user experience.
      </p>
    </header>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="#learn-more"
        class="inline-block bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-3 text-base rounded-full font-semibold shadow-md hover:shadow-lg transform motion-safe:hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-lime-800"
      >
        Learn More
      </a>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 motion-safe:animate-bounce z-10">
    <button
      type="button"
      aria-label="Scroll to About Section"
      on:click={() => scrollToSection('about')}
      class="text-gray-400 hover:text-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-1"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </button>
  </div>
</section>