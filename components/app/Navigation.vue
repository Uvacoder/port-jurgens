<template>
	<nav class="md:mx-auto relative">
		<div
			class="md:hidden w-9 h-9 p-2 rounded-full text-center hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
			@click="showMobileMenu = !showMobileMenu"
			ref="target"
		>
			<font-awesome-icon icon="fa-solid fa-bars" />
		</div>

		<div
			class="md:hidden py-2 bg-slate-50 shadow rounded absolute top-8 left-0 min-w-max z-10 dark:bg-slate-800"
			v-if="showMobileMenu"
			v-auto-animate
		>
			<a
				href="#about"
				class="block px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
				>About me</a
			>
			<a
				href="#portfolio"
				class="block px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
				>Portfolio</a
			>
			<a
				href="#contact"
				class="block px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
				>Contact</a
			>
		</div>
		<ul class="hidden md:flex gap-8 uppercase tracking-wider font-thin">
			<li>
				<a
					href="#about"
					class="hover:text-violet-800 dark:hover:text-violet-400"
					>About me</a
				>
			</li>
			<li>
				<a
					href="#portfolio"
					class="hover:text-violet-800 dark:hover:text-violet-400"
					>Portfolio</a
				>
			</li>
			<li>
				<a
					href="#contact"
					class="hover:text-violet-800 dark:hover:text-violet-400"
					>Contact</a
				>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false);

const target = ref(null);

onClickOutside(target, () => {
	showMobileMenu.value = false;
});
</script>
