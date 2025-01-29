import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import IndexTwo from "./src/pages/IndexTwo";
import AboutUs from "./src/pages/AboutUs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IndexTwo">
          <Stack.Screen
            name="IndexTwo"
            component={IndexTwo}
            options={{ headerShown: false }}
          />          
          <Stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{ headerTitle: "About Us" }}
          />  
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
