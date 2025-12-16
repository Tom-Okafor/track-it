import { colors } from "@/constants";
import { scaleVerticalSpacing } from "@/utils";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({
  btnText,
  onPress,
  disabled,
}: {
  btnText: string;
  onPress?: () => void;
  disabled: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.touchable, { opacity: disabled ? 0.4 : 1 }]}
      onPress={onPress}
      disabled={disabled}
    >
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
