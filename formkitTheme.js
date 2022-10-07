const textClassification = {
	outer: 'mb-5',
	label: 'block mb-1 font-bold text-sm',
	inner:
		'border border-slate-400 rounded-md mb-1 overflow-hidden focus-within:border-violet-800 focus-within:ring-violet-800 focus-within:ring-2 formkit-invalid:ring-2 formkit-invalid:ring-red-500 formkit-invalid:border-red-500',
	input:
		'w-full h-10 px-3 dark:bg-slate-400 border-none text-base text-slate-900 placeholder-slate-400 outline-0',
	help: 'text-xs text-slate-500',
	messages: 'list-none p-0 mt-1 mb-0',
	message: 'text-red-500 mb-1 text-xs',
};

const boxClassification = {
	fieldset: 'max-w-md border border-slate-400 rounded-md px-2 pb-1',
	legend: 'font-bold text-sm',
	wrapper: 'flex items-center mb-1 cursor-pointer',
	help: 'mb-2',
	input:
		'form-check-input appearance-none h-5 w-5 mr-2 border border-slate-500 rounded-sm bg-white checked:bg-violet-800 focus:outline-none focus:ring-0 transition duration-200',
	label: 'text-sm text-slate-700 mt-1',
};
const buttonClassification = {
	outer: 'mb-0',
	input:
		'bg-violet-800 hover:bg-violet-500 text-slate-50 text-sm font-normal py-2 px-4 rounded uppercase tracking-wider',
};

export default {
	// the global key will apply to all inputs
	global: {
		outer: 'mb-5 formkit-disabled:opacity-50',
		help: 'text-xs text-slate-500',
		messages: 'list-none p-0 mt-1 mb-0',
		message: 'text-red-500 mb-1 text-xs',
	},
	button: buttonClassification,
	color: {
		label: 'block mb-1 font-bold text-sm',
		input:
			'w-16 h-8 appearance-none cursor-pointer border border-gray-300 rounded-md mb-2 p-1',
	},
	date: textClassification,
	'datetime-local': textClassification,
	checkbox: boxClassification,
	email: textClassification,
	file: {
		label: 'block mb-1 font-bold text-sm',
		inner: 'max-w-md cursor-pointer',
		input:
			'text-gray-600 text-sm mb-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600',
		noFiles: 'block text-gray-800 text-sm mb-1',
		fileItem: 'block flex text-gray-800 text-sm mb-1',
		fileRemove: 'ml-auto text-blue-500 text-sm',
	},
	month: textClassification,
	number: textClassification,
	password: textClassification,
	radio: {
		...boxClassification,
		input: boxClassification.input.replace('rounded-sm', 'rounded-full'),
	},
	range: {
		inner: 'max-w-md',
		input:
			'form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none',
	},
	search: textClassification,
	select: textClassification,
	submit: buttonClassification,
	tel: textClassification,
	text: textClassification,
	textarea: {
		...textClassification,
		input:
			'block w-full h-32 px-3 py-2 dark:bg-slate-400 border-none text-base text-slate-700 placeholder-slate-400 rounded-md focus:border-violet-800 outline-0',
	},
	time: textClassification,
	url: textClassification,
	week: textClassification,
};
