<script>
    const products = [
      {
        id: "bots",
        name: "Telegram Bots",
        headline: "AI-powered Telegram bots that automate, engage, and grow your audience.",
        features: ["Seamless UX", "Payment Ready", "Built-in NLP"],
        image: "/logo.jpg",
        link: "/products/bots",
        bg: "bg-gradient-to-br from-green-100 to-green-300 dark:from-green-900 dark:to-green-700"
      },
      // {
      //   id: "ai",
      //   name: "AI Model Training",
      //   headline: "Custom-trained models that understand your users and data like never before.",
      //   features: ["Language Models", "Classifier AI", "Chat Integrations"],
      //   image: "/logo.jpg",
      //   link: "/services/ai",
      //   bg: "bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700"
      // },
      // {
      //   id: "automation",
      //   name: "Social Media Automation",
      //   headline: "Grow your presence with hands-free publishing and optimization.",
      //   features: ["Auto-Post", "Growth Tools", "Hashtag AI"],
      //   image: "/hero.jpg",
      //   link: "/services/automation",
      //   bg: "bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-900 dark:to-purple-700"
      // },
      // {
      //   id: "entertainment",
      //   name: "Entertainment Tools",
      //   headline: "Engage users with games, quizzes, and viral digital experiences.",
      //   features: ["Mini-Games", "User Analytics", "Social Sharing"],
      //   image: "/favicon.png",
      //   link: "/services/entertainment",
      //   bg: "bg-gradient-to-br from-pink-100 to-pink-300 dark:from-pink-900 dark:to-pink-700"
      // }
    ];
  </script>
  
  <section id="products" class="scroll-smooth">
    {#each products as product}
      <section class={`min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 ${product.bg}`}>
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
            {product.name}
          </h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {product.headline}
          </p>
          <ul class="text-gray-600 dark:text-gray-400 mb-6 space-y-1">
            {#each product.features as feature}
              <li>✔️ {feature}</li>
            {/each}
          </ul>
          <a href={product.link} class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
            Learn More
          </a>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src={product.image} alt={product.name} class="max-w-[450px] w-full h-auto drop-shadow-xl" />
        </div>
      </section>
    {/each}
  </section>

  <style>
    section {
      scroll-snap-align: start;
    }
  </style>

  