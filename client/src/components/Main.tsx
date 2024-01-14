import { useState } from "react";
import TestField from "./TestField";

import ResultDisplay from "./ResultDisplay";
import FooterTest from "./FooterTest";
import SidebarTest from "./SidebarTest";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchRecommendations, fetchSong, fetchToken } from "../queries";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [songId, setSongId] = useState<string>("");
  const queryClient = useQueryClient();

  const { data: token } = useQuery("fetchToken", fetchToken, {
    staleTime: 3600
  });

  console.log("searchTerm", searchTerm)
  console.log("token", token)
  const fetchSongMutation = useMutation(() => fetchSong(searchTerm, token), {
    onSuccess: (data) => {
      setSongId(data.spotify_id);
    },
  });

  const { data: recommendations, isLoading: isRecsLoading, error: recError } = useQuery(
    ["fetchRecommendations", songId],
    () => fetchRecommendations(songId, token),
    {
      enabled: !!songId,
    }
  );

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
    if (searchTerm && token) {
      fetchSongMutation.mutate()
    }
  };

  if (isRecsLoading) return <div>Fetching recommendations...</div>
  if (recError) return <div>Error fetching recommendations</div>
  return (
    <div className="w-full h-screen bg-green-200 flex flex-col">
      <div className="flex flex-grow">
        <div className="flex flex-col w-4/5">
          <TestField onSearch={handleSearch} />
          <ResultDisplay recommendations={recommendations} />
        </div>
        <SidebarTest />
      </div>
      <FooterTest />
    </div>
  );
};

export default Main;
