export const colors = {
  primary: "#5B2EFF",
  grayText: "#888888",
  faintGrayText: "#88888880",
  darkGrayText: "#808080",
  authBorderBlue: "#5B2EFF80",
  placeholderGray: "#888888CC",
  backgroundGray: "#F2F2F2",
};

interface InputBlocks {
  placeholder: string;
  label: string;
  isPasswordInput: boolean;
}
export interface AuthPageInfo {
  title: string;
  subTitle: string[];
  inputBlockType?: "verify" | "regular";
  inputBlocks?: InputBlocks[];
  link?: { linkText: string; linkAlignment: "left" | "right" };
  buttonText: string;
}

interface AuthPageGroupType {
  loginPage: AuthPageInfo;
  forgotPasswordPage: AuthPageInfo;
  enterNewPasswordPage: AuthPageInfo;
  signupPage: AuthPageInfo;
  verifyAccountPage: AuthPageInfo;
}

export const authPageInfoGroup: AuthPageGroupType = {
  loginPage: {
    title: "Login",
    subTitle: ["Welcome Back! Your attendance starts here."],
    inputBlocks: [
      {
        placeholder: "Username/Email",
        label: "Username/Email",
        isPasswordInput: false,
      },
      {
        placeholder: "Password",
        label: "Password",
        isPasswordInput: true,
      },
    ],
    link: { linkText: "Forgotten Password?", linkAlignment: "left" },
    buttonText: "Login",
  },

  forgotPasswordPage: {
    title: "Forgot Password?",
    subTitle: ["We'll help you get back in."],
    inputBlockType: "verify",
    link: { linkText: "Resend It", linkAlignment: "right" },
    buttonText: "Continue",
  },

  enterNewPasswordPage: {
    title: "Enter New Password",
    subTitle: [
      "Create a new Password",
      "For security, choose one you haven't used before",
    ],
    inputBlocks: [
      {
        placeholder: "New Password",
        label: "Enter New Password",
        isPasswordInput: true,
      },
      {
        placeholder: "Re-enter Password",
        label: "Confirm Password",
        isPasswordInput: true,
      },
    ],
    buttonText: "Continue",
  },

  signupPage: {
    title: "Sign Up",
    subTitle: ["Create your account", "Get Started with Track-in"],
    inputBlocks: [
      { placeholder: "Full Name", label: "Full Name", isPasswordInput: false },
      {
        placeholder: "Phone Number",
        label: "Phone Number",
        isPasswordInput: false,
      },
      {
        placeholder: "Email Address",
        label: "Email Address",
        isPasswordInput: false,
      },
      {
        placeholder: "Organization/Institution",
        label: "Organization/Institution",
        isPasswordInput: false,
      },
      { placeholder: "Password", label: "Password", isPasswordInput: true },
      {
        placeholder: "Confirm Password",
        label: "Re-enter Password",
        isPasswordInput: true,
      },
    ],
    buttonText: "Sign Up",
  },

  verifyAccountPage: {
    title: "Verify your Account",
    subTitle: ["Almost there..."],
    inputBlockType: "verify",
    buttonText: "Verify Account",
    link: { linkText: "Resend it", linkAlignment: "right" },
  },
};
