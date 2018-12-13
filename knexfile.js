// Update with your config settings.

const localPg = {
  host: 'localhost',
  database: 'lambdanotes',
  user: 'carlo',
  pass: 'carlo'
};

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/notes.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    }
  },
  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    }
  }
};
