import { resolve } from 'path';
import * as dotenv from 'dotenv-extended';

const isTest = process.env.NODE_ENV === 'test';
const dotenvFile = isTest ? '.env.test' : '.env';

const resolveEnvFile = (file: string) => resolve(process.cwd(), file);

// autoload environment variable
dotenv.load({
	silent: true,
	path: resolveEnvFile(dotenvFile),
	defaults: resolveEnvFile('.env'),
	schema: resolveEnvFile('.env.example'),
	errorOnMissing: !isTest,
	errorOnExtra: !isTest,
	errorOnRegex: false,
	overrideProcessEnv: true,
});
