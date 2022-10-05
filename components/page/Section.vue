<template>
	<section class="py-16" :class="props.styleClasses">
		<div class="container">
			<slot />
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps<{
	styleClasses?: string;
}>();
</script>
