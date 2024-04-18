import react, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Src/Bai2/HomeScreen";
import DetailsScreen from "./Src/Bai2/DetailsScreen";

const stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home"

      >
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Details" component={DetailsScreen} />
      </stack.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
export default App;

