import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://huutinhnguyen1502:tinh1502@foodfastdelivery.wz7wtg4.mongodb.net/FoodFast').then(()=>console.log("DB Connected"))
}

