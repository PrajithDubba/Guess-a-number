import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Keyboard,
  ImagePropTypes,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";
import SelectedNumber from "../components/SelectedNumber";

export default (props) => {
  const [enteredText, setText] = useState("");
  const [confirmedInput, setConfirmedInput] = useState();

  const inputTextHandler = (inputText) => {
    setText(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setText("");
  };

  const confirmHandler = () => {
    if (isNaN(enteredText) || enteredText <= 0 || enteredText > 99) {
      Alert.alert("Invalid Number!", "Please enter a value between 1 and 99", [
        { text: "okay", style: "destructive", onPress: resetHandler },
      ]);
      setConfirmedInput();
      return;
    }
    setConfirmedInput(parseInt(enteredText));
    setText("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={styles.startText}>Start a new game!!!</Text>
      </View>
      <Card>
        <Text>{"Enter a number"} </Text>
        <Input
          style={styles.inputText}
          keyboardType="number-pad"
          maxLength={2}
          blurOnSubmit={true}
          onChangeText={inputTextHandler}
          textAlign="center"
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="reset"
              color={Colors.secondary}
              onPress={resetHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="confirm"
              color={Colors.primary}
              onPress={confirmHandler}
            />
          </View>
        </View>
      </Card>
      {confirmedInput && (
        <Card>
          <View style={styles.main}>
            <Text>You Selected</Text>
            <SelectedNumber>{confirmedInput}</SelectedNumber>
            <Button
              title="START GAME"
              onPress={props.onStartGame.bind(this, confirmedInput)}
            />
          </View>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  startText: {
    fontFamily: "open-sans-bold",
  },
  title: {
    paddingVertical: 5,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 200,
    maxWidth: "80%",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  inputText: {
    width: 50,
  },
  button: {
    width: 80,
  },
});
