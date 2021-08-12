import { Router } from 'express';
import { ExpressAdapter } from "./adapters/expressRouterAdapter";

export const routes = Router();

import { addMovieFactory } from "./factories/addMovieFactory";
import { deleteMovieFactory } from './factories/deleteMovieFactory';
import { findAllMovieFactory } from './factories/findAllMovie';
import { findMovieByIdFactory } from './factories/findMovieById';
import { updateMovieFactory } from './factories/updateMovieFactory';
routes.post('/movie', ExpressAdapter(addMovieFactory()));
routes.get('/movie/:id', ExpressAdapter(findMovieByIdFactory()));
routes.get('/movie', ExpressAdapter(findAllMovieFactory()));
routes.delete('/movie/:id', ExpressAdapter(deleteMovieFactory()));
routes.put('/movie/:id', ExpressAdapter(updateMovieFactory()));