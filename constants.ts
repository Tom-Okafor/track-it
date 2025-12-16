export const colors = {
  primary: "#5B2EFF",
  grayText: "#888888",
  faintGrayText: "#88888880",
  darkGrayText: "#808080",
  authBorderBlue: "#5B2EFF80",
  placeholderGray: "#888888CC",
  backgroundGray: "#F2F2F2",
  white: "#FFF",
  black: "#000",
  notification: "#FF8888",
};

interface InputBlocks {
  placeholder: string;
  label: string;
  isPasswordInput: boolean;
  name: string;
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
        name: "email",
      },
      {
        placeholder: "Password",
        label: "Password",
        isPasswordInput: true,
        name: "password",
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
        name: "password",
      },
      {
        placeholder: "Re-enter Password",
        label: "Confirm Password",
        isPasswordInput: true,
        name: "confirm password",
      },
    ],
    buttonText: "Continue",
  },

  signupPage: {
    title: "Sign Up",
    subTitle: ["Create your account", "Get Started with Track-in"],
    inputBlocks: [
      {
        placeholder: "Full Name",
        label: "Full Name",
        isPasswordInput: false,
        name: "fullname",
      },
      {
        placeholder: "Phone Number",
        label: "Phone Number",
        isPasswordInput: false,
        name: "phone",
      },
      {
        placeholder: "Email Address",
        label: "Email Address",
        isPasswordInput: false,
        name: "email",
      },
      {
        placeholder: "Organization/Institution",
        label: "Organization/Institution",
        isPasswordInput: false,
        name: "institution",
      },
      {
        placeholder: "Password",
        label: "Password",
        isPasswordInput: true,
        name: "password",
      },
      {
        placeholder: "Confirm Password",
        label: "Re-enter Password",
        isPasswordInput: true,
        name: "confirmPassword",
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
