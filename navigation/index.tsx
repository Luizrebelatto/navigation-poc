import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuth } from "@/contexts/AuthContext";

import DetailScreen from "@/screens/DetailScreen";
import ExploreScreen from "@/screens/ExploreScreen";
import HomeScreen from "@/screens/HomeScreen";
import AuthRoutes from "@/navigation/auth";

export type RootStackParamList = {
  Tabs: undefined;
  Detail: { message: string } | undefined;
};

export type TabParamList = {
  Home: undefined;
  Explore: { message: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#48494B",
        tabBarInactiveTintColor: "#D3D3D3",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const colorScheme = useColorScheme();
  const { signed } = useAuth();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer>
        {signed ? <AppRoutes /> : <AuthRoutes />}
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
