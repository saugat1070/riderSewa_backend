import Env from "../Config/envConfig.js";
import axios from "axios";

class MapService {
  public static async getAddress(address: string) {
    const apiKey = Env.googleSecretKey;
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
      const res = await axios.get(url);
      if (res.status == 200) {
        const coordinate = res.data.results[0].geometry.location;
        return {
            ltd: coordinate.lat,
            lng: coordinate.lng
        }
      }
      else{
        throw new Error("Unable to fetch coordinates");
      }
    } catch (error:any) {
        console.error(error.message);
        throw new Error(error);
    }
  }
}

export default MapService;
