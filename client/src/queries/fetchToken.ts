import axios from "axios";
import { BASE_URL } from "../shared/utils";

export const fetchToken = async () => {
  try {
    const requestConfig = {
      method: "POST",
      url: `${BASE_URL}/api/get_token/`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(requestConfig);
    return response.data.access_token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
