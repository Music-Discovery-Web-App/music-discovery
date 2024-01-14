import axios from "axios";
import { BASE_URL } from "../shared/utils";

export const fetchSong = async (songName: string, accessToken: any) => {
  const url = `${BASE_URL}/api/get_song/${songName}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    console.log("URL being called:", url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
