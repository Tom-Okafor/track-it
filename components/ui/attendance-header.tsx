import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function AttendanceHeader({
  head1,
  head2,
  head3,
  head4,
  head5,
}: {
  head1: string;
  head2: string;
  head3: string;
  head4: string;
  head5: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{head1}</Text>
      <Text style={styles.text}>{head2}</Text>
      <Text style={styles.text}>{head3}</Text>
      <Text style={styles.text}>{head4}</Text>
      <Text style={styles.text}>{head5}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    color: "#000000",
    fontWeight: 500,
    fontFamily: "Poppins-Medium",
  },
});
