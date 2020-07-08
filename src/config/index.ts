import { env } from '../helpers';

const config = {
	port: env('PORT'),
	appDebug: env('APP_DEBUG'),
	databaseURI: env('DATABASE_URL'),
};

export default config;
