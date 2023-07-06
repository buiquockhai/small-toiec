import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "./loading";

export default function SuspenseLayout() {
  return (
    <Suspense fallback={<Loading loading />}>
      <Outlet />
    </Suspense>
  );
}
