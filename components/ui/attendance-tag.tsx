import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export function AttendanceTag({
  tagText,
  children,
  style,
}: {
  tagText: string;
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tagText}</Text>
      <View style={style}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5B2EFF50",
    borderRadius: 100,
    flexDirection: "row",
    gap: 5,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    color: "#5B2EFF",
    fontFamily: "Poppins-Medium",
  },
});
