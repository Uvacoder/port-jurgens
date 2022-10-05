<template>
	<img :src="imageUrl" :class="props.styleClasses" :alt="altText" />
</template>

<script setup lang="ts">
const props = defineProps<{
	imageName: string;
	altText: string;
	styleClasses?: string;
}>();

const imageUrl = await useGetImage(props.imageName);
</script>
