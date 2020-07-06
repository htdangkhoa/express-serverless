import express from 'express';

const router = express.Router();

router.get('/check', (req, res) => {
  return res.send('App is live.');
});

export default router;