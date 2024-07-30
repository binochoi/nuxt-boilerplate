const {
  DB_CONNECTION_STRING: connectionString,
  DB_HOST: host = '',
  DB_NAME: database = '',
  DB_USER: user = '',
  DB_PASSWORD: password = '',
  DB_PORT: port = 5432,
} = process.env;
export default {
  host: 'cloud.bino.blog',
  database: 'wellnear',
  password: 'qwhda8!21a',
  user: 'bino',
  port: 5432,
};
