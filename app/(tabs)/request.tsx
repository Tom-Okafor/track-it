import { CheckInAddress } from "@/components/layout/check-in-address";
import { CheckInDetails } from "@/components/layout/check-in-details";
import { TimelineBlock } from "@/components/layout/timeline-block";
import { Button } from "@/components/ui/button";
import { checkInPlaceholderDates } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function RequestScreen() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 40,
      }}
    >
      <Button btnText="Test screen" disabled={false} />
      <TimelineBlock
        dateInfo={checkInPlaceholderDates}
        style={{ flexGrow: 0 }}
      />
      <CheckInAddress />
      <CheckInDetails />
    </View>
  );
}

const styles = StyleSheet.create({});
