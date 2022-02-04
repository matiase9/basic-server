import { Router } from 'express';

import test from './test/test.route';

const router: Router = Router();

router.use('/test', test);

export default router;
