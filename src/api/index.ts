import { Application } from 'express';

// api routes modules
import homeRouter from './home';
import usersRouter from './users';

export default (app: Application) => {
	const apiPrefix = '/api/v1';

	app.use(homeRouter);
	app.use(apiPrefix, usersRouter);

	return app;
};
