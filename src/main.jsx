import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContext from "./components/GlobalContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <GlobalContext>
      <App />
    </GlobalContext>
  </QueryClientProvider>
);
