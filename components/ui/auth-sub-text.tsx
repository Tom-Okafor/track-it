import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, Text, TextStyle } from "react-native";

export function AuthSubText({
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
    color: colors.primary,
    fontWeight: 500,
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(12),
    fontFamily: "Poppins-Medium",
  },
});
