import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { View, StyleSheet, StatusBar } from "react-native";

export default function SignUp() {
  const { signupPage } = authPageInfoGroup;

  return (
    <View style={styles.container}>
        <StatusBar  />
      <AuthScreen pageInfo={signupPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray
  },
});
