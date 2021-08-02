import mongoose from 'mongoose'
let URI = 'mongodb+srv://cluster0.vddsv.mongodb.net?retryWrites=true&w=majority'
let db;
export const ConnectDB = async () => {
    if(!db) {
        const data = await mongoose.connect(URI, { 
           useNewUrlParser: true, 
           useUnifiedTopology: true,
           user: process.env.MONGODB_USER,
           pass: process.env.MONGODB_PASS,
           dbName: process.env.MONGODB_DATABASE,
         })
         console.log('🚸 Database Connected')
         return db = data
    }
    console.log('🚸 Database Connected (Cached)')
    return db
}