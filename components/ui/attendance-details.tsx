import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function AttendanceDetails({
  detail1,
  detail2,
  detail3,
  detail4,
  children,
}: {
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text1]}>{detail1}</Text>
      <Text style={styles.text}>{detail2}</Text>
      <Text style={styles.text}>{detail3}</Text>
      <Text style={styles.text}>{detail4}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "#000000",
    fontWeight: 500,
    fontFamily: "Poppins-Medium",
    fontSize: 10,
  },
  text1: {
    color: "#5B2EFF",
  },
});
