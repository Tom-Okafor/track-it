import { scaleFontSize } from "@/utils";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

export function Wrapper({
  style,
  children,
}: {
  style?: ViewStyle;
  children: React.ReactNode;
}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleFontSize(40),
  },
});
