import { FiArrowUp } from "react-icons/fi";
const Dashboard = () => {
  return (
    <div
      className="h-full w-full "
      style={{
        transition: "width 0.5s ease",
      }}
    >
      <div className="grid mt-3 gap-2 flex justify-content-center">
        <div
          className="col-4"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "32%",
          }}
        >
          <h1 className="text-sm m-0 absolute top-1" style={{ left: "10px" }}>
            Total Revenue
          </h1>
          <div className="m-5">
            <h1 className="text-5xl m-0">4545</h1>
            <h1 className="text-lg m-0 text-center">
              <FiArrowUp />
              19%
            </h1>
          </div>
        </div>

        <div
          className="col-4"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "32%",
          }}
        >
          <h1 className="text-sm m-0 absolute top-1" style={{ left: "10px" }}>
            Total User
          </h1>
          <div className="m-5">
            <h1 className="text-5xl m-0">4545</h1>
            <h1 className="text-lg m-0 text-center">
              <FiArrowUp />
              19%
            </h1>
          </div>
        </div>

        <div
          className="col-4"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "32%",
          }}
        >
          <h1 className="text-sm m-0 absolute top-1" style={{ left: "10px" }}>
            Total Order
          </h1>
          <div className="m-5">
            <h1 className="text-5xl m-0">4545</h1>
            <h1 className="text-lg m-0 text-center">
              <FiArrowUp />
              19%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
