<template>
	<main>
		<component
			v-for="component in content"
			:key="component.index"
			:is="resolveComponent(component.type)"
			v-bind="component.props"
		>
			<component
				v-if="component.children"
				v-for="childComponent in component.children"
				:key="childComponent.index"
				:is="resolveComponent(childComponent.type)"
				v-bind="childComponent.props"
			>
				<component
					v-if="childComponent.children"
					v-for="grandChildComponent in childComponent.children"
					:key="grandChildComponent.index"
					:is="resolveComponent(grandChildComponent.type)"
					v-bind="grandChildComponent.props"
				>
					<component
						v-if="grandChildComponent.children"
						v-for="greatGrandChildComponent in grandChildComponent.children"
						:key="greatGrandChildComponent.index"
						:is="resolveComponent(greatGrandChildComponent.type)"
						v-bind="greatGrandChildComponent.props"
					>
					</component>
				</component>
			</component>
		</component>
	</main>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const { data, error } = await supabase
	.from('pages')
	.select()
	.textSearch('slug', `'index'`)
	.single();

if (error) {
	console.log(error);
}

const content = data.content;
</script>
