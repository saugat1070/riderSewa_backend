process.loadEnvFile(".env")
interface EnvConfig {
    portNumber:number;
    dbUrl : string;
    nodeEnv : string
}

const Env : EnvConfig = {
    portNumber : Number(process.env.PORT),
    dbUrl : process.env.DB_URL as string,
    nodeEnv : process.env.NODE_ENV as string
}

export default Env;