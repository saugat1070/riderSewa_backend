import mongoose from "mongoose";
interface ICaptain extends mongoose.Document{
    _id : mongoose.Types.ObjectId;
    color : string;
    plateNumber : string;
    modelName : string;
    capacity : number;
    vechicleType : string;
    createdAt ?: Date;
    updatedAt ?: Date;
}

const vechicleSchema : mongoose.Schema = new mongoose.Schema<ICaptain>({
    color : {
        type : String,
        required : true
    },
    plateNumber : {
        type : String,
        required : true,
        unique : true
    },
    modelName : {
        type : String,
        required : true
    },
    capacity : {
        type : Number,
        required : true
    },
    vechicleType : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const VechicleModel = mongoose.model<ICaptain>("vechicle",vechicleSchema);
export default VechicleModel;