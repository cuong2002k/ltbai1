import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Src/Bai2/HomeScreen";
import DetailsScreen from "../Src/Bai2/DetailsScreen";
import CustomDrawerNavigation from "../Src/Bai2/CustomDrawerNavigation";
const Drawer = createDrawerNavigator();
const MyDrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerNavigation {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
        </Drawer.Navigator>
    );
}

export default MyDrawerNavigation;