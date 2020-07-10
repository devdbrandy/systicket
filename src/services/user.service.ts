import { Service } from 'typedi';

import { User } from '../models';

@Service()
class UserService {
	async getAll() {
		return User.find();
	}
}

export default UserService;
