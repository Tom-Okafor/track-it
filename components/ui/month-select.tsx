import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { AuthInputLabel } from "./auth-input-label";

export function MonthSelect() {
  return (
    <View style={styles.container}>
      <AuthInputLabel text="Select Month" style={styles.label} />
      <View style={styles.input}>
        <Text style={styles.inputText}>November</Text>
      </View>
      <Ionicons
        name="chevron-down-circle-outline"
        size={16}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.authBorderBlue,
    position: "relative",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    display: "flex",
  },
  inputText: {
    fontSize: scaleFontSize(14),
    fontWeight: 500,
    color: colors.darkGrayText,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-Medium",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 26,
    backgroundColor: colors.backgroundGray,
  },
});
