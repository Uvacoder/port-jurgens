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
		<div v-if="formSendError" class="text-center">
			<font-awesome-icon
				icon="fa-solid fa-circle-xmark"
				class="text-rose-600 mb-4"
				size="2xl"
			/>
			<p>Something went wrong, please refresh the page and try again.</p>
		</div>
		<FormKit
			type="form"
			@submit="sendForm"
			submit-label="Send"
			v-if="!formSent && !formSendError"
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
const formSent = ref(false);
const formSendError = ref(false);

const sendForm = async () => {
	try {
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
					},
				],
				reply_to: {
					email: email.value,
					name: name.value,
				},
				from: {
					email: 'no-reply@davidjurgens.com',
				},
				subject: 'Form submission from davidjurgens.com',
				content: [
					{
						type: 'text/html',
						value: `<h1>New message from: ${name.value} ${email.value}</h1> <p>${message.value}</p>`,
					},
				],
			}),
		});
		if (emailResponse === 'success') {
			formSent.value = true;
		} else {
			formSendError.value = true;
		}
	} catch (error) {
		console.error(error);
		formSendError.value = true;
	}
};
</script>
