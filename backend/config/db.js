import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://minhtien123:minhtien123@foodfastdelivery.wz7wtg4.mongodb.net/FoodFast').then(()=>console.log("DB Connected"))
}

