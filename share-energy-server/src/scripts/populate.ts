import { MongoClient } from 'mongodb'
import { PlantDataInterface } from '../schema/plantSchema';
import { User } from '../schema/userSchema';
import { plants, users } from './users';

const dbname = 'share-energy';
const url = `mongodb://root:root@db:27017/${dbname}?authSource=admin`;

export const populateDb = async () => {
  try {
    const client = new MongoClient(url);
    const db = client.db(dbname);
    const userColl = db.collection<User>('users');
    const plantColl = db.collection<PlantDataInterface>('power_plant_data');
    await client.connect()
    let newUsers = 0;
    for (const user of users) {
      const existe = await userColl.find({ numeroCliente: user.numeroCliente }).limit(1).count();
      if (!existe) {
        await userColl.insertOne(user);
        newUsers++
      }
    }
    if (newUsers) console.log(`Inseriu ${newUsers} novos usuários`);
    let newPlants = 0;
    for (const plant of plants) {
      const existe = await plantColl.find({ plantName: plant.plantName }).limit(1).count();
      if (!existe) {
        await plantColl.insertOne(plant);
        newPlants++;
      }
    }
    if (newPlants) console.log(`Inseriu ${newPlants} novas usinas`);
  } catch (e) {
    console.error(e);
  }
}

