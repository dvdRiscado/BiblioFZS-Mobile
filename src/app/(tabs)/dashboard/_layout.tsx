import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#A60000",
        tabBarInactiveTintColor: "#e9e9e9",
        tabBarStyle: {
          position: "absolute",
          bottom: -1,
          backgroundColor: "#1E1E1E",
          height: 120,
          paddingTop: 12,
          width: "101%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Início",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <AntDesign name="home" size={size} color={color} />;
            }

            return <AntDesign name="home" size={size} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="catalog"
        options={{
          headerShown: false,
          title: "Catálogo",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Ionicons name="library-outline" size={size} color={color} />
              );
            }

            return (
              <Ionicons name="library-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="historic"
        options={{
          headerShown: false,
          title: "Histórico",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="book-clock-outline"
                  size={size}
                  color={color}
                />
              );
            }

            return (
              <MaterialCommunityIcons
                name="book-clock-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome5 name="user" size={size} color={color} />;
            }

            return <FontAwesome5 name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
