import { MongoClient } from 'mongodb'
import { plants, users } from './users';

const url = 'mongodb://root:root@db:27017/share-energy?authSource=admin';

export const populateDb = () => {

const client = new MongoClient(url);

client.connect()

client.db('share-energy').collection('users').insertMany(users)
    
client.db('share-energy').collection('power_plant_data').insertMany(plants)
}

