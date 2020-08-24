import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'our-password',
        database : 'serverdb'
    },
    searchPath: ['knex', 'public'],
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
}