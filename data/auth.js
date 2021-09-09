let users = [
  {
    id: '1',
    username: 'noah',
    password: '$2b$10$sJcuyhKQgt8oWv2blptjUuV6hsakkZYowIMfHT27fve8IgdX6bq6q',
    name: 'Noah',
    email: 'nonono@email.com',
  },
  {
    id: '2',
    username: 'ona',
    password: '$2b$10$sJcuyhKQgt8oWv2blptjUuV6hsakkZYowIMfHT27fve8IgdX6bq6q',
    name: 'Ona',
    email: 'ona@email.com',
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
