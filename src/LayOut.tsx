import { NavLink, Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <header className="w-full h-[55px] shadow-lg fixed top-0 z-10 bg-white px-10 flex items-center gap-10">
        <NavLink to="/" className={"font-semibold text-xl hover:text-teal-700"}>
          Home
        </NavLink>
        <NavLink to="/products" className={"font-semibold text-xl hover:text-teal-700"}>
          Products
        </NavLink>
        <NavLink to="/products" className={"font-semibold text-xl hover:text-teal-700"}>
          Revenue
        </NavLink>
        <NavLink to="/login" className={"font-semibold text-xl hover:text-teal-700"}>
          Login
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default LayOut;
