import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI || 'mongodb://localhost/test';

mongoose.connect(
    URI
).catch(err => { console.log(err) })

export default mongoose;    