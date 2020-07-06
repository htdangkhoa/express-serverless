import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
  return res.send([
    {
      id: 0,
      name: 'Flash',
    },
    {
      id: 1,
      name: 'Batman',
    },
  ]);
});

export default router;