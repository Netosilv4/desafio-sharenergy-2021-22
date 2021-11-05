import { PlantStats } from "../interfaces";
import mongoose from "../models/connection";

export interface PlantDataInterface {
    plantName: string;
    localization: string;
    state: string;
    country: string;
    data: PlantStats[]
}

export const plantSchema = new mongoose.Schema({
    plantName: {
        type: String,
        required: true
    },
    localization: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
},
    { collection: 'power_plant_data' }
)

export const PlantDataModel = mongoose.model<PlantDataInterface>("power_plant_data", plantSchema);