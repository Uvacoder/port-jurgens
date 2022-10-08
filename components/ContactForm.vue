<template>
	<div
		class="p-6 mx-auto bg-white dark:bg-slate-800 max-w-xl rounded-lg shadow-lg"
	>
		<FormKit type="form" @submit="sendForm" submit-label="Send">
			<FormKit type="text" name="name" label="Name" v-model="name" />
			<FormKit
				type="email"
				name="email"
				label="Email"
				validation="required|email"
				v-model="email"
			/>
			<FormKit
				type="textarea"
				name="message"
				label="Message"
				validation="required"
				v-model="message"
			/>
		</FormKit>
	</div>
</template>

<script setup lang="ts">
const email = ref('');
const name = ref('');
const message = ref('');
const sending = ref(false);

const sendForm = async () => {
	sending.value = true;
	await $fetch('https://email.jurgens-david8261.workers.dev/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [
						{
							email: 'no-reply@davidjurgens.com',
						},
					],
				},
			],
			from: {
				email: 'no-reply@davidjurgens.com',
			},
			subject: 'Form submission from davidjurgens.com',
			content: [
				{
					type: 'text/plain',
					value: `New message from: ${name.value}, ${email.value}: ${message.value}`,
				},
			],
		}),
	});
	sending.value = false;
};
</script>
