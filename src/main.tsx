import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { createRouter, RouterProvider } from "@tanstack/react-router";
// import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const router = createRouter({ routeTree });

const queryClient = new QueryClient();

// import '@/app/styles/index.scss';
import "./styles/index.scss";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router}/> */}
        <App />
    </QueryClientProvider>
  </StrictMode>
);
