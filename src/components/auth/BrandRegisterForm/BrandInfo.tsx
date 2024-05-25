import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {
  FiAtSign,
  FiCamera,
  FiEyeOff,
  FiEye,
  FiLock,
  FiRotateCcw,
} from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { brandInfo, brandRegister } from "./types/type";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email"),
  gstin: Yup.string()
    .trim()
    .matches(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
      "Please enter correct GSTIN"
    )
    .required("GSTIN is required!"),
  cin: Yup.string()
    .trim()
    .matches(
      /^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,
      "Please enter correct CIN"
    )
    .required("CIN is required!"),
  password: Yup.string().required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required!"),
});

const BrandInfo = ({ onIncrease, registerForm }: brandRegister) => {
  const [togglePassword, setTogglePassword] = useState(false);

  const handleImageChange = (event: any) => {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      // const reader = new FileReader();
      // reader.onload = () => {
      //   setSelectedImage(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };

  const onSubmit = (value: brandInfo) => {
    if (onIncrease) {
      onIncrease(value);
    }
  };

  return (
    <Formik
      initialValues={registerForm}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, errors }) => (
        <Form>
          <div
            className="grid flex justify-content-center mt-5"
            style={{ height: "80%" }}
          >
            <div className="col-8">
              <div className=" mb-3">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <FiAtSign size={20} />
                  </span>
                  <InputText
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="p-error" role="alert">
                  {errors?.email}
                </div>
              </div>

              <div className=" mb-3">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <GoVerified size={20} />
                  </span>
                  <InputText
                    name="gstin"
                    placeholder="GSTIN"
                    value={values.gstin}
                    onChange={handleChange}
                  />
                </div>
                <div className="p-error" role="alert">
                  {errors?.gstin}
                </div>
              </div>

              <div className=" mb-3">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <GoVerified size={20} />
                  </span>
                  <InputText
                    name="cin"
                    placeholder="CIN"
                    value={values.cin}
                    onChange={handleChange}
                  />
                </div>
                <div className="p-error" role="alert">
                  {errors?.cin}
                </div>
              </div>

              <div className=" mb-3">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <FiLock size={20} />
                  </span>
                  <InputText
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    type={!togglePassword ? "password" : "text"}
                  />
                  <span
                    className="p-inputgroup-addon cursor-pointer"
                    onClick={() => setTogglePassword(!togglePassword)}
                  >
                    {!togglePassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </span>
                  <span className="p-inputgroup-addon">
                    <FiRotateCcw size={20} />
                  </span>
                </div>
                <div className="p-error" role="alert">
                  {errors?.password}
                </div>
              </div>

              <div className=" mb-3">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <FiLock size={20} />
                  </span>
                  <InputText
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="p-error" role="alert">
                  {errors?.confirmPassword}
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="border-1 border-orange-400 h-8rem w-8rem align-items-center justify-content-center flex border-round border-dashed">
                <div className="relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vl7JTcT_gToPMsWNDhBdjq6TsA6o9scv-h0oTgpsfw&s"
                    className="h-6rem w-6rem border-circle"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Uploaded Image"
                  />
                  <div
                    className="absolute h-3rem w-3rem border-circle bottom-0 right-0 cursor-pointer justify-content-center align-items-center flex"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    <FiCamera size={20} className="text-orange-400" />
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 flex justify-content-end align-items-center gap-3">
              <Button
                type="submit"
                label="Save & Next"
                className="bg-orange-400 border-orange-400 text-lg text-white"
                // onClick={onIncrease}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BrandInfo;
