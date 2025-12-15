import { Welcome } from "@/components/layout/welcome";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/login");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
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
