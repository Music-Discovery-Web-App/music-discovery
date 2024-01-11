import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import TestField from "./components/TestField";
import ResultSidebar from "./components/ResultSidebar";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-full">
        <TestField songName={undefined} accessToken={undefined} />
        <ResultSidebar recommendations={undefined} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
