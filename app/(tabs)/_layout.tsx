import { TabIcons } from "@/components/ui/tabIcons";
import { colors } from "@/constants";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  const {
    check_in,
    check_in_filled,
    home,
    home_filled,
    calendar,
    calendar_filled,
    request,
    request_filled,
  } = TabIcons();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.bar,
      }}
    >
      <Tabs.Screen
        name="check-in"
        options={{
          title: "Check-in",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={check_in_filled}
                style={{ height: 20, width: 20 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={check_in}
                style={{ height: 20, width: 20 }}
                contentFit="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={home_filled}
                style={{ height: 20, width: 20 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={home}
                style={{ height: 20, width: 20 }}
                contentFit="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "Attendance",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={calendar_filled}
                style={{ height: 20, width: 20 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={calendar}
                style={{ height: 20, width: 20 }}
                contentFit="contain"
              />
            ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Poppins-Medium",
    marginTop: -4,
  },
  bar: {
    backgroundColor: colors.backgroundGray,
  },
});
