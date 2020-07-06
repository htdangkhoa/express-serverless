import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send('App is live.');
});

export default router;