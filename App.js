import react, { useState } from "react";
import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import { Button, View } from "react-native";
import { TouchableOpacity } from "react-native";

const App = () => {
  const [userName, onChangeUserName] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require("./assets/background.png")}>
        <Image source={require("./assets/logo.png")} style={styles.image} />
        <Text style={styles.text}>
          REGISTER
        </Text>
        <TextInput
          style={styles.input}
          placeholder="USERNAME"
          value={userName}
          onChangeText={onChangeUserName}
        />

        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          value={password}
          secureTextEntry
          onChangeText={onChangePassword} />

        <TouchableOpacity style={styles.button}
          onPress={() => {
            alert(`Hello ${userName} ${password}`);
            onChangeUserName("");
            onChangePassword("");
          }}
        >
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  background: {
    flex: 1,
    resizeMode: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200
  },
  button: {
    backgroundColor: "aqua",
    color: 'white',
    padding: 10,
    width: 200,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: "black",
    marginTop: 10
  },
  text: {
    color: "black",
  }
});
export default App;

