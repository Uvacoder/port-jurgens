<template>
	<section class="bg-violet-800">
		<div class="container py-16 text-center">
			<figure
				v-if="profilePicture"
				v-auto-animate
				class="h-60 w-60 mx-auto mb-6 rounded-full overflow-hidden border-4"
			>
				<img :src="profilePicture" />
			</figure>
			<h1 class="text-slate-50 font-bold text-3xl">
				David Jurgens
				<font-awesome-icon icon="fa-solid fa-code" class="mx-2" /> Front-end
				developer
			</h1>
		</div>
	</section>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const profilePicture = ref(null);

try {
	const { data, error } = await supabase.storage
		.from('media')
		.getPublicUrl('david-jurgens-frontend-developer.jpeg');
	profilePicture.value = data.publicURL;
} catch (error) {
	console.log(error);
}
</script>
