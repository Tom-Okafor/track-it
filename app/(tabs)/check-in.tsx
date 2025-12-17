import { CheckInAddress } from "@/components/layout/check-in-address";
import { CheckInDetails } from "@/components/layout/check-in-details";
import { HomePageHeader } from "@/components/layout/home-page-header";
import { TimelineBlock } from "@/components/layout/timeline-block";
import { Wrapper } from "@/components/layout/wrapper";
import { SwipeableButton } from "@/components/ui/swipeable-button";
import { checkInPlaceholderDates, colors } from "@/constants";
import React from "react";
import { StyleSheet } from "react-native";


export default function CheckIn() {
  return (
      <Wrapper style={styles.container}>
        <HomePageHeader />
        <CheckInAddress />
        <TimelineBlock
          dateInfo={checkInPlaceholderDates}
          style={styles.date}
          containerStyle={{ flex: 0 }}
        />
        <CheckInDetails />
        <SwipeableButton />
      </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGray,
    paddingTop: 48,
    gap: 24,
  },
  date: {
    flexWrap: "nowrap",
    justifyContent: "space-between",
    columnGap: "auto",
  },
});
