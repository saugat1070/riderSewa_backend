import Env from "../Config/envConfig.js";
import axios from "axios";

class MapServiceClass {
  private apiKey: string;
  constructor() {
    this.apiKey = Env.googleSecretKey;
  }
  public async getAddress(
    address: string,
  ): Promise<{ ltd: number; lng: number }> {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
      const res = await axios.get(url);
      if (res.status == 200) {
        const coordinate = res.data.results[0].geometry.location;
        return {
          ltd: coordinate.lat,
          lng: coordinate.lng,
        };
      } else {
        throw new Error("Unable to fetch coordinates");
      }
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error);
    }
  }

  public async getDistanceTime(origin: string | number, destination: string | number) {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json
  ?destinations=${encodeURIComponent(destination)}
  &origins=${encodeURIComponent(origin)}
  &units=imperial
  &key=${this.apiKey}`;
    if (!origin || !destination) {
      throw new Error("Origin and Destination must be provided");
    }
    try {
      const response = await axios.get(url);
      if(!response){
        throw new Error("Unable to fetch Distance and Tiem");
      }
      return response.data?.rows[0]?.elements[0];
    } catch (error:any) {
        console.error("Error at Distance and Time:", error.message);
        throw new Error(error.message)
    }
  }

  public async getAutoCompleteSuggestion(input:string){
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      if(!response){
        throw new Error("Unable to fetch Auto Suggestion");
      }
      return response.data?.predictions.map((place:any) => place.description);
    } catch (error) {
      
    }
  }
}
const MapService = new MapServiceClass();
export default MapService;
