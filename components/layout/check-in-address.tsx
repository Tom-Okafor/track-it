import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export function CheckInAddress() {
  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={24} color={colors.primary} />
      <View>
        <Text style={[styles.text, styles.boldText]}>Check-In Address:</Text>
        <Text style={styles.text}>
          G.R.A, 38 Brass Street, Aba, 450102, Abia, Nigeria
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    gap: 4,
    borderRadius: 5,
    backgroundColor: colors.primary_150,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    boxSizing: "border-box",
  },
  text: {
    fontSize: scaleFontSize(12),
    color: colors.black,
    fontFamily: "Poppins-Medium",
    maxWidth: "95%",
  },
  boldText: {
    fontFamily: "Poppins-Bold",
  },
});
