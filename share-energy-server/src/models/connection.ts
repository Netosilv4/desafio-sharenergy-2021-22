import mongoose from 'mongoose';

const URI = 'mongodb://root:root@db:27017/share-energy?authSource=admin';

mongoose.connect(
    URI
).catch(err => { console.log(err) })

export default mongoose;