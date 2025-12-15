import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, TextInput, View } from "react-native";
import { AuthInputLabel } from "./auth-input-label";

export function AuthInput({
  isPasswordInput,
  labelText,
  placeholderText,
}: {
  isPasswordInput: boolean;
  labelText: string;
  placeholderText: string;
}) {
  return (
    <View style={styles.container}>
      <AuthInputLabel text={labelText} style={styles.label} />
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={colors.darkGrayText}
        style={styles.input}
      />
      {isPasswordInput && (
        <Feather name="eye" size={14} color={colors.primary} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 51,
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
    fontSize: scaleFontSize(12),
    fontWeight: 500,
    color: '#000',
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: "Poppins-Medium",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 26,
    backgroundColor: colors.backgroundGray,
  },
});
