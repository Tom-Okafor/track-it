import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { useUserContext } from "@/contexts/user-contexts";
import { createInitialState, useForm } from "@/hooks/use-form";
import { StatusBar, StyleSheet, View } from "react-native";

export default function SignUp() {
  const { signupPage } = authPageInfoGroup;
  const initialState = createInitialState(signupPage);
  const { formState, updateFormState } = useForm({ initialState });
  const { signup } = useUserContext();
  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthScreen
        pageInfo={signupPage}
        value={formState}
        changeValue={updateFormState}
        onPress={() =>
          signup(formState.email, formState.password, formState.fullname)
        }
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
