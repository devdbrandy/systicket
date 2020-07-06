import 'reflect-metadata';
import express from 'express';

import initLoaders from './loaders';
import config from './config';

const bootstrap = async () => {
	const app = express();
	const PORT = config.port;
	const logger = console;

	await initLoaders(app);

	app.listen(PORT, () => {
		logger.log('🚀', 'Server running on http://localhost:3000');
	});
};

bootstrap();
