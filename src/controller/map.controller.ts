import { Request,Response } from "express"
import {validationResult} from "express-validator"
import MapService from "../Services/map.service.js";
import { GetCoordinateDto,GetDistanceTimeDto } from "../DTO/map.dto.js";

export const getCoordinate = async (req:Request,res:Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            error : errors.array()
        })
    }
    const {address}:GetCoordinateDto = req.body;
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

export const getDistanceTime = async(req: Request, res: Response)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            error : error.array()
        });
    }
    const { origin, destination } = req.query as unknown as GetDistanceTimeDto;
    if(!origin || !destination){
        return res.status(400).json({message:"Origin and Destination must be provided"});
    }
    const responseDistanceTime = await MapService.getDistanceTime(origin,destination);
    return res.status(200).json({message:"Success Distance and Time calculation",
        result : responseDistanceTime
    })
}

export const getAutoSuggestion = async (req:Request,res:Response)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    const {address} = req.query as unknown as GetCoordinateDto;
    const responseAutoSuggestion = await MapService.getAutoCompleteSuggestion(address);
    return res.status(200).json({autosuggestion:responseAutoSuggestion})
}