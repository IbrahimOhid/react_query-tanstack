import React from "react";
import MainLayout from "./components/layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FetchOld from "./components/pages/FetchOld.jsx";
import FetchRQ from "./components/pages/FetchRQ.jsx";
import Home from "./components/pages/Home.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FetchInvPage from "./components/pages/FetchInvPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fetchOld",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchInvPage/>
      }
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
