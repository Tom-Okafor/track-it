import { colors } from "@/constants";
import { scaleFontSize, scaleVerticalSpacing } from "@/utils";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { AuthSubText } from "../ui/auth-sub-text";
import { Wrapper } from "./wrapper";

export function Welcome() {
  const radial_image = require("@/assets/images/radial-image.png");
  const logo = require("@/assets/images/capstone-logo.png");

  return (
    <View style={styles.container}>
      <Image
        source={radial_image}
        aria-hidden={true}
        contentFit="contain"
        style={[styles.image, styles.radialImage]}
      />
      <Wrapper style={styles.wrapper}>
        <Image
          source={logo}
          aria-hidden={true}
          style={[styles.image, styles.logoImage]}
          contentFit="contain"
        />
        <View style={styles.textBlock}>
          <AuthSubText
            text="Attendance you can Trust."
            style={styles.centralText}
          />

          <View>
            <Text style={styles.text}>Mobile App from</Text>
            <Text style={[styles.text, styles.blackText]}>Techrise</Text>
          </View>
        </View>
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGray,
    flex: 1,
    paddingBottom: 40,
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  radialImage: {
    height: scaleVerticalSpacing(353),
  },
  logoImage: {
    height: 90,
    marginTop: scaleVerticalSpacing(91),
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBlock: {
    gap: 20,
    alignItems: "center",
  },
  centralText: {
    fontSize: scaleFontSize(15),
    lineHeight: scaleFontSize(15),
  },
  text: {
    fontSize: scaleFontSize(10),
    color: colors.grayText,
    fontFamily: "Poppins-Medium",
    lineHeight: scaleFontSize(10),
    textAlign: "center",
  },
  blackText: {
    color: "#000",
    marginTop: 4,
  },
});
