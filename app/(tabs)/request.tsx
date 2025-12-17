import { Wrapper } from "@/components/layout/wrapper";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function RequestScreen() {
  return (
    <Wrapper style={styles.container}>
      <Text>Test</Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
