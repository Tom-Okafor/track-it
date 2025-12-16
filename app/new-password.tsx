import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import {
  createInitialErrors,
  createInitialState,
  useForm,
} from "@/hooks/use-form";
import { StatusBar, StyleSheet, View } from "react-native";

export default function NewPassword() {
  const { enterNewPasswordPage } = authPageInfoGroup;
  const initialState = createInitialState(enterNewPasswordPage);
  const initialErrors = createInitialErrors(enterNewPasswordPage);
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
  const disabled = isEmpty() || hasError();
  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthScreen
        pageInfo={enterNewPasswordPage}
        value={formState}
        changeValue={updateFormState}
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
