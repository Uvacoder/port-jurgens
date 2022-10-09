<template>
	<footer class="bg-slate-200 dark:bg-slate-700 border-t-8 border-violet-800">
		<section class="container py-12">
			<PageColumns>
				<PageColumn>
					<p>some info</p>
				</PageColumn>
				<PageColumn>
					<ul>
						<li class="mb-3">
							<NuxtLink
								to="https://github.com/d-jurgens"
								target="_blank"
								class="text-violet-800 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-500"
							>
								<font-awesome-icon icon="fa-brands fa-github" />
								GitHub
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="https://www.linkedin.com/in/dajurgens/"
								target="_blank"
								class="text-violet-800 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-500"
							>
								<font-awesome-icon icon="fa-brands fa-linkedin" />
								LinkedIn
							</NuxtLink>
						</li>
					</ul>
				</PageColumn>
				<PageColumn>
					<ul>
						<li
							class="mb-3 text-violet-800 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-500"
						>
							<a href="#about">About me</a>
						</li>
						<li
							class="mb-3 text-violet-800 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-500"
						>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li
							class="text-violet-800 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-500"
						>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</PageColumn>
			</PageColumns>
		</section>
	</footer>
	<!-- <footer class="bg-slate-800 text-slate-50">
		<section class="container py-4 text-sm text-slate-300">
			<font-awesome-icon icon="fa-solid fa-copyright" /> 2022 - David jurgens |
			All rights reserved
		</section>
	</footer> -->
</template>
