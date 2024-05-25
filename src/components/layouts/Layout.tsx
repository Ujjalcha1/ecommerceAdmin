import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <Fragment>
      <div
        className={`c-dashboard-w ${isActive ? "active" : ""}`}
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <SideBar handleClick={handleClick} isActive={isActive} />
        <main>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
