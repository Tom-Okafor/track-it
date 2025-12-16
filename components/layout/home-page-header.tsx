import { colors } from "@/constants";
import { scaleFontSize, scaleVerticalSpacing } from "@/utils";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function HomePageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <TouchableOpacity  style={styles.userAvatar}>
          <FontAwesome5 name="user" size={20} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.profileTextBlock}>
          <Text style={styles.welcomeText}>Welcome, Ricky 👋</Text>
          <Text style={styles.userRole}>Operational Officer</Text>
        </View>
      </View>
      <View style={styles.touchableBlock}>
        <TouchableOpacity style={styles.touchable}>
          <Feather name="search" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.notificationBadge}></View>
          <FontAwesome5 name="bell" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileBlock: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  profileTextBlock: {
    gap: 0,
  },
  userAvatar: {
    borderRadius: 25,
    height: scaleVerticalSpacing(42),
    width: scaleVerticalSpacing(42),
    backgroundColor: colors.white,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: scaleFontSize(16),
    color: colors.black,
    fontFamily: "Poppins-Bold",
    lineHeight: scaleFontSize(22)
  },
  userRole: {
    fontSize: scaleFontSize(12),
    color: colors.black,
    fontFamily: "Poppins-Regular",
  },
  touchableBlock: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  touchable: {
    height: 28,
    width: 28,
    borderRadius: 16,
    backgroundColor: colors.white,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    height: scaleFontSize(8),
    width: scaleFontSize(8),
    backgroundColor: colors.notification,
    borderRadius: 8,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
