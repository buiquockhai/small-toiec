import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <Link
        to="/"
        className="flex flex-col gap-3 items-center justify-center"
        aria-label="home"
      >
        <img src="/logo.png" alt="logo" className="w-10 object-contain" />
        <h1 className="text-xl font-bold">Small TOIEC</h1>
      </Link>
      <Outlet />
    </div>
  );
}
