<template>
	<div
		class="p-6 mx-auto bg-white dark:bg-slate-800 max-w-xl rounded-lg shadow-lg"
	>
		<FormKit type="form" @submit="sendForm" submit-label="Send">
			<FormKit type="text" name="name" label="Name" />
			<FormKit
				type="email"
				name="email"
				label="Email"
				validation="required|email"
			/>
			<FormKit
				type="textarea"
				name="message"
				label="Message"
				validation="required"
			/>
		</FormKit>
	</div>
</template>

<script setup lang="ts">
const sending = ref(false);

const sendForm = () => {
	sending.value = true;
};
</script>
