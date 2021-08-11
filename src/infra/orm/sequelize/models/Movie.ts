import sequelizeConnection from '../connection';
import { DataTypes } from 'sequelize';

const Movie = sequelizeConnection.define('movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export { Movie };