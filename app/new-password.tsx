import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { View, StyleSheet, StatusBar } from "react-native";

export default function NewPassword() {
  const { enterNewPasswordPage } = authPageInfoGroup;

  return (
    <View style={styles.container}>
        <StatusBar  />
      <AuthScreen pageInfo={enterNewPasswordPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray
  },
});
