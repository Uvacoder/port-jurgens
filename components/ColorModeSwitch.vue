<template>
	<div class="md:absolute md:top-[8px] md:right-8">
		<ColorScheme placeholder=" " tag="span">
			<div class="relative">
				<div
					class="w-9 h-9 p-2 rounded-full text-center hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
					@click="showColorModeMenu = !showColorModeMenu"
					ref="target"
				>
					<font-awesome-icon
						:icon="
							colorMode.value === 'light'
								? 'fa-solid fa-sun'
								: 'fa-solid fa-moon'
						"
					/>
				</div>

				<div
					class="py-2 bg-slate-50 shadow rounded absolute top-8 right-0 min-w-max z-10 dark:bg-slate-800"
					v-if="showColorModeMenu"
					v-auto-animate
				>
					<a
						class="block px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
						:class="
							colorMode.preference === 'light'
								? 'text-violet-600 dark:text-violet-300'
								: ''
						"
						@click="colorMode.preference = 'light'"
					>
						<font-awesome-icon icon="fa-solid fa-sun" class="w-5 mr-2" />
						Light
					</a>
					<a
						class="block px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
						:class="
							colorMode.preference === 'dark'
								? 'text-violet-600 dark:text-violet-300'
								: ''
						"
						@click="colorMode.preference = 'dark'"
					>
						<font-awesome-icon icon="fa-solid fa-moon" class="w-5 mr-2" />
						Dark
					</a>
					<a
						class="block px-4 py-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
						:class="
							colorMode.preference === 'system'
								? 'text-violet-600 dark:text-violet-300'
								: ''
						"
						@click="colorMode.preference = 'system'"
					>
						<font-awesome-icon icon="fa-solid fa-desktop" class="w-5 mr-2" />
						System
					</a>
				</div>
			</div>
		</ColorScheme>
	</div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const showColorModeMenu = ref(false);

const target = ref(null);

onClickOutside(target, () => {
	showColorModeMenu.value = false;
});
</script>
