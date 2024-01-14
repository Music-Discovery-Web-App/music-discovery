import { Recommendations } from "src/shared";

const ResultDisplay = ({ recommendations, isLoading, error }) => {
  if (!recommendations || recommendations.length === 0) {
    return <div>No Recommendations</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-blue-200 flex-7 overflow-x-auto h-[100%]">
      <h2 className="flex justify-center">Recommendations</h2>
      <div className="flex space-x-4 h-full w-full">
      {recommendations &&
        recommendations.map(
          (recommendation: Recommendations, index: number) => (
            <ul key={index} className="flex-none w-96 p-4">
              <li className="mr-10 bg-gray-200 h-[75%] w-[100%] p-10 border border-black border-rounded-xl shadow-lg">
                <h3 className="text">Title: {recommendation.title}</h3>
                <p>Artist: {recommendation.artist}</p>
                <p>Album: {recommendation.album}</p>
              </li>
            </ul>
          )
        )}
    </div>
    </div>
  );
};

export default ResultDisplay;
