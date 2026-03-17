process.loadEnvFile(".env")
interface EnvConfig {
    portNumber:number;
    dbUrl : string;
    nodeEnv : string;
    jwtSecret : string;
    googleSecretKey : string;
}

const Env : EnvConfig = {
    portNumber : Number(process.env.PORT),
    dbUrl : process.env.DB_URL as string,
    nodeEnv : process.env.NODE_ENV as string,
    jwtSecret : process.env.JWT_SECRET_KEY as string,
    googleSecretKey : process.env.GOOGLE_API_KEY as string
}

export default Env;
