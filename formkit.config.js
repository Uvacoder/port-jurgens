import { generateClasses } from '@formkit/themes';
import formkitTheme from './formkitTheme.js';
import { createAutoAnimatePlugin } from '@formkit/addons';

export default {
	config: {
		classes: generateClasses(formkitTheme),
	},
	plugins: [createAutoAnimatePlugin()],
};
