import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <h1>MainLayout</h1>
      <Outlet />
    </>
  );
};

export default MainLayout;
