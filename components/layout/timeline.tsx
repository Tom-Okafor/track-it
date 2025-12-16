import { StyleSheet, View } from "react-native";
import { TimelineHeader } from "../ui/timeline-header";
import { TimelineBlock } from "../ui/timeline-block";

export function Timeline() {
  return (
    <View style={styles.container}>
      <TimelineHeader />
      <TimelineBlock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: "100%",
    alignItems: "center",
  },
});
