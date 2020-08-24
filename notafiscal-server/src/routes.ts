import express from 'express';

import ControllerAccountCustomer from './controller/controllerAcountCustomer';


const routes = express.Router();

const controllerAccountCustomers = new ControllerAccountCustomer();


routes.post('/customer', controllerAccountCustomers.create);
routes.get('/customer', controllerAccountCustomers.index);

export default routes;
