<template>
	<section class="bg-violet-800">
		<div class="container py-16">
			<div
				class="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg md:flex md:items-center overflow-hidden"
			>
				<div class="pt-6 md:pt-0 pr-6 md:pr-0 pl-6 md:pl-0">
					<img
						v-if="profilePicture"
						class="h-60 w-60 object-cover rounded-full md:rounded-none mx-auto md:mx-0"
						alt="David Jurgens"
						:src="profilePicture"
					/>
				</div>

				<div class="p-6 text-center md:text-left">
					<h1>{{ headlineOne }}</h1>
					<span
						class="uppercase text-xl tracking-wider text-slate-700 dark:text-slate-50"
						>{{ headlineTwo }}</span
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps<{
	image: string;
	headlineOne: string;
	headlineTwo?: string;
}>();

const profilePicture = await useGetImage(props.image);
</script>
