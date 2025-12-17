import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export function CheckInDetails() {
  const icon = require("@/assets/icons/Extra Leave Logo.svg");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>checked in @</Text>
        <Text style={styles.boldText}>8:42 am</Text>
        <Text style={styles.text}>On time</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={icon} contentFit="contain" style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: colors.white,
    // alignItems: "stretch",
    boxShadow: "0 4px 4px rgba(0,0,0,0.1)",
  },
  image: {
    height: 29,
    width: 26,
  },
  imageWrapper: {
    justifyContent: "flex-end",
  },
  text: {
    fontSize: scaleFontSize(11),
    color: colors.black,
    fontFamily: "Poppins-Regular",
  },
  boldText: {
    color: colors.primary,
    fontSize: scaleFontSize(19),
    fontFamily: "Poppins-Medium",
  },
});
