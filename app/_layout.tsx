import { InputProvider } from "@/contexts/input-context";
import { UserProvider } from "@/contexts/user-contexts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Medium": require("@/assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins/Poppins-Light.ttf"),
  });
  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]); 
  if (!loaded && !error) return null;

  return (
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </UserProvider>
  );
}
