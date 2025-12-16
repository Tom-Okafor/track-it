import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, Text, TextStyle } from "react-native";

export function AuthHeadText({
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
    fontFamily: "Poppins-Bold",
    color: colors.primary,
    fontSize: scaleFontSize(32),
  },
});
