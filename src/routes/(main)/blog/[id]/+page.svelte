<script>
    export let post = {
      title: "How AI is Changing the Future of Bots",
      date: "August 10, 2025",
      tag: "AI",
      image: "/images/bots/nezaai.jpg"
    };
  </script>
  
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <img src={post.image} alt={post.title} class="rounded-xl mb-10 shadow-md" />
      <div class="mb-6">
        <span class="text-green-500 font-medium uppercase text-sm">{post.tag}</span>
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">{post.title}</h1>
        <p class="text-sm text-gray-400 mt-1">{post.date}</p>
      </div>
      <div class="prose dark:prose-invert max-w-none" >

        <p>Artificial intelligence has unlocked a new wave of automation...</p>
        <h2>Smarter Interactions</h2>
        <p>Unlike traditional bots, AI-powered bots adapt...</p>

      </div>
    </div>
  </section>
  