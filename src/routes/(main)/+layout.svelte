<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

    let scrollY = $state(0);
    let darkMode = $state(false);
</script>

<svelte:window bind:scrollY />
  
<div class="{darkMode ? 'dark' : ''} min-h-screen transition-colors duration-300">
 	<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
	
		<Navbar />
		{@render children()}
		<Footer />
    
	</div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  :global(body) {
	font-family: 'Inter', sans-serif;
  }
  
  :global(html) {
	scroll-behavior: smooth;
  }
  
  @keyframes pulse {
	0%, 100% {
	  opacity: 0.2;
	}
	50% {
	  opacity: 0.4;
	}
  }
</style>