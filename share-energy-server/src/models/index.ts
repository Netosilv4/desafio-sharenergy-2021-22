import { NotFound } from "../errors";
import { PlantDataModel } from "../schema/plantSchema";
import { UserInterface, UserModel } from "../schema/userSchema";

export const findUser = async (username: string): Promise<UserInterface> => {
    const usernameReg = new RegExp(username, 'i');

    const user = await UserModel.findOne({ usuario: { $regex: usernameReg } }).lean();

    return user as UserInterface;
}

export const findPlantData = async () => {
    const plantData = await PlantDataModel.find({}).lean();
    
    if (plantData.length === 0) throw new NotFound("Não foi encontrado usinas")

    return plantData
}

export const getClients = async () => {
    const clients = await UserModel.find({ tipo: "cliente" }, { senha: 0, _id: 0 }).lean();

    if (clients.length === 0) throw new NotFound("Não foi encontrado clientes")

    return clients
}


export const updateClient = async ( id: string, body: any) => {
    const updated = await UserModel.findOneAndUpdate({ numeroCliente: Number(id)}, body, { new: true });

    if (updated == null) throw new NotFound("Não foi encontrado cliente com o ID informado")
    
    return updated
}

export const deleteHandler = async (id: string) => {
    const deleted = await UserModel.deleteOne({numeroCliente: Number(id)});

    if (deleted.deletedCount === 0) throw new NotFound("Não foi encontrado cliente com o ID informado")
}