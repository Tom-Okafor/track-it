import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { StyleSheet, Text, View } from "react-native";

export function TimelineBlockCard({
  weekDay,
  day,
  current,
}: {
  weekDay: string;
  day: string;
  current: boolean;
}) {
  return (
    <View style={[styles.container, current && styles.current]}>
      <Text style={styles.text}>{weekDay}</Text>
      <Text style={[styles.text, styles.textDark]}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 88,
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    color: colors.primary,
    fontSize: scaleFontSize(12),
    fontFamily: "Poppins-Regular",
  },
  textDark: {
    fontFamily: "Poppins-Medium",
  },
  current: {
    backgroundColor: colors.primaryFaded,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
