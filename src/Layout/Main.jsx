import { Outlet } from "react-router-dom";

import Header from "../Shared/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
