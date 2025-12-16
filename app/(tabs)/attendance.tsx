import { Wrapper } from "@/components/layout/wrapper";
import { colors } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Attendance() {
  return (
    <Wrapper style={styles.container}>
      <Text>Attendance</Text>
    </Wrapper>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGray,
    paddingTop: 48,
  },
});
