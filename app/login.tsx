import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { useUserContext } from "@/contexts/user-contexts";
import { createInitialState, useForm } from "@/hooks/use-form";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Login() {
  const { loginPage } = authPageInfoGroup;
  const initialState = createInitialState(loginPage);
  const { formState, updateFormState } = useForm({ initialState });

  const { login } = useUserContext();

  function handleLogin(email: string, password: string) {
    try {
      login(email, password);
    } catch (error) {
      console.log(error);
    }
  }
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
