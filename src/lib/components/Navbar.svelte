<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { Globe, Moon, Search, Sun, Truck, User } from '@lucide/svelte'

  let isScrolled = false;
  let scrollProgress = 0;
  let mobileMenuOpen = false;
  let megaMenuOpen = false;
  let darkMode = false;
  let searchOpen = false;
  let searchQuery = '';
  let activeSection = '';

  // Enhanced scroll handling with throttling
  let scrollTimeout: number;
  function handleScroll() {
    if (scrollTimeout) return;
    
    scrollTimeout = window.setTimeout(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      scrollProgress = Math.min((scrollTop / docHeight) * 100, 100);
      isScrolled = scrollTop > 50;
      megaMenuOpen = false;
      
      // Update active section
      updateActiveSection();
      scrollTimeout = 0;
    }, 10);
  }

  function updateActiveSection() {
    const sections = ['hero','about', 'services', 'products', 'support'];
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection = section;
          break;
        }
      }
    }
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      mobileMenuOpen = false;
      searchOpen = false;
    }
  }

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }

  function handleSearch(event: KeyboardEvent) {
    if (event.key === 'Enter' && searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching for:', searchQuery);
      searchOpen = false;
      searchQuery = '';
    }
    if (event.key === 'Escape') {
      searchOpen = false;
      searchQuery = '';
    }
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Element;
    if (!target.closest('.mega-menu-container')) {
      megaMenuOpen = false;
    }
    if (!target.closest('.search-container')) {
      searchOpen = false;
    }
  }

  onMount(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    darkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', darkMode);

    handleScroll();
    updateActiveSection();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  });

  // Enhanced navigation items
  const navItems = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/#services' },
    { id: 'products', label: 'Products', href: '/products' },
  ];

  const megaMenuData = {
    services: {
      title: 'Services',
      items: [
        { name: 'Telegram Bots', description: 'Custom bot development', icon: '🤖', href:'' },
        { name: 'Social Media', description: 'Social platform integration', icon: '📱', href:'' },
        { name: 'Custom AI Training', description: 'Tailored AI solutions', icon: '🧠', href:'' },
        { name: 'Web Development', description: 'Modern web applications', icon: '🌐', href:'' },
        { name: 'Mobile Development', description: 'iOS & Android apps', icon: '📲', href:'' },
        { name: 'NotifyDelivery', description: 'Place it as an Order we ship it.', icon: '🚚', href:'' },
      ]
    },
    community: {
      title: 'Community',
      items: [
        { name: 'About Notifycode', description: 'Our story and mission', icon: '🏢', href:'/about'},
        // { name: 'Businesses', description: 'Enterprise solutions', icon: '💼' },
        // { name: 'Creators', description: 'Creator tools and resources', icon: '🎨' },
        { name: 'Team', description: 'Meet our experts', icon: '👥', href:'/team' },
        // { name: 'Research', description: 'Latest innovations', icon: '🔬' },
        { name: 'Blog', description: 'Insights and updates', icon: '📝', href:'https://blog.notifycode.org' },
      ]
    }
  };
</script>

<!-- Scroll Progress Bar -->
<div 
  class="fixed top-0 left-0 z-[999] h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 ease-out shadow-lg"
  style="width: {scrollProgress}%; opacity: {scrollProgress > 0 ? 1 : 0}"
></div>

