import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faMoon,
	faSun,
	faDesktop,
	faCode,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

library.add(faMoon, faSun, faDesktop, faCode);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
});
