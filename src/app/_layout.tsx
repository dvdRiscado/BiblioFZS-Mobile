import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicial", headerShown: false, }} />
      <Stack.Screen name="register" options={{ title: "Cadastro", headerShadowVisible: false }} />
      <Stack.Screen name="login" options={{ title: "Login", headerShadowVisible: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detalheslivro" options={{ headerShown: false }} />
      <Stack.Screen name="qrcode" options={{ headerShown: false }} />
      <Stack.Screen name="camqrcode" options={{ headerShown: false }} />
      <Stack.Screen name="historicoqrcode" options={{ headerShown: false }} />
    </Stack>
  );
}
