<template>
	<div
		class="rounded-lg bg-slate-50 dark:bg-slate-800 overflow-hidden shadow-md flex flex-col"
	>
		<div>
			<div
				v-if="imageLoading"
				class="h-60 md:h-80 w-full flex justify-center items-center"
			>
				<font-awesome-icon
					icon="fa-solid fa-spinner"
					size="2x"
					class="text-slate-400"
					spin
				/>
			</div>
			<img
				v-if="!imageLoading && imageUrl"
				:src="imageUrl"
				class="h-80 w-full object-cover object-top"
				:alt="props.title"
			/>
		</div>

		<div class="p-6 border-t-4 border-violet-800">
			<h3>{{ props.title }}</h3>
			<p>{{ props.description }}</p>
		</div>
		<div
			class="px-6 py-2 bg-slate-200 dark:bg-slate-900 mt-auto"
			v-if="props.url || props.githubLink"
		>
			<div class="flex gap-2">
				<NuxtLink
					v-if="props.url"
					:to="props.url"
					target="_blank"
					class="w-9 h-9 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-center"
				>
					<font-awesome-icon
						icon="fa-solid fa-arrow-up-right-from-square"
						title="Website link"
					/>
				</NuxtLink>
				<NuxtLink
					v-if="props.githubLink"
					:to="props.githubLink"
					target="_blank"
					class="w-9 h-9 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-center"
				>
					<font-awesome-icon icon="fa-solid fa-code" title="GitHub link" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string;
	imageName?: string;
	url?: string;
	githubLink?: string;
}>();

const imageUrl = ref(null);
const imageLoading = ref(true);

const getImage = async () => {
	const image = await useGetImage(props.imageName);
	imageLoading.value = false;
	imageUrl.value = image;
};

getImage();
</script>
