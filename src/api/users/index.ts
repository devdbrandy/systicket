import { Router } from 'express';

import { User, Message } from '../../models';

const router = Router();

/* GET users. */
router.get('/users', async (req, res) => {
	const user = new User({ username: 'dbrandy' });
	const message = new Message({ user: user._id, text: 'some message' });

	await user.save();
	await message.save();

	res.json({ success: true, data: user });
});

export default router;
