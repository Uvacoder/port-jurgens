<template>
	<section class="py-16" :class="props.styleClasses" :id="props.id">
		<div class="container">
			<slot />
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps<{
	id?: string;
	styleClasses?: string;
}>();
</script>
