import express from 'express';
import { clients, deleteClient, editClient, login, plantData } from '../controllers';
import credentialsCheck from '../middlewares/credentialsCheck';
import rescue from 'express-rescue'
import { genericError } from '../middlewares/genericError';
import { tokenCheck } from '../middlewares/tokenCheck';

const routes = express.Router();

// User routes 

routes.get('/login', credentialsCheck, rescue(login));

// Power Plant Routes 

routes.get('/powerplants', tokenCheck, rescue(plantData));

// Clients routes 

routes.get('/clients', tokenCheck, rescue(clients));

routes.post('/editclient', tokenCheck, rescue(editClient));

routes.delete('/deleteclient', tokenCheck, rescue(deleteClient));

routes.use(genericError)

export default routes;