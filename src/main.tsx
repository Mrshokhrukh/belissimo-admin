import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./LayOut.tsx";
import Login from "./Login.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import Products from "./Products.tsx";
import { Toaster } from "react-hot-toast";
import MainContextProvider from "./hook/MainContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <MainContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<App />} />
              <Route path="login" element={<Login />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
