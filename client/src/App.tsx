import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import NavbarTest from "./components/NavbarTest";
import Main from "./components/Main";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavbarTest />
      <Main />
    </QueryClientProvider>
  );
};

export default App;
