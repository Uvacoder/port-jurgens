import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faMoon,
	faSun,
	faDesktop,
	faCode,
	faArrowUpRightFromSquare,
	faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
	faMoon,
	faSun,
	faDesktop,
	faCode,
	faArrowUpRightFromSquare,
	faGithub,
	faLinkedin,
	faCopyright
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
});
