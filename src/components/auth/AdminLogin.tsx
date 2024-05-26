import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FiAtSign, FiEyeOff, FiLock } from "react-icons/fi";
import adminService from "../../services/adminService";

const AdminLogin = () => {
  const adminLogin = (values: any) => {
    adminService
      .adminLogin(values)
      .then((res) => {
        localStorage.setItem("accessToken", res?.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={adminLogin}>
      {({ values, handleChange }) => {
        return (
          <Form>
            <div className="p-inputgroup w-25rem mb-3 ">
              <span className="p-inputgroup-addon">
                <FiAtSign size={20} />
              </span>
              <InputText
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange("email")}
              />
            </div>

            <div className="p-inputgroup w-25rem mb-3">
              <span className="p-inputgroup-addon">
                <FiLock size={20} />
              </span>
              <Password
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                feedback={false}
                placeholder="Password"
              />
              <span className="p-inputgroup-addon">
                <FiEyeOff size={20} />
              </span>
            </div>

            <div className="flex justify-content-center">
              <Button
                type="submit"
                className="bg-orange-400 border-orange-400 text-lg w-10rem text-white"
                label="Login"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdminLogin;
