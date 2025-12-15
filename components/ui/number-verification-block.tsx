import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, TextInput, View } from "react-native";

export function NumberVerificationBlock() {
  return (
    <View style={styles.container}>
      {[...Array(6)].map((_, index) => (
        <TextInput
          key={index}
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          style={styles.input}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
    flexDirection: "row",
  },
  input: {
    height: 54,
    flex: 1,
    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: 10,
    fontFamily: "Poppins-Medium",
    fontSize: scaleFontSize(12),
    marginBottom: 8,
  },
});
