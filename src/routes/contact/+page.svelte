<script lang="ts">
    let name = "";
    let email = "";
    let message = "";
    let submitted = false;
  
    function handleSubmit(e: any) {
      e.preventDefault();
      // TODO: Replace with real API call (EmailJS, Formspree, Node API)
    //   console.log({ name, email, message });
      submitted = true;
    }

    if(submitted){
        name = ''
        message = ''
        email = ''
    }
  </script>
  
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
          Reach out for partnerships, support, or custom project requests — we're here to help you grow.
        </p>
      </div>
  
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Contact Form -->
        <form on:submit={handleSubmit} class="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" bind:value={name} required class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" bind:value={email} required class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea bind:value={message} rows="5" required class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <button type="submit" class="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-all">
              Send Message
            </button>
            {#if submitted}
              <p class="text-green-500 font-medium text-center mt-4">Thanks! We'll get back to you soon.</p>
            {/if}
          </div>
        </form>
  
        <!-- Contact Info -->
        <div class="space-y-6 text-gray-600 dark:text-gray-300">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Business Email</h3>
            <p>support@notifycode.org</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Telegram Support</h3>
            <p><a href="https://t.me/NotifycodeSupportBot" class="text-green-500 hover:underline">Message Our Bot</a></p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Headquarters</h3>
            <p>Gisenyi, Rwanda<br />Notifycode HQ</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  