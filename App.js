import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Coffee from "./screens/Coffee";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Details from "./screens/Details";

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home Page",
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="home" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            title: "Details",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="settings" size={size} color={color} />;
            },
            // headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Coffee"
          component={Coffee}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const DrawerNavigator = () => {
    const navigation = useNavigation();

    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen
          name="Details"
          component={Details}
          // options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
