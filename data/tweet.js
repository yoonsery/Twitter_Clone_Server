let tweets = [
  {
    id: '1',
    text: 'Happy Halloween',
    createdAt: Date.now().toString(),
    name: 'Hela',
    username: 'hela',
    url: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    id: '2',
    text: 'Merry X-mas',
    createdAt: Date.now().toString(),
    name: 'sena',
    username: 'sena',
    url: 'https://randomuser.me/api/portraits/women/27.jpg',
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
