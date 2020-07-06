import { Application } from 'express';

// api routes modules
import homeRouter from './home';

export default (app: Application) => {
	// const apiPrefix = '/api/v1';

	app.use(homeRouter);

	return app;
};
