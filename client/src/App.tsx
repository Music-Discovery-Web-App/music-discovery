import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
// import TestField from "./components/TestField";
// import ResultSidebar from "./components/ResultSidebar";

import NavbarTest from "./components/NavbarTest";
import TestField from "./components/TestField";
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
