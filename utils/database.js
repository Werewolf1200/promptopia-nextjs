import mongoose from "mongoose";

export const connectToDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'promptopia'
        })
    console.log("MongoDB Connected!!")
        
    } catch (error) {
        console.log(error)
    }
}