import { UsuarioProvider } from "@/context/UsuarioContext";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <UsuarioProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Inicial", headerShown: false }}
        />
        <Stack.Screen
          name="register"
          options={{ title: "Cadastro", headerShadowVisible: false }}
        />
        <Stack.Screen
          name="login"
          options={{ title: "Login", headerShadowVisible: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="detalheslivro" options={{ headerShown: false }} />
        <Stack.Screen
          name="editprofile"
          options={{ title: "Editar perfil", headerShadowVisible: false }}
        />
        <Stack.Screen
          name="favorites"
          options={{ title: "Favoritos", headerShadowVisible: false }}
        />
      </Stack>
    </UsuarioProvider>
  );
}
