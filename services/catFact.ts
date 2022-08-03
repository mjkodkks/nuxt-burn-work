import { getAxiosInstance } from "./axios";

export async function getCatFactService() {
    const axios = getAxiosInstance()
    try {
        const data = await axios.$get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat')
        return {
            isSuccess: true,
            data
        }
    } catch (err) {
      return  {
            isSuccess: false,
            err
        }
    }
}