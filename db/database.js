import { config } from '../config.js';
import SQ from 'sequelize';

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: false, // database 실행에 대한 로그가 콘솔에 남지 않게 하는 옵션
});
