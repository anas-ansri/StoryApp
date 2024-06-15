import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    // NavigationContainer is a component that manages the navigation tree and contains the navigation state.
    <NavigationContainer>
      // Stack.Navigator is a component that manages the navigation stack.
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Write New Story" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
