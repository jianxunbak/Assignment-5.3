import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Coffee from "./screens/Coffee";
import AntDesign from "@expo/vector-icons/AntDesign";
import Settings from "./screens/Settings";
import Feather from "@expo/vector-icons/Feather";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="settings" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  // const drawerNavigator = () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="TabNavigator" component={TabNavigator} />
  //       <Drawer.Screen name="Settings" component={Settings} />
  //     </Drawer.Navigator>
  //   );
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        {/* <Stack.Screen name="DrawerNavigator" component={drawerNavigator} /> */}
        <Stack.Screen name="Coffee" component={Coffee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
