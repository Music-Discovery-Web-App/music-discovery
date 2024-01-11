import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchRecommendations } from "src/queries";
import SongSearch from "./SongSearch";

const TestField = ({ songName, accessToken }) => {
  const { data: songs, isLoading, error } = useQuery(
    ["fetchRecommendations", songName],
    () => fetchRecommendations(songName, accessToken),
    {
      enabled: !!songName,
    }
  );
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with name", name);
    setSearch(name);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex=col items-center mb-4"
        >
          <label className="p-4">Enter song name</label>
          <input
            type="text"
            onChange={handleChange}
            value={name}
            className="border"
          />

          <div className="flex justify-center">
            <button
              className="btn border-rounded-xl p-3 bg-gray-200 hover:shadow-md border-2"
              type="submit"
            >
              get recommendations
            </button>
          </div>
        </form>
        <SongSearch songName={search} accessToken={accessToken} />
      </div>
    </div>
  );
};

export default TestField;
