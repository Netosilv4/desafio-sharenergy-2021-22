import { Request, Response } from "express";

import { AuthError } from "../errors";

import { deleteHandler, findPlantData, getClients, updateClient } from "../models";

import { loginHandler } from "../services";

import { validateUpdate } from '../validations'

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.query;
    
    const user = await loginHandler(username as string, password as string);

    res.status(200).json({ user }); return; 
}

export const plantData = async (req: Request, res: Response) => {
    const plantData = await findPlantData();
    
    res.status(200).json({ plantData }); return;
}

export const clients = async (req: Request, res: Response) => {
    const { type } = req.query

    if (type !== 'admin') throw new AuthError("Apenas administradores podem consultar clientes");
    
    const clients = await getClients();
    
    res.status(200).json(clients); return;
}

export const editClient = async (req: Request, res: Response) => {
    const clientBody = req.body
    
    const { clientId, type } = req.query

    if (type !== 'admin') throw new AuthError("Apenas administradores podem editar clientes");
    
    if (!clientId) throw new AuthError("Id não informado")

    validateUpdate(clientBody)
    
    const updated = await updateClient(clientId as string, clientBody);
    
    res.status(200).json({ message: `Cliente atualizado`}); return;
}

export const deleteClient = async (req: Request, res: Response) => {
    const { clientId, type } = req.query

    if (type !== 'admin') throw new AuthError("Apenas administradores podem deletar clientes");

    if (!clientId) throw new AuthError("Id não informado")

    deleteHandler(clientId as string);

    res.status(200).json({ message: `Cliente deletado`}); return;
}