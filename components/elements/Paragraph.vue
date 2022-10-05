<template>
	<p class="mb-6 last:mb-0">{{ props.text }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string;
}>();
</script>
