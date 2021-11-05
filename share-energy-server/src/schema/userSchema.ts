import { UserPowerPlants } from "../interfaces";
import mongoose from "../models/connection";

export interface UserInterface extends mongoose.Document {
    numeroCliente: number;
    nomeCliente: string;
    usuario: string;
    senha: string;
    email: string;
    tipo: string;
    usinas: UserPowerPlants[]
    token: string;
}

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numeroCliente: {
        type: Number,
        required: true
    },
    nomeCliente: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    },
    usinas: [{
        usinaId: {
            type: Number,
            required: true
        },
        percentualDeParticipacao: {
            type: Number,
            required: true
        }
    }]

    }, {
        collection: 'users'
    });

export const UserModel = mongoose.model<UserInterface>('User', userSchema);