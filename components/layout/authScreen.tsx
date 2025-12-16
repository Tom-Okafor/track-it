import { AuthPageInfo } from "@/constants";
import { scaleVerticalSpacing } from "@/utils";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { AuthHeadText } from "../ui/auth-head-text";
import { AuthInput } from "../ui/auth-input";
import { AuthLink } from "../ui/auth-link";
import { AuthSubText } from "../ui/auth-sub-text";
import { BackButton } from "../ui/back-button";
import { BoldVerificationText } from "../ui/bold-verification-text";
import { Button } from "../ui/button";
import { FooterText } from "../ui/footer-text";
import { NumberVerificationBlock } from "../ui/number-verification-block";
import { Wrapper } from "./wrapper";

export function AuthScreen({ pageInfo }: { pageInfo: AuthPageInfo }) {
  const { title, subTitle, inputBlockType, inputBlocks, buttonText, link } =
    pageInfo;
  return (
    <Wrapper style={styles.container}>
      <BackButton />
      <ScrollView
        style={styles.formWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.formWrapper}
      >
        <AuthHeadText text={title} />
        <View style={styles.subTitleBlock}>
          {subTitle.map((item, index) => (
            <AuthSubText key={index} text={item} />
          ))}
        </View>

        {inputBlockType === "verify" && (
          <View style={styles.verifyBlock}>
            <BoldVerificationText />
            <NumberVerificationBlock />
          </View>
        )}
        {inputBlocks && inputBlocks.length > 0 && (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.inputBlock}
          >
            {inputBlocks.map(
              ({ isPasswordInput, label, placeholder }, index) => (
                <AuthInput
                  key={index}
                  isPasswordInput={isPasswordInput}
                  placeholderText={placeholder}
                  labelText={label}
                />
              )
            )}
          </KeyboardAvoidingView>
        )}
        {link && (
          <AuthLink
            text={link.linkText}
            style={{ textAlign: link.linkAlignment }}
          />
        )}

        <View style={styles.btnFooter}>
          <Button btnText={buttonText} />
          <FooterText />
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: scaleVerticalSpacing(48),
    gap: scaleVerticalSpacing(92),
    alignItems: "flex-start",
    paddingBottom: scaleVerticalSpacing(40),
  },
  formWrapper: {
    width: "100%",
    flex: 1,
  },
  subTitleBlock: {
    gap: 4,
  },
  verifyBlock: {
    marginTop: scaleVerticalSpacing(52),
    width: "100%",
    gap: 24,
  },
  inputBlock: {
    gap: 16,
    width: "100%",
    marginBottom: 10,
    marginTop: scaleVerticalSpacing(32),
  },
  btnFooter: {
    marginTop: "auto",
    gap: scaleVerticalSpacing(37),
    alignItems: "center",
    width: "100%",
  },
});
