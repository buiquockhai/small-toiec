import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";
import SuspenseLayout from "@component/suspense";
import { Layout } from "@component/layout";

const IndexPage = lazy(() => import("@page/index"));
const SubmitPage = lazy(() => import("@page/submit"));

const routes = (
  <Route element={<SuspenseLayout />}>
    <Route element={<Layout />}>
      <Route index element={<IndexPage />}></Route>
      <Route path="/submit" element={<SubmitPage />}></Route>
    </Route>
  </Route>
);

export default function Router() {
  return (
    <RouterProvider
      router={createBrowserRouter(createRoutesFromElements(routes))}
    />
  );
}
