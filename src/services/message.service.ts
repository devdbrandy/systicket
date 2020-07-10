import { Service } from 'typedi';

import { Message } from '../models';

@Service()
class MessageService {
	async getAll() {
		return Message.find();
	}
}

export default MessageService;
