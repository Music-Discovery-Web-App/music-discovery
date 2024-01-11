import axios from "axios";
import { BASE_URL } from "src/shared/utils"

export const fetchToken = async() => {
    const requestConfig = {
        method: "POST",
        url: `${BASE_URL}/api/get_token`,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }
        const response = await axios(requestConfig)
        return response.data

}
