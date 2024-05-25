import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FiAtSign, FiEyeOff, FiEye, FiLock } from "react-icons/fi";

const AdminLogin = () => {
  return (
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
  );
};

export default AdminLogin;