<!-- Navbar -->
<nav 
  class={`fixed top-0 w-full z-50 transition-all duration-500 ease-out
    ${isScrolled 
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5' 
      : 'bg-transparent border-transparent'}`}
  role="navigation"
  aria-label="Main navigation"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo + Nav -->
      <div class="flex items-center space-x-8">
        <a 
          href="/" 
          class="flex items-center space-x-3 group"
          aria-label="Notifycode home"
        >
          <div class="relative">
            <img 
              src="/logo.jpg" 
              alt="Notifycode Logo" 
              class="h-8 w-8 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110 shadow-lg" 
            />
          </div>
          <span class="text-base font-bold ">
            Notifycode
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          {#each navItems as item}
            <a 
              href={item.href}
              class={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:scale-105
                ${activeSection === item.id 
                  ? 'text-green-600 dark:text-green-400 bg-green-50/80 dark:bg-green-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-green-600'}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          {/each}
          
          <!-- Enhanced Mega Menu -->
          <div
            class="relative mega-menu-container"
            onmouseenter={() => megaMenuOpen = true}
            onmouseleave={() => megaMenuOpen = false}
          >
            <button 
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 rounded-lg transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 flex items-center space-x-1"
              aria-expanded={megaMenuOpen}
              aria-haspopup="true"
            >
              <span>Explore</span>
              <svg 
                class={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {#if megaMenuOpen}
              <div
                class="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-screen max-w-4xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl shadow-black/10 px-8 py-8 z-50"
                transition:fly="{{ y: -10, duration: 300, opacity: 0 }}"
                role="menu"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {#each Object.entries(megaMenuData) as [key, section]}
                    <div>
                      <h3 class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                        {section.title}
                      </h3>
                      <ul class="space-y-1" role="group">
                        {#each section.items as item}
                          <li>
                            <a 
                              href="#" 
                              class="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-[1.02]"
                              role="menuitem"
                            >
                              <span class="text-xl group-hover:scale-110 transition-transform duration-200">
                                {item.icon}
                              </span>
                              <div>
                                <div class="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400">
                                  {item.name}
                                </div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="hidden md:flex items-center space-x-3">
        <!-- Search -->
        <div class="relative search-container">
          <button 
            onclick={() => searchOpen = !searchOpen}
            class="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg transition-all duration-200"
            aria-label="Search"
          >
            <Search />
          </button>
          
          {#if searchOpen}
            <div 
              class="absolute right-0 top-full mt-2 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl p-4"
              transition:fly="{{ y: -10, duration: 200 }}"
            >
              <input
                bind:value={searchQuery}
                onkeydown={handleSearch}
                placeholder="Search..."
                class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                autocomplete="off"
              />
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Press Enter to search, Esc to close
              </div>
            </div>
          {/if}
        </div>

        <button 
          onclick={() => scrollToSection('support')} 
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 rounded-lg transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
        >
          Support
        </button>

        

        <button class="relative group px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
          <span class="relative z-10">Get Started</span>
        </button>

        <!-- Theme Toggle -->
        <button 
          onclick={toggleDarkMode}
          class="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          {#if darkMode}
            <Sun />
          {:else}
            <Moon />
          {/if}
        </button>

        <!-- Language & User -->
        <div class="flex items-center space-x-2">
          <button class="flex items-center space-x-1 p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg transition-all duration-200 text-sm">
            <Globe class="w-5 h-5"/> <span>EN</span>
          </button>
          <button class="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg transition-all duration-200">
            <User class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Enhanced Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-2">
        <button 
          onclick={toggleDarkMode}
          class="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 rounded-lg transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          {#if darkMode}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {/if}
        </button>
        
        <button 
          aria-label="Toggle Menu" 
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          class="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 rounded-lg transition-all duration-200"
        >
          <svg class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Enhanced Mobile Menu -->
  {#if mobileMenuOpen}
    <div 
      class="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-xl"
      transition:fly="{{ y: -20, duration: 300 }}"
    >
      <div class="px-4 py-6 space-y-4">
        <!-- Search in mobile -->
        <div class="relative">
          <input
            bind:value={searchQuery}
            onkeydown={handleSearch}
            placeholder="Search..."
            class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
            autocomplete="off"
          />
        </div>

        {#each navItems as item}
          <a 
            href={item.href}
            class={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80
              ${activeSection === item.id 
                ? 'text-green-600 dark:text-green-400 bg-green-50/80 dark:bg-green-900/20' 
                : 'text-gray-700 dark:text-gray-300'}`}
            onclick={() => mobileMenuOpen = false}
          >
            {item.label}
          </a>
        {/each}

        <!-- Enhanced Mobile Expandable -->
        <details class="text-gray-700 dark:text-gray-300 group">
          <summary class="cursor-pointer px-4 py-3 text-base font-medium hover:text-green-600 transition-all duration-200 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 flex items-center justify-between">
            <span>Explore Notifycode</span>
            <svg class="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          
          <div class="mt-2 space-y-4">
            {#each Object.entries(megaMenuData) as [key, section]}
              <div class="ml-4">
                <h4 class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {section.title}
                </h4>
                <ul class="space-y-2">
                  {#each section.items as item}
                    <li>
                      <a href="#" class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200 text-sm">
                        <span class="text-lg">{item.icon}</span>
                        <div>
                          <div class="font-medium text-gray-900 dark:text-gray-100">{item.name}</div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                        </div>
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
        </details>

        <button 
          onclick={() => scrollToSection('support')} 
          class="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-all duration-200 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
        >
          Support
        </button>

        <div class="flex items-center justify-between px-4 py-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">🌐 EN</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">👤 Account</span>
        </div>

        <button class="w-full bg-gradient-to-r from-green-500 via-green-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold text-base">
          Get Started
        </button>
      </div>
    </div>
  {/if}
</nav>