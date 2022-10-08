<template>
	<div
		class="p-6 mx-auto bg-white dark:bg-slate-800 max-w-xl rounded-lg shadow-lg"
		v-auto-animate
	>
		<div v-if="formSent" class="text-center">
			<font-awesome-icon
				icon="fa-solid fa-circle-check"
				class="text-emerald-600 mb-4"
				size="2xl"
			/>
			<p>Thank you for your message, I will reply as soon as possible.</p>
		</div>
		<FormKit
			type="form"
			@submit="sendForm"
			submit-label="Send"
			v-if="!formSent"
		>
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
const formSent = ref(false);

const sendForm = async () => {
	sending.value = true;
	const emailResponse = await $fetch('https://api.davidjurgens.com', {
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
					replyTo: {
						email: email.value,
						name: name.value,
					},
				},
			],
			from: {
				email: 'no-reply@davidjurgens.com',
			},
			subject: 'Form submission from davidjurgens.com',
			content: [
				{
					type: 'text/html',
					value: `<h1>New message from: ${name.value} <${email.value}></h1>`,
				},
				{
					type: 'text/html',
					value: `<p>${message.value}</p>`,
				},
			],
		}),
	});
	console.log(emailResponse);
	formSent.value = true;
	sending.value = false;
};
</script>
