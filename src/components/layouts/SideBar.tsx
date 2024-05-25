import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiMenu } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { SidebarType } from "./types/type";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ isActive, handleClick }: SidebarType) => {
  const location = useLocation();
  const menu = [{ url: "/brand-dashboard", label: "Dashboard" }];

  return (
    <>
      <header>
        <div className="c-dashboard-hw">
          <FiMenu
            className="cursor-pointer"
            size={30}
            color="#fff"
            onClick={handleClick}
          />
        </div>
      </header>
      <div className="c-sidebar-w">
        <Sidebar
          style={{ height: "100vh" }}
          collapsed={isActive}
          backgroundColor="#ffb166"
        >
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#ffb166",
                  color: "#fff",
                },
              },
            }}
          >
            <h3>hfdkjsfhsk</h3>
            {menu.map((item) => (
              <MenuItem
                icon={<MdDashboard />}
                component={<Link to={item.url} />}
                style={{
                  backgroundColor:
                    location.pathname === item.url ? "white" : "#ffb166",
                  color: location.pathname === item.url ? "#ffb166" : "white",
                }}
              >
                {item.label}{" "}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default SideBar;
