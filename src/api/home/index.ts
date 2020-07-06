import { Router } from 'express';
import { constants } from '../../helpers';

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.json({ message: constants.welcomeMsg });
});

export default router;
