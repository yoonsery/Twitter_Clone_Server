let users = [
  {
    id: '1',
    username: 'noah',
    password: '$2b$10$sJcuyhKQgt8oWv2blptjUuV6hsakkZYowIMfHT27fve8IgdX6bq6q',
    name: 'Noah',
    email: 'nonono@eml.com',
    url: 'https://random.dog/',
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
