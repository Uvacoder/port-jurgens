<template>
	<component :is="props.headingType">{{ text }}</component>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string;
	headingType: string;
}>();
</script>
