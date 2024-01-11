import axios from "axios"
import { BASE_URL } from "src/shared/utils"

export const mutateRecommendations = async (recommendations: string | any[]) => {
    try{
    const response = await axios.post(`${BASE_URL}/api/save_reocmmendations`, {
        recommendations: recommendations.slice(0,10),
    }, {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }})
    console.log("Recommendations saved succesfully.")
    return response.data
}catch (error) {
    throw error
}
}
