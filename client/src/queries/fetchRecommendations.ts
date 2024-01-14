import axios from "axios";
import { BASE_URL } from "../shared/utils";

export const fetchRecommendations = async (
  seedTracks: string,
  accessToken: string
) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/get_recommendations/`, {
      params: { seed_tracks: seedTracks },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    return response.data.Recommendations;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
