import express from 'express';

import initializeLoaders from './loaders';

async function runServer() {
	const app = express();
	const PORT = process.env.PORT || 3000;
	const logger = console;

	await initializeLoaders(app);

	app.listen(PORT, () => {
		logger.log('🚀', 'Server running on http://localhost:3000');
	});
}

runServer();
