import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Inicial", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Cadastro",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerShadowVisible: false }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="detalheslivro"
        options={{ title: "Detalhes do Livro", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="editprofile"
        options={{ title: "Editar perfil", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "semibold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="historic"
        options={{
          title: "Histórico",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "semibold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
