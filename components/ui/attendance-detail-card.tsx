import { colors } from "@/constants";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export function AttendanceDetailCard({
  cardTitle,
  value,
  source,
}: {
  cardTitle: string;
  value: string;
  source: string;
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{cardTitle}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={source} style={styles.image} contentFit="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "48%",
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 8,
    boxShadow: "0 0px 3px rgba(0,0,0,0.3)",
  },
  titleText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: "Poppins-Medium",
    lineHeight: 12
  },
  valueText: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "Poppins-Medium",
    lineHeight: 20
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  image: {
    width: 26,
    height: 26,
  },
});
