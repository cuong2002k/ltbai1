import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Src/Bai2/HomeScreen";
import DetailsScreen from "../Src/Bai2/DetailsScreen";
import CustomNavigationBar from "../Src/Bai2/CustomNavigationBar";

const Stack = createNativeStackNavigator();
const MyRouter = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
                
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default MyRouter;