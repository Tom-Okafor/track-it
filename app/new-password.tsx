import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { createInitialState, useForm } from "@/hooks/use-form";
import { StatusBar, StyleSheet, View } from "react-native";

export default function NewPassword() {
  const { enterNewPasswordPage } = authPageInfoGroup;
  const initialState = createInitialState(enterNewPasswordPage);
  const { formState, updateFormState } = useForm({ initialState });
  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthScreen
        pageInfo={enterNewPasswordPage}
        value={formState}
        changeValue={updateFormState}
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
