import UserModel from "../models/user.model.js";

export const createUser = async(firstName:string,lastName:string,email:string,password:string)=>{
    const user = await UserModel.create({
        fullName : {
            firstName,lastName
        },
        email : email,
        password : password
    }
    );
    return user;
}