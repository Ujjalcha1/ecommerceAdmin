import { SwitchTypes } from "./types/switchTypes";

const UserSwitch = ({ userType, onChangeType }: SwitchTypes) => {
  const onChangeUser = (value: string) => {
    onChangeType(value);
  };

  return (
    <div
      className="shadow-6 flex flex-row relative border-round-2xl overflow-hidden h-2rem align-items-center w-10rem m-2 "
      style={{
        float: "right",
      }}
    >
      <div
        className="w-6rem h-3rem align-items-center justify-content-center flex cursor-pointer z-1 transition-transform"
        onClick={() => onChangeUser("Admin")}
      >
        <h1
          className={`text-lg ${
            userType === "Admin" ? "text-white" : "text-black-alpha-90"
          }`}
        >
          Admin
        </h1>
      </div>
      <div
        className="w-6rem h-3rem align-items-center justify-content-center flex cursor-pointer z-1 transition-transform"
        onClick={() => onChangeUser("Brand")}
      >
        <h1
          className={`text-lg ${
            userType === "Brand" ? "text-white" : "text-black-alpha-90"
          }`}
        >
          Brand
        </h1>
      </div>

      <span
        className={`bg-orange-400 absolute top-0 w-5rem h-full border-400 ${
          userType === "Admin" ? "left-0" : "left-50"
        }`}
        style={{
          transition: "left 0.4s",
        }}
      ></span>
    </div>
  );
};

export default UserSwitch;
