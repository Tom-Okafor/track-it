import { Wrapper } from "@/components/layout/wrapper";
import { AttendanceDetails } from "@/components/ui/attendance-details";
import { AttendanceFilter } from "@/components/ui/attendance-filter";
import { AttendanceHeader } from "@/components/ui/attendance-header";
import { AttendanceTag } from "@/components/ui/attendance-tag";
import { AuthHeadText } from "@/components/ui/auth-head-text";
import { colors } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function Attendance() {
  const boxes = [];
  for (let i = 1; i <= 10; i++) {
    boxes.push(
      <AttendanceDetails
        detail1="14 Mon"
        detail2="8:42 am"
        detail3="6:02 pm"
        detail4="9 Hrs"
        key={i}
      >
        <Ionicons name="briefcase-outline" size={10} color="black" />
      </AttendanceDetails>
    );
  }

  return (
    <Wrapper style={styles.container}>
      <AuthHeadText
        text="Attendance"
        style={{
          color: colors.black,
          fontWeight: 700,
          fontSize: 18,
          textAlign: "center",
        }}
      />
      <AttendanceFilter month="July, 2025" />
      <View style={styles.tags}>
        <AttendanceTag tagText="Filter by day">
          <FontAwesome name="close" size={7} color="#5B2EFF" />
        </AttendanceTag>
        <AttendanceTag tagText="From Home">
          <FontAwesome name="close" size={7} color="#5B2EFF" />
        </AttendanceTag>
      </View>
      <AttendanceHeader
        head1="Day"
        head2="Check In"
        head3="Check Out"
        head4="Total Hrs"
        head5="Location"
      />
      {boxes}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGray,
    paddingTop: 48,
    flex: 1,
    gap: 20,
  },
  tags: {
    flexDirection: "row",
    gap: 20,
  },
});
