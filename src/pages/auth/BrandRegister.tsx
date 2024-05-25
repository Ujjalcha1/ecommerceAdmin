import { Steps } from "primereact/steps";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BrandBankInfo from "../../components/auth/BrandRegisterForm/BrandBankInfo";
import BrandFormPreview from "../../components/auth/BrandRegisterForm/BrandFormPreview";
import BrandInfo from "../../components/auth/BrandRegisterForm/BrandInfo";
import logo from "../../assets/logo-removebg-preview.png";

const Register = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    gstin: "",
    cin: "",
    password: "",
    confirmPassword: "",
    passbookName: "",
    accountNo: "",
    logo: "",
  });

  const items = [
    {
      label: "Brand Info",
    },
    {
      label: "Bank Info",
    },
    {
      label: "Review",
    },
  ];

  const onIncrease = (value: any) => {
    let reqData = { ...registerForm, ...value };
    setActiveStep(activeStep + 1);
    setRegisterForm(reqData);
  };

  const onDecrease = () => {
    setActiveStep(activeStep - 1);
  };

  const onNavigateDashboard = () => {
    navigate("/brand-dashboard");
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
      <div
        className=" bg-white shadow-5 border-round-xl p-3"
        style={{ width: "1000px" }}
      >
        <div className="flex">
          <div className="col-4">
            <div className="flex justify-content-center align-items-center h-27rem">
              <img
                src={logo}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                alt="Flipkart Logo"
              />
            </div>
          </div>
          <div className="col-8">
            <Steps model={items} activeIndex={activeStep} />
            {activeStep === 0 ? (
              <BrandInfo registerForm={registerForm} onIncrease={onIncrease} />
            ) : activeStep === 1 ? (
              <BrandBankInfo
                registerForm={registerForm}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            ) : activeStep === 2 ? (
              <BrandFormPreview
                registerForm={registerForm}
                onDecrease={onDecrease}
                onSubmit={onNavigateDashboard}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
