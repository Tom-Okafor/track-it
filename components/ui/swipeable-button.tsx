import { colors } from "@/constants";
import { scaleFontSize } from "@/utils";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import ReanimatedSwipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";

import Reanimated from "react-native-reanimated";

function leftAction() {
  return (
    <Reanimated.View style={styles.styleAnimation}>
      <Ionicons name="location-outline" size={20} color={colors.primary} />
      <Text style={styles.leftAction}>Get Location</Text>
    </Reanimated.View>
  );
}
export function SwipeableButton() {
  const swipeableRef = useRef<SwipeableMethods | null>(null);
  return (
    <ReanimatedSwipeable
      ref={swipeableRef}
      leftThreshold={50}
      friction={2}
      enableTrackpadTwoFingerGesture
      containerStyle={styles.container}
      renderLeftActions={leftAction}
      childrenContainerStyle={styles.childContainer}
      overshootLeft={false}
      overshootRight={false}
      onSwipeableOpen={() => {
        swipeableRef?.current?.close();
      }}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome6 name="arrow-right" size={14} color={colors.primary} />
      </View>
      <Text style={styles.text}>Swipe Right to Check In</Text>
    </ReanimatedSwipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: "100%",
    height: 70,
  },

  childContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  leftAction: {
    height: 70,
    width: "100%",
    color: colors.primary,
    fontFamily: "Poppins-Medium",
    fontSize: scaleFontSize(16),
    verticalAlign: "middle",
  },
  styleAnimation: {
    width: "60%",
    flexDirection: "row",
    backgroundColor: colors.primaryFaded,
    paddingLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 10
  },

  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: scaleFontSize(15),
    fontFamily: "Poppins-Medium",
    color: colors.white,
  },
});
