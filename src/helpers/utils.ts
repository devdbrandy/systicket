export const env = (key: string, defaultValue: any = null) => {
	const value = process.env[key];

	if (value === 'true') return true;
	if (value === 'false') return false;
	if (value === '(empty)') return '';

	return value || defaultValue;
};

export const foo = () => true;
export const bar = () => true;
