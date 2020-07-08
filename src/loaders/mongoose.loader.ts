import mongoose from 'mongoose';

import config from '../config';

export default async () => {
	try {
		await mongoose.connect(config.databaseURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
	} catch (error) {
		console.log(error);
	}
};
