import sequelizeConnection from '../connection';
import { DataTypes } from 'sequelize';

const Genre = sequelizeConnection.define('genre', {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
});

export { Genre };