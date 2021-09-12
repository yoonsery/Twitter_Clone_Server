import { db } from '../db/database.js';

export async function findByUsername(username) {
  return db
    .execute('SELECT * FROM users WHERE username=?', [username])
    .then((result) => result[0][0]); // 로그로 result값을 확인해보면 이중배열의 첫번째 값을 가져와야함
}

export async function findById(id) {
  return db
    .execute('SELECT * FROM users WHERE id=?', [id])
    .then((result) => result[0][0]);
}

export async function createUser(user) {
  const { username, password, name, email, url } = user;
  return db
    .execute(
      'INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)', // database에서 자동으로 증가하는 id를 만드므로 따로 id 명시 안함
      [username, password, name, email, url]
    )
    .then((result) => result[0].insertId);
}
