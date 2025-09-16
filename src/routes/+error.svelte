<script lang="ts">
    import { page } from '$app/state'

    const status =  page.status;
    const error = page.error;
  
    const defaultMessages = {
      400: "Bad Request. Check the URL or try again.",
      401: "You are not authorized to view this page.",
      403: "Access denied. You don’t have permission.",
      404: "Page not found. The URL may be incorrect or moved.",
      500: "Internal Server Error. Our team is on it.",
      503: "Service temporarily unavailable. Try again later."
    } as any;
  
    const title = status === 404 ? "Page Not Found" : "Oops, something went wrong";
    const message = error?.message || defaultMessages[status] || "An unexpected error occurred.";
  </script>
  
  <svelte:head>
    <title>{status} — {title}</title>
  </svelte:head>
  
  <div class="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center px-6 py-12">
    <div class="max-w-xl w-full text-center">
      <h1 class="text-7xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 drop-shadow-lg">
        {status}
      </h1>
      <h2 class="mt-4 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">
        {message}
      </p>
  
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a href="/" class="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          ← Go to Homepage
        </a>
        <button
          on:click={() => location.reload()}
          class="inline-block px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          Reload Page ↻
        </button>
      </div>
  
      <footer class="mt-10 text-sm text-gray-400 dark:text-gray-600">
        If the problem persists, please contact support.
      </footer>
    </div>
  </div>
  