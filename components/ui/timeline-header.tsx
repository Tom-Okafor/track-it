import { colors } from "@/constants";
import { scaleFontSize, scaleVerticalSpacing } from "@/utils";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export function TimelineHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Your Timeline</Text>
      <View style={styles.controls}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left-circle-outline"
            size={16}
            color={colors.primary}
          />
        </TouchableOpacity>

        <Text style={styles.controlsText}>Week 1</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            color={colors.primary}
            size={16}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: scaleVerticalSpacing(12),
  },
  headText: {
    fontFamily: "Poppins-Bold",
    fontSize: scaleFontSize(18),
    color: colors.black,
  },
  controls: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  controlsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: colors.black,
  },
});
