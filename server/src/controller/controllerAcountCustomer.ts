import { Request, Response, } from 'express';
import db from '../database/connection';


export default class ControllerCustomerAccount {
  async index(request: Request, responde: Response) {
    
  }
  
  // Recebendo os dados de todas as contas autorizadas do usuário
  async create(request: Request, response: Response) {
    const accoutsArray = request.body;

    console.log(accoutsArray);
  }
} 