import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WishlistScreen from "../screens/WishlistScreen";
import SubscriptionsScreen from "../screens/SubscriptionScreen";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 1,
          paddingBottom: 12,
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 2
        },
        tabBarActiveTintColor: "#094e85",
        tabBarInactiveTintColor: "#7e7e7e",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Subscriptions"
        component={SubscriptionsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="play-circle" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
