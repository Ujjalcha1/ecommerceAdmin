import { InputText } from "primereact/inputtext";
import { FiBookOpen } from "react-icons/fi";
import { RiBankLine } from "react-icons/ri";
import { FiChevronLeft } from "react-icons/fi";
import { Button } from "primereact/button";
import { brandBankInfo, brandRegister } from "./types/type";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  passbookName: Yup.string().required("Passbook name is required!"),
  accountNo: Yup.string().required("Account number is required!"),
});

const BrandBankInfo = ({
  onIncrease,
  onDecrease,
  registerForm,
}: brandRegister) => {
  const onSubmit = (value: brandBankInfo) => {
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
          <div className="mt-5 relative" style={{ height: "80%" }}>
            <div className=" mb-3">
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <FiBookOpen size={20} />
                </span>
                <InputText
                  name="passbookName"
                  placeholder="Passbook name"
                  value={values.passbookName}
                  onChange={handleChange}
                />
              </div>
              <div className="p-error" role="alert">
                {errors?.passbookName}
              </div>
            </div>

            <div className=" mb-3">
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <RiBankLine size={20} />
                </span>
                <InputText
                  name="accountNo"
                  placeholder="Account no."
                  keyfilter={"num"}
                  value={values.accountNo}
                  onChange={handleChange}
                />
              </div>
              <div className="p-error" role="alert">
                {errors?.accountNo}
              </div>
            </div>

            <div
              className="col-12 mt-5 flex justify-content-end align-items-center gap-3"
              style={{ bottom: 0 }}
            >
              <div
                className="bg-orange-400 h-2rem w-2rem border-circle flex justify-content-center align-items-center cursor-pointer"
                onClick={onDecrease}
              >
                <FiChevronLeft size={20} color="white" />
              </div>

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

export default BrandBankInfo;
