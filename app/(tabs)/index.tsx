import { HomePageHeader } from "@/components/layout/home-page-header";
import { Wrapper } from "@/components/layout/wrapper";
import { AttendanceDetailCard } from "@/components/ui/attendance-detail-card";
import { MonthSelect } from "@/components/ui/month-select";
import { colors } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const present_icon = require("@/assets/icons/Present Icon.svg");
  const absent_icon = require("@/assets/icons/Absent Icon.svg");
  const early_leave_icon = require("@/assets/icons/Extra Leave Logo.svg");
  const delay_icon = require("@/assets/icons/Delay Logo.svg");
  return (
    <Wrapper style={styles.container}>
      <HomePageHeader />
      <MonthSelect />
      <View style={styles.attendanceDetailBlock}>
        <AttendanceDetailCard
          cardTitle="Present"
          value="70"
          source={present_icon}
        />
        <AttendanceDetailCard
          cardTitle="Absent"
          value="12"
          source={absent_icon}
        />
        <AttendanceDetailCard
          cardTitle="Early Leave"
          value="2"
          source={early_leave_icon}
        />
        <AttendanceDetailCard cardTitle="Delay" value="7" source={delay_icon} />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGray,
    paddingTop: 48,
    gap: 24,
  },
  attendanceDetailBlock: {
    boxSizing: "border-box",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
