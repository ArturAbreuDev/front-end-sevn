import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArticlesProvider } from "./context/QueryContext";
import App from "./routes/Home";
import Articles from "./routes/Articles";
import NotFound from "./routes/NotFound"; 


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <ArticlesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/articles/:id" element={<Articles />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ArticlesProvider>
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);
