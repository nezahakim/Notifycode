<script>
    const bots = [
      {
        slug: 'nezaai',
        name: 'NezaAI',
        description: 'Riddle, reminders & tasks — fully automated.',
        image: '/images/bots/nezaai.jpg'
      },
      {
        slug: 'notifycast',
        name: 'Notifycast+',
        description: 'News, articles updates around the world — fully automated.',
        image: '/images/bots/notifycast.jpg'
      },
    ];
  </script>
  
  <section class="py-24 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Choose Your Telegram Bot</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
          Discover powerful bots designed to automate, engage, and grow your digital business.
        </p>
      </div>
  
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {#each bots as bot}
          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300">
            <img src={bot.image} alt={bot.name} class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{bot.name}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{bot.description}</p>
              <a href={`https://t.me/${bot.slug}`} target="_blank" class="inline-block text-green-600 hover:text-green-700 font-semibold">
                View Details →
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  