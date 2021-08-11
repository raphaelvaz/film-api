import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

import databaseConfig from '../infra/orm/sequelize/connection';

databaseConfig.sync(
    // { force: true }
)
    .then(result => {
        //console.log(result)
        app.listen(3000, () => {
            console.log("Listening at 3000");
        });
    })
    .catch(error => {
        console.log(error)
    })