const { useState } = require("react");
import react from "react";
import { Button } from "react-native";

const { Appbar, Menu, Divider } = require("react-native-paper");

const CustomNavigationBar = ({ navigation, route, options, back, }) => {
    const [visible, SetVisible] = useState(false);
    const OpenMenu = () => SetVisible(true);
    const CloseMenu = () => SetVisible(false);
    return (
        <Appbar.Header dark={false}>
            {back && <Appbar.BackAction onPress={() => navigation.goBack()} />}
            <Appbar.Content title={route.name}

            />

            {!back && (
                <Menu
                    visible={visible}
                    onDismiss={CloseMenu}
                    anchor={
                        <Appbar.Action
                            icon="dots-vertical"
                            onPress={OpenMenu} />
                    }>
                    <Menu.Item
                        onPress={() => { navigation.navigate('Home'); CloseMenu(); }}
                        title="Home" />
                    <Menu.Item
                        onPress={() => { navigation.navigate('Details'); CloseMenu(); }}
                        title="Details" />
                </Menu>
            )}
        </Appbar.Header>
    );

}

export default CustomNavigationBar;