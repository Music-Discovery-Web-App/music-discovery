import axios from "axios";
import { BASE_SPOTIFY_URL } from "src/shared/utils"

export const fetchSong = async(songName: any, accessToken: any) => {
    const response = await axios.get(`${BASE_SPOTIFY_URL}/search`, {
        params: {
            q: songName,
            type: "track",
            limit: "1"
        },
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    });
    return response.data.tracks.items;
}
