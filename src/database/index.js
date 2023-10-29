import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://johnolawole1:tY2CUAdaAP4CtGtu@cluster0.bipauxh.mongodb.net/netflix--clone?retryWrites=true&w=majority")

        console.log("mongodb is connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;