import mongoose, { mongo } from "mongoose";

interface IRide extends mongoose.Document{
    _id : mongoose.Types.ObjectId;
    user : mongoose.Types.ObjectId;
    captain ?: mongoose.Types.ObjectId;
    pickupLocation : {
        type : string;
        coordinates : [number,number]; // [longitude,latitude]
    };
    destinationLocation : {
        type : string;
        coordinates : [number,number]; // [longitude,latitude]
    };
    fare : number;
    status : string;
    duration ?: number;
    distance ?: number;
    paymentId ?: mongoose.Types.ObjectId;
    createdAt ?: Date;
    updatedAt ?: Date;
}

