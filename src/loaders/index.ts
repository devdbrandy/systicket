import { Application } from 'express';

// loaders
import expressLoader from './express.loader';
import apiModules from '../api';

export default async (app: Application) => {
	expressLoader(app);

	// load api modules
	apiModules(app);
};
