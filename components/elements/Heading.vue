<template>
	<component :is="props.headingType" :class="props.styleClasses">{{
		text
	}}</component>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string;
	headingType: string;
	styleClasses?: string;
}>();
</script>
