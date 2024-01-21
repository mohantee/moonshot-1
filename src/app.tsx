import { QueryClientProvider } from "react-query";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { queryClient } from "@/lib/query";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { Home, Results } from "@/pages";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </QueryParamProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
