import { Request,Response } from "express"
const AsyncWrapper = function(fn:any){
    return (req:Request,res:Response)=>{
        fn.catch((err:Error)=>{
            return res.status(500).json({
            message:"Internal Server Error",
            error : err.message
        })
        })
    }
}