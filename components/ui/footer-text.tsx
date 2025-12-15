import { colors } from "@/constants";
import { StyleSheet, Text, View } from "react-native";
import { AuthLink } from "./auth-link";

export function FooterText() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.text}>By continuing you agree to CampusGuide's</Text>
      <View style={styles.textGroup}>
        <AuthLink text="Terms of Service" style={styles.footerLink} />
        <Text style={styles.text}>and</Text>
        <AuthLink text="Privacy Policy" style={styles.footerLink} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    fontWeight: 500,
    color: colors.darkGrayText,
    textAlign: "center",
    fontFamily: 'Poppins-Medium'
  },
  footerLink: {
    color: "black",
    textDecorationColor: "black",
    textAlign: "center",
  },
  textGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4
  },
});
