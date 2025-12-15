import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, Text, TextStyle } from "react-native";

export function AuthLink({ text, style }: { text: string; style?: TextStyle }) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textDecorationColor: colors.primary,
    textDecorationStyle: "solid",
    textDecorationLine: 'underline',
    fontSize: scaleFontSize(10),
    color: colors.primary,
    fontFamily: 'Poppins-Medium'
  },
});
