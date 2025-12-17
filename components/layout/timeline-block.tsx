import { colors, PlaceholderTimeCardType } from "@/constants";
import { scaleFontSize } from "@/utils";
import { ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";
import { AuthLink } from "../ui/auth-link";
import { TimelineBlockCard } from "../ui/timeline-block-card";

export function TimelineBlock({
  style,
  dateInfo,
  containerStyle,
}: {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  dateInfo: PlaceholderTimeCardType[];
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.blockHeadText}>
        <Text style={styles.date}>Date</Text>
        <AuthLink text="July, 2015" style={styles.linkStyle} />
      </View>
      <ScrollView
        contentContainerStyle={[styles.cardBlock, style]}
        showsVerticalScrollIndicator={false}
      >
        {dateInfo.map(({ weekDay, day, current }, index) => (
          <TimelineBlockCard
            weekDay={weekDay}
            day={day}
            current={current}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    width: "100%",
    flex: 1,
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
    rowGap: 50,
    columnGap: 45,
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    flexGrow: 1,
  },
});
