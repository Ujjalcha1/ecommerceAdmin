import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FiAtSign, FiEyeOff, FiEye, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BrandLogin = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/brand-register");
  };

  return (
    <div>
      <Formik>
        <Form>
          <div className="p-inputgroup w-25rem mb-3 ">
            <span className="p-inputgroup-addon">
              <FiAtSign size={20} />
            </span>
            <InputText placeholder="Email" />
          </div>

          <div className="p-inputgroup w-25rem mb-3">
            <span className="p-inputgroup-addon">
              <FiLock size={20} />
            </span>
            <Password
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              feedback={false}
              placeholder="Password"
            />
            <span className="p-inputgroup-addon">
              <FiEyeOff size={20} />
            </span>
          </div>

          <div className="flex justify-content-center">
            <Button
              className="bg-orange-400 border-orange-400 text-lg w-10rem text-white"
              label="Login"
            />
          </div>
        </Form>
      </Formik>
      <div className="absolute w-25rem p-0" style={{ bottom: 10 }}>
        <div className="flex justify-content-between">
          <h1
            className="text-sm text-blue-600 cursor-pointer"
            onClick={onNavigate}
          >
            New Brand?
          </h1>
          <h1 className="text-sm text-orange-600 cursor-pointer">
            Forgot Password?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BrandLogin;
