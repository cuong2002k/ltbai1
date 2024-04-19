import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../Src/Bai2/HomeScreen";
import DetailsScreen from "../Src/Bai2/DetailsScreen";

const Tabs = createMaterialBottomTabNavigator();
const MyBottomNavigation = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tabs.Screen name="Details"
                component={DetailsScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}

export default MyBottomNavigation;