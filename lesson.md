# React Native - Navigation

## Part 1 - Tab & Stack Navigation

### Step 1: Create Tab Navigation RN Project

In the root directory, run this command to create a RN project:

```sh
$ npx create-expo-app --template blank TabApp
```

### Step 2: Install Dependency

Run this command on Terminal to install the dependency via npm.

```sh
$ # change directory to RN project root folder
$ cd ./TabApp

$ # install dependency
$ npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack
```

You may required to install additional dependencies on expo. You don't have to run the following commands if you are not prompted to:

```sh
npm install react-native-screens react-native-safe-area-context
```

### Step 3: Add code for tab navigation

In your `App.js`, let's create a basic tab navigation structure with customized icons and styling.

```javascript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Basic screen components
const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
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
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
```

### Step 4: Add code for stack navigation

Stack navigation allows us to push and pop screens like a stack of cards. We'll implement it as a wrapper around our Tab Navigator to enable additional screen navigation.

```javascript
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Nested navigator: Tab navigator lives inside Stack navigator */}
        <Stack.Screen name="Tab Navigator" component={TabNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Step 5: Navigation Hooks and Effects

React Navigation provides powerful hooks for handling navigation and screen focus states.

#### Using useNavigation

The useNavigation hook gives us access to navigation methods anywhere in our app:

```javascript
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigate = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Go to settings"
        onPress={() => {
          // Navigate with parameters
          navigate.navigate("Settings", { name: "Jane", age: 20 });
        }}
      />
      <Button
        title="Go to profile"
        onPress={() => {
          navigate.navigate("Profile");
        }}
      />
    </View>
  );
}
```

### Handling Route Parameters

In the destination screen, access parameters using the route prop:

```javascript
function SettingsScreen({ route }) {
  // Destructure parameters with defaults
  const { name, age } = route.params || { name: "Default name", age: 10 };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}
```

### Using useFocusEffect

The useFocusEffect hook allows you to perform actions when a screen comes into focus:

```javascript
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect } from "react";

function SettingsScreen() {
  useFocusEffect(
    useCallback(() => {
      // This runs when the screen comes into focus
      console.log("Settings screen is focused");

      // Optional cleanup function
      return () => {
        console.log("Settings screen is unfocused");
      };
    }, [])
  );

  useEffect(() => {
    console.log("Settings screen is mounted");
  }, []);

  // The rest are the same

  return <View>{/* Your screen content */}</View>;
}
```

Key points about useFocusEffect:

1. It runs when the screen comes into focus, not just on mount
2. Use useCallback to memoize the effect function
3. Great for fetching data or updating UI when the screen becomes active
4. Can include cleanup operations when the screen loses focus

## Part 2 - Drawer Navigation

### Step 1: Create Drawer Navigation RN Project

Navigate to the root directory of this git repository to create a new project with similar command. Run the following command on Terminal:

```sh
$ npx create-expo-app --template blank DrawerApp
```

### Step 2: Install Dependencies

```sh
$ # change directory
$ cd ./DrawerApp
$ # install dependencies
$ npm install @react-navigation/native @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

Add `import 'react-native-gesture-handler';` at the entry JS file, which is also `App.js`.

### Step 3: Add code

Add the following code in `App.js`

```js
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article!</Text>
    </View>
  );
}

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
```

## Part 3 (Optional) - Add Icon and Badge to Tab Navigation App

You may go back to the Tab Navigation project to explore adding icons and badge to it. Just follow the documentation [here](https://reactnavigation.org/docs/tab-based-navigation)
