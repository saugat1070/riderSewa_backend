import {validationResult} from "express-validator";
import { Request,Response } from "express";
import { UserfindByEmail,createUser, generateAuthToken, hashedPassword } from "../Services/user.service.js";
import UserModel from "../models/user.model.js";
import { RegisterDto } from "../DTO/user.dto.js";

export const registerUser = async(req:Request,res:Response)=>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({
            error : erros.array()
        });
    }
    const {firstName,lastName,email,password} : RegisterDto = req.body;
    const isUserExist = await UserfindByEmail(email);
    if(isUserExist){
        return res.status(200).json({
            message :"User with this email is already created"
        });
    }
    const hashedPass = hashedPassword(password);
    const user = await createUser(firstName,lastName,email,hashedPass);
    if(!user){
        return res.status(403).json({
            message:"Request failed at Database creation"
        });
    }
    const token = generateAuthToken(user._id);
    return res.status(200).json({
        message : "User Register successfully",
        token : token,
        user : user
    })
}