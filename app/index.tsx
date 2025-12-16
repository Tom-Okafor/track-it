import { Welcome } from "@/components/layout/welcome";
import { useUserContext } from "@/contexts/user-contexts";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { current, isLoginIn, logout } = useUserContext();
  useEffect(() => {
    if (!isLoginIn && current) {
      router.replace("/(tabs)");
    } else if (!isLoginIn && !current) {
      router.replace("/signup");
    }
  }, [isLoginIn, current]);
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
