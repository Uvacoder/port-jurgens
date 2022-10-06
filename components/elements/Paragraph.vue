<template>
	<p class="mb-6 last:mb-0" :class="props.styleClasses">{{ props.text }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string;
	styleClasses?: string;
}>();
</script>
