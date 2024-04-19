import { Drawer } from "react-native-paper";

const CustomDrawerNavigation = ({ navigation }) => {
    return (
        <Drawer.Section >
            <Drawer.Item
                label="Home"
                icon={"home"}
                onPress={() => { navigation.navigate('Home'); }}
            />
            <Drawer.Item
                label="Details"
                icon={"star"}
                onPress={() => { navigation.navigate('Details'); }}
            />
        </Drawer.Section>
    );
}

export default CustomDrawerNavigation;