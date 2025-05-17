<script lang="ts">
	import { Sun, Moon, Menu, X } from 'lucide-svelte';
	import { page } from '$app/state';
	
	export let theme: string;
	export let toggleTheme: () => void;
	
	let isMenuOpen = false;
	
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/experience', label: 'Experience' },
		{ href: '/skills', label: 'Skills' },
		{ href: '/contact', label: 'Contact' }
	];
	
	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<header class="bg-base-100 shadow-sm sticky top-0 z-50">
	<div class="container-custom py-4">
		<nav class="flex justify-between items-center">
			<a href="/" class="font-bold text-xl md:text-2xl text-primary">Khalid Abdul Jabbar</a>
			
			<!-- Desktop Navigation -->
			<ul class="hidden md:flex items-center space-x-6">
				{#each navItems as item}
					<li>
						<a 
							href={item.href} 
							class="font-medium {page.url.pathname === item.href ? 'text-primary' : 'text-secondary hover:text-primary'} transition-colors"
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li>
					<button 
						on:click={toggleTheme} 
						class="btn btn-circle btn-sm" 
						aria-label="Toggle theme"
					>
						{#if theme === 'light'}
							<Moon size={18} />
						{:else}
							<Sun size={18} />
						{/if}
					</button>
				</li>
			</ul>
			
			<!-- Mobile Navigation Button -->
			<div class="md:hidden flex items-center">
				<button 
					on:click={toggleTheme} 
					class="btn btn-sm btn-circle mr-2" 
					aria-label="Toggle theme"
				>
					{#if theme === 'light'}
						<Moon size={16} />
					{:else}
						<Sun size={16} />
					{/if}
				</button>
				
				<button 
					on:click={toggleMenu} 
					class="btn btn-ghost btn-sm" 
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{#if isMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</nav>
		
		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="md:hidden mt-4 pb-2">
				<ul class="flex flex-col space-y-3">
					{#each navItems as item}
						<li>
							<a 
								href={item.href} 
								class="block py-2 font-medium {page.url.pathname === item.href ? 'text-primary' : 'text-secondary'}"
								on:click={closeMenu}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</header>
