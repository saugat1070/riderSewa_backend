import mongoose from "mongoose";

export enum CaptainStatus {
    OFFLINE = "OFFLINE",
    ONLINE = "ONLINE",
    ON_TRIP = "ON_TRIP"
}

interface ICaptain extends mongoose.Document{
    _id : mongoose.Types.ObjectId;
    fullName : {
        firstName : string;
        lastName : string;
    };
    email : string;
    password : string;
    licenseNumber ?: string;
    vechicleDetails ?: mongoose.Schema.Types.ObjectId;
    socketId ?: string | null;
    status : CaptainStatus;
    user ?: mongoose.Schema.Types.ObjectId;
    createdAt ?: Date;
    updatedAt ?: Date;
}

const captainSchema : mongoose.Schema = new mongoose.Schema<ICaptain>({
    fullName : {
        firstName : String,
        lastName : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : [6,"Password must be at least 6 characters"]
    },
    licenseNumber : {
        type : String,
        unique : true,
        sparse : true
    },
    vechicleDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "vehicle"
    },
    socketId : {
        type : String,
        default : null
    },
    status : {
        type : String,
        enum : Object.values(CaptainStatus),
        default : CaptainStatus.OFFLINE
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
},{
    timestamps : true
});

const CaptainModel = mongoose.model<ICaptain>("captain",captainSchema);
export default CaptainModel;    