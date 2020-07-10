import { Request, Response } from 'express';
import { Container, Service } from 'typedi';

import { UserService } from '../../services';

@Service()
class UsersController {
	constructor(private usersService: UserService) {}

	getUsers() {
		return async (req: Request, res: Response) => {
			try {
				const users = await this.usersService.getAll();

				res.json({ success: true, data: users });
			} catch (error) {
				console.log(error);
			}
		};
	}
}

export default Container.get<UsersController>(UsersController);
