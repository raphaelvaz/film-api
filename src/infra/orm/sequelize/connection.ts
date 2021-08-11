import { Sequelize } from 'sequelize';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './films.db'
});

export default db;