import { placeholderTimeLineCardInfo } from "@/constants";
import { StyleSheet, View } from "react-native";
import { TimelineHeader } from "../ui/timeline-header";
import { TimelineBlock } from "./timeline-block";

export function Timeline() {
  return (
    <View style={styles.container}>
      <TimelineHeader />
      <TimelineBlock dateInfo={placeholderTimeLineCardInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});
