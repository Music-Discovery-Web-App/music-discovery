import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchRecommendations, fetchToken, fetchSong} from "../queries";

export const TestField = ({onSearch}) => {

  const [input, setInput] = useState("")

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    onSearch(input);
  }
  return (
    <div className="w-full h-1/6 bg-red-200 flex flex-col justify-center">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
        <input
          placeholder="search..."
          onChange={e => setInput(e.target.value)}
          value={input}
          type="text"
          className="p-2 border border-black w-[90%]"
        />
        <button type="submit" className="border border-black p-2 shadow-md bg-white">
          Search
        </button>
        </form>
      </div>
    </div>
  );
};

export default TestField;
