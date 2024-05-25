import { useState } from "react";
import UserSwitch from "../../components/userSwitch/UserSwitch";
import AdminLogin from "../../components/auth/AdminLogin";
import BrandLogin from "../../components/auth/BrandLogin";

const Login = () => {
  const [selectedType, setSelectedType] = useState("Admin");

  const onChangeType = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className="h-25rem w-30rem bg-white shadow-5 border-round-xl">
        <div className="flex justify-content-center align-items-center w-full h-full flex-column relative">
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <UserSwitch userType={selectedType} onChangeType={onChangeType} />
          </div>
          {selectedType === "Admin" ? <AdminLogin /> : <BrandLogin />}
        </div>
      </div>
    </div>
  );
};

export default Login;
