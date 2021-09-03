import express from 'express';
import 'express-async-errors';

const router = express.Router();

const tweets = [
  {
    id: 1,
    text: 'Happy Halloween',
    createAt: Date.now().toString(),
    name: 'Hela',
    username: 'hela',
    url: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    id: 2,
    text: 'Merry X-mas',
    createAt: Date.now().toString(),
    name: 'sena',
    username: 'sena',
    url: 'https://randomuser.me/api/portraits/women/27.jpg',
  },
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});
// GET /tweets/:id
// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id

export default router;
