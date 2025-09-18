<script lang="ts">
	import '../app.css';
	import Logo from '$lib/assets/logo.jpg';

	let { children } = $props();
	
</script>

<svelte:head>
	<title>Notifycode</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href={Logo} />
</svelte:head>

{@render children()}
