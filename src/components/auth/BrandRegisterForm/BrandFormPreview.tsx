import { InputText } from "primereact/inputtext";
import { FiAtSign, FiBookOpen } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { RiBankLine } from "react-icons/ri";
import { FiChevronLeft } from "react-icons/fi";
import { Button } from "primereact/button";
import { brandRegister } from "./types/type";

const BrandFormPreview = ({
  onDecrease,
  onSubmit,
  registerForm,
}: brandRegister) => {
  return (
    <div
      className="grid flex justify-content-center mt-5"
      style={{ height: "80%" }}
    >
      <div className="col-8">
        <div className="p-inputgroup flex-1 mb-3">
          <span className="p-inputgroup-addon">
            <FiAtSign size={20} />
          </span>
          <InputText placeholder="Email" disabled value={registerForm.email} />
        </div>

        <div className="p-inputgroup flex-1 mb-3">
          <span className="p-inputgroup-addon">
            <GoVerified size={20} />
          </span>
          <InputText placeholder="GSTIN" disabled value={registerForm.gstin} />
        </div>

        <div className="p-inputgroup flex-1 mb-3">
          <span className="p-inputgroup-addon">
            <GoVerified size={20} />
          </span>
          <InputText placeholder="CIN" disabled value={registerForm.cin} />
        </div>

        <div className="p-inputgroup flex-1 mb-3">
          <span className="p-inputgroup-addon">
            <FiBookOpen size={20} />
          </span>
          <InputText
            placeholder="Passbook name"
            disabled
            value={registerForm.passbookName}
          />
        </div>

        <div className="p-inputgroup flex-1 mb-3">
          <span className="p-inputgroup-addon">
            <RiBankLine size={20} />
          </span>
          <InputText
            placeholder="Account no."
            keyfilter={"num"}
            disabled
            value={registerForm.accountNo}
          />
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
          </div>
        </div>
      </div>

      <div className="col-12 mt-5 flex justify-content-end align-items-center gap-3">
        <div
          className="bg-orange-400 h-2rem w-2rem border-circle flex justify-content-center align-items-center cursor-pointer"
          onClick={onDecrease}
        >
          <FiChevronLeft size={20} color="white" />
        </div>

        <Button
          label="Register now"
          className="bg-orange-400 border-orange-400 text-lg text-white"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default BrandFormPreview;
