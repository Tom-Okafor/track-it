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

export default function Login() {
  const { loginPage } = authPageInfoGroup;
  const initialState = createInitialState(loginPage);
  const initialErrors = createInitialErrors(loginPage);
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

  const { login } = useUserContext();

  async function handleLogin(email: string, password: string) {
    let errorCount = 0;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    try {
      if (!emailRegex.test(email)) {
        updateErrors("email", "Please input a valid email");
        errorCount++;
      }

      if (!errorCount) {
        const userLogin = await login(email, password);
        if (userLogin.success) {
          router.push("/(tabs)");
        } else {
          updateErrors(
            "email",
            typeof userLogin.response === "string"
              ? userLogin.response
              : "Login unsuccessful. Please check credentials"
          );
          updateFormState("password", "");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const disabled = isEmpty() || hasError();
  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthScreen
        pageInfo={loginPage}
        value={formState}
        changeValue={updateFormState}
        onPress={() => {
          handleLogin(formState.email, formState.password);
        }}
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
