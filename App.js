import react, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Src/Bai2/HomeScreen";
import DetailsScreen from "./Src/Bai2/DetailsScreen";
import MyRouter from "./Router/MyRouter";
import { PaperProvider } from "react-native-paper";
import MyDrawerNavigation from "./Router/MyDrawerNavigation";
import MyBottomNavigation from "./Router/MyBottomNavigation";



const App = () => {

  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <MyRouter /> */}
        {/* <MyDrawerNavigation />
         */}
        <MyBottomNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
export default App;

