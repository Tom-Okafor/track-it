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
import { KeyboardAwareScrollView, KeyboardToolbar } from "react-native-keyboard-controller";

export function AuthScreen({
  pageInfo,
  value,
  changeValue,
  onPress,
  errors,
  disabled,
}: {
  pageInfo: AuthPageInfo;
  value?: { [key: string]: string };
  changeValue?: (name: string, value: string) => void;
  onPress?: () => void;
  errors: { [key: string]: string | null };
  disabled: boolean;
}) {
  const { title, subTitle, inputBlockType, inputBlocks, buttonText, link } =
    pageInfo;
  return (
    <Wrapper style={styles.container}>
      <BackButton />
      <KeyboardAwareScrollView
        style={styles.formWrapper}
        contentContainerStyle={styles.formWrapper}
        showsVerticalScrollIndicator={false}
      >
        <View>
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
          {inputBlocks && inputBlocks.length > 0 && value && changeValue && (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.inputBlock}
            >
              {inputBlocks.map(
                ({ isPasswordInput, label, placeholder, name }, index) => (
                  <AuthInput
                    key={index}
                    isPasswordInput={isPasswordInput}
                    placeholderText={placeholder}
                    labelText={label}
                    name={name}
                    value={value}
                    changeValue={changeValue}
                    error={errors[name]}
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
        </View>
        <View style={styles.btnFooter}>
          <Button btnText={buttonText} onPress={onPress} disabled={disabled} />
          <FooterText />
        </View>
      </KeyboardAwareScrollView>
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
    flexGrow: 1,
    gap: scaleVerticalSpacing(80)
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
    marginTop: 'auto',
    gap: scaleVerticalSpacing(37),
    alignItems: "center",
    width: "100%",
  },
});
