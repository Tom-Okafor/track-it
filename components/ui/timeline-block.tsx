import { colors, placeholderTimeLineCardInfo } from "@/constants";
import { scaleFontSize, scaleVerticalSpacing } from "@/utils";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { AuthLink } from "./auth-link";
import { TimelineBlockCard } from "./timeline-block-card";

const { width } = Dimensions.get("window");
export function TimelineBlock() {
  return (
    <View style={styles.container}>
      <View style={styles.blockHeadText}>
        <Text style={styles.date}>Date</Text>
        <AuthLink text="July, 2015" style={styles.linkStyle} />
      </View>
      <ScrollView
        contentContainerStyle={styles.cardBlock}
        showsVerticalScrollIndicator={false}
      >
        {placeholderTimeLineCardInfo.map(({ weekDay, day, current }, index) => (
          <TimelineBlockCard weekDay={weekDay} day={day} current={current} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    width: "100%",
    flex: 1
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
    fontSize: scaleFontSize(12),
  },
  date: {
    color: colors.black,
    fontFamily: "Poppins-Bold",
    fontSize: scaleFontSize(14),
  },
  cardBlock: {
    flexDirection: "row",
    rowGap: 14,
    columnGap: 45,
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    flexGrow: 1,
  },
});
