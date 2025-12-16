import { colors } from "@/constants";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function AttendanceFilter({ month }: { month: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left-circle-outline"
            size={17}
            color={colors.primary}
          />
        </TouchableOpacity>

        <Text style={styles.controlsText}>{month}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            color={colors.primary}
            size={17}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconBox}>
        <Feather name="filter" size={20} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "80%",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  controlsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: colors.primary,
    fontWeight: 500,
  },
  iconBox: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
});
