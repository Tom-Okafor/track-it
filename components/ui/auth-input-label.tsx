import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, Text, TextStyle } from "react-native";

export function AuthInputLabel({
  text,
  style,
}: {
  text: string;
  style?: TextStyle;
}) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: scaleFontSize(10),
    fontWeight: 500,
    color: colors.faintGrayText,
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 5,
    fontFamily: "Poppins-Medium",
  },
});
