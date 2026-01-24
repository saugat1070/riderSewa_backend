import { Request,Response } from "express"
import {validationResult} from "express-validator"
import MapService from "../Services/map.service.js";

export const getCoordinate = async (req:Request,res:Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            error : errors.array()
        })
    }
    const {address} = req.body;
    try {
        const coordinate = await MapService.getAddress(String(address));
        return res.json({res:coordinate})
    } catch (error:any) {
        return res.status(500).json({
            message:"Internal Server Error",
            error : error.message
        })
    }
}