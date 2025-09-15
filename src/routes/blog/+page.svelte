<script>
    const posts = [
      {
        title: "How AI is Changing the Future of Bots",
        summary: "Explore how AI-driven bots are transforming business communication and automation.",
        date: "August 10, 2025",
        tag: "AI",
        image: "/images/blog/ai-bots.jpg",
        slug: "ai-changing-bots"
      },
      {
        title: "Notifycode: Building a Smarter Notification Stack",
        summary: "A look into the technology behind Notifycode and how we ensure reliability and speed.",
        date: "August 3, 2025",
        tag: "Technology",
        image: "/images/blog/notifycode-stack.jpg",
        slug: "notifycode-stack"
      },
      {
        title: "Why Automation is the Future of Social Media Growth",
        summary: "Learn why automation tools are essential for scaling your brand and engagement.",
        date: "July 28, 2025",
        tag: "Automation",
        image: "/images/blog/social-automation.jpg",
        slug: "automation-social-growth"
      }
    ];
  </script>
  
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Insights & Updates</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover trends, product updates, and our perspective on AI, automation, and digital tech.
        </p>
      </div>
  
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {#each posts as post}
          <a href={`/blog/${post.slug}`} class="group block hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800">
            <img src={post.image} alt={post.title} class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="p-6">
              <div class="text-sm text-green-500 font-semibold uppercase mb-2">{post.tag}</div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
                {post.title}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mt-2">{post.summary}</p>
              <p class="text-sm text-gray-400 dark:text-gray-500 mt-4">{post.date}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
  