import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { useUserContext } from "@/contexts/user-contexts";
import {
  createInitialErrors,
  createInitialState,
  useForm,
} from "@/hooks/use-form";
import { router } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";

export default function SignUp() {
  const { signupPage } = authPageInfoGroup;
  const initialState = createInitialState(signupPage);
  const initialErrors = createInitialErrors(signupPage);
  const {
    formState,
    updateFormState,
    errors,
    updateErrors,
    isEmpty,
    hasError,
  } = useForm({
    initialState,
    initialErrors,
  });
  const { signup } = useUserContext();
  const disabled = isEmpty() || hasError();

  async function handleSignup(
    email: string,
    name: string,
    password: string,
    confirmPassword: string
  ) {
    let errorCount = 0;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    try {
      if (!emailRegex.test(email)) {
        updateErrors("email", "Please input a valid email");
        errorCount++;
      }
      if (password.length < 8) {
        updateErrors(
          "password",
          "Your password must be at least 8 characters long"
        );
        errorCount++;
      } else if (!passwordRegex.test(password)) {
        updateErrors(
          "password",
          "Your password must contain an uppercase letter, a lowercase letter, a digit and a special character"
        );
        errorCount++;
      }
      if (confirmPassword !== password) {
        updateErrors("password", "Passwords do not match");
        errorCount++;
      }

      if (!errorCount) {
        const userSignUp = await signup(email, password, name);
        console.log(userSignUp);
        if (userSignUp.success) {
          router.push("/(tabs)");
        } else {
          updateErrors(
            "email",
            typeof userSignUp.response === "string"
              ? userSignUp.response
              : "Login unsuccessful. Please check credentials"
          );
          updateFormState("password", "");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthScreen
        pageInfo={signupPage}
        value={formState}
        changeValue={updateFormState}
        onPress={() =>
          handleSignup(
            formState.email,
            formState.name,
            formState.password,
            formState.confirmPassword
          )
        }
        errors={errors}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
});
