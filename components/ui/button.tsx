import { colors } from "@/constants";
import { scaleVerticalSpacing } from "@/utils";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({
  btnText,
  onPress,
}: {
  btnText: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: colors.primary,
    width: "100%",
    height: scaleVerticalSpacing(70),
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "Poppins-Medium",
  },
});
