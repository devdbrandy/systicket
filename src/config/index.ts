import { env } from '../helpers';

const config = {
	port: env('PORT'),
	appDebug: env('APP_DEBUG'),
};

export default config;
