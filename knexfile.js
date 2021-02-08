// Update with your config settings.

module.exports = {

  development: {
    // client: 'sqlite3',
    // connection: {
    //   filename: './dev.sqlite3'
    // }
    client: 'pg',
    connection: {
      database: 'exam_1',
      user:     'username',
      password: 'password'
    },
  },

  // staging: {
   
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
