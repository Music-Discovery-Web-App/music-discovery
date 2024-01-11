import axios from "axios";
import { BASE_URL } from "src/shared/utils";


export const fetchRecommendations = async(seedTracks: any, accessToken: any) => {
    const response = await axios.get(`${BASE_URL}/api/recommendations`, {
        params: { seed_tracks: seedTracks},
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        }
    } );
    return response.data;
}
