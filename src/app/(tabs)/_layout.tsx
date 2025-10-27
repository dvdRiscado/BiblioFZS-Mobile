import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#333333",
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen
        name="qrcode"
        options={{
          title: "Qr Code",
        }}
      />
    </Stack>
  );
}
