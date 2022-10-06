<template>
	<div class="grid md:grid-cols-2 gap-6">
		<ElementsCard
			v-for="portfolioItem in portfolioItems"
			:key="portfolioItem.id"
			:title="portfolioItem.title"
			:description="portfolioItem.description"
			:imageName="portfolioItem.imageUrl"
			:url="portfolioItem.url"
			:githubLink="portfolioItem.github_link"
		/>
	</div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const { data: portfolioItems, error } = await supabase
	.from('portfolio_items')
	.select();

if (error) {
	console.log(error);
}
</script>
