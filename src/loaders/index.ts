import { Application } from 'express';

// loaders
import expressLoader from './express.loader';
import mongooseLoader from './mongoose.loader';
import apiModules from '../api';

export default async (app: Application) => {
	await mongooseLoader();
	await expressLoader(app);

	// load api modules
	apiModules(app);
};
