import { Router } from 'express';
import { ExpressAdapter } from "../adapters/expressRouterAdapter";

export const routes = Router();

import { addMovieFactory } from "../factories/addMovieFactory";
import { findMovieByIdFactory } from '../factories/findMovieById';
routes.post('/movie', ExpressAdapter(addMovieFactory()));
routes.get('/movie/:id', ExpressAdapter(findMovieByIdFactory()));