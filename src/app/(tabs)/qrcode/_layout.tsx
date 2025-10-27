import { Tabs } from "expo-router";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#A60000",
        tabBarInactiveTintColor: "#e9e9e9",
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 6,
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#333333",
          paddingTop: 20,
          marginBottom: 50,
          marginLeft: 35,
          marginRight: 35,
          borderRadius: 8,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Câmera",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={size}
                  color={color}
                />
              );
            }

            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="historicoqrcode"
        options={{
          title: "Histórico",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome5 name="history" size={size} color={color} />;
            }

            return <FontAwesome5 name="history" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
