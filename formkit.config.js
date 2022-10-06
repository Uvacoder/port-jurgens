import { generateClasses } from '@formkit/themes';
import formkitTheme from './formkitTheme.js';

export default {
	config: {
		classes: generateClasses(formkitTheme),
	},
};
