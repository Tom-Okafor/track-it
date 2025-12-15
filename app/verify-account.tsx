import { AuthScreen } from "@/components/layout/authScreen";
import { authPageInfoGroup, colors } from "@/constants";
import { StatusBar, StyleSheet, View } from "react-native";

export default function VerifyAccount() {
  const { verifyAccountPage } = authPageInfoGroup;

  return (
    <View style={styles.container}>
      <StatusBar />
      <AuthScreen pageInfo={verifyAccountPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
});
