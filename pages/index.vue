<template>
	<main>
		<component
			v-for="component in content"
			:key="component.index"
			:is="this[component.type]"
			v-bind="component.props"
		>
			<component
				v-if="component.children"
				v-for="childComponent in component.children"
				:key="childComponent.index"
				:is="this[childComponent.type]"
				v-bind="childComponent.props"
			>
				<component
					v-if="childComponent.children"
					v-for="grandChildComponent in childComponent.children"
					:key="grandChildComponent.index"
					:is="this[grandChildComponent.type]"
					v-bind="grandChildComponent.props"
				>
					<component
						v-if="grandChildComponent.children"
						v-for="greatGrandChildComponent in grandChildComponent.children"
						:key="greatGrandChildComponent.index"
						:is="this[greatGrandChildComponent.type]"
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

const PageHero = resolveComponent('page/Hero');
const PageSection = resolveComponent('page/Section');
const PageColumns = resolveComponent('page/Columns');
const PageColumn = resolveComponent('page/Column');
const ElementsParagraph = resolveComponent('elements/Paragraph');
const ElementsHeading = resolveComponent('elements/Heading');
const ElementsImage = resolveComponent('elements/Image');
const PortfolioItems = resolveComponent('PortfolioItems');
const ContactForm = resolveComponent('ContactForm');

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
