import { app } from "./main.js";
import Env from "./Config/envConfig.js";


function ServerRunner(portNumber:Number = 3000){
    app.listen(portNumber,()=>{
        console.log("Server Running at:", portNumber)
    })
};

ServerRunner(Env.portNumber)