export type brandRegister = {
  onIncrease?: ((e: any) => void) | undefined;
  onDecrease?: () => void;
  onSubmit?: () => void;
  registerForm?: any;
};

export type brandInfo = {
  email: string;
  gstin: string;
  cin: string;
  password: string;
  confirmPassword: string;
};

export type brandBankInfo = {
  passbookName: string;
  accountNo: string;
};
