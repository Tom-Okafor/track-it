import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, Text, View } from "react-native";
import { AuthLink } from "./auth-link";

export function TimelineBlock() {
  return (
    <View style={styles.container}>
      <View style={styles.blockHeadText}>
        <Text style={styles.date}>Date</Text>
        <AuthLink text="July, 2015" style={styles.linkStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: "100%",
  },
  blockHeadText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkStyle: {
    color: colors.black,
    fontFamily: "Poppins-Regular",
  },
  date: {
    color: colors.black,
    fontFamily: "Poppins-Bold",
    fontSize: scaleFontSize(14),
  },
});
