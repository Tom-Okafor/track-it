import { scaleVerticalSpacing } from "@/utils";
import { StyleSheet, Text, View } from "react-native";

export function BoldVerificationText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter the 6-digit code sent to</Text>
      <Text style={[styles.text, styles.boldText]}>090*****419.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 11,
    color: "#000",
    lineHeight: 32,
    fontFamily: "Poppins-Medium",
    fontWeight: 500,
  },
  boldText: {
    fontSize: 11,
    color: "#000",
    lineHeight: 32,
    fontFamily: "Poppins-Bold",
    fontWeight: 700,
  },
});
