const { useState } = require("react");
import react from "react";
const { Appbar } = require("react-native-paper");

function CustomNavigationBar({ navigation, route, options, back, }) {
    const [visible, SetVisible] = useState(false);
    const OpenMenu = () => SetVisible(true);
    const CloseMenu = () => SetVisible(false);
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={route.name} />

            {!back ? (
                <Menu
                    visible={visible}
                    onDismiss={CloseMenu}
                    anchor={<Button onPress={OpenMenu}>Show menu</Button>}>
                    <Menu.Item onPress={() => { }} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Item 3" />
                </Menu>
            ) : null}
        </Appbar.Header>
    );

}

export default CustomNavigationBar;