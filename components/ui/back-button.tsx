import { colors } from "@/constants";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export function BackButton() {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()}>
      <FontAwesome6 name="circle-arrow-left" size={28} color={colors.primary} />
    </Pressable>
  );
}
