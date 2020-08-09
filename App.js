import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import GuessScreen from "./screens/guessNumberScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [userSelectedInput, SetUserSelectedInput] = useState();
  const [guessStack, setGuessStack] = useState([]);
  const [isFontLoaded, setFontLoaded] = useState(false);
  const loadFonts = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
  };

  if (!isFontLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  const configureNewGame = () => {
    SetUserSelectedInput(null);
    setGuessStack([]);
  };

  const inputHandler = (selectedInput) => {
    SetUserSelectedInput(selectedInput);
  };

  const guessStackHandler = (guessStack) => {
    setGuessStack(guessStack);
  };

  let currentScreen = <GuessScreen onStartGame={inputHandler} />;
  if (userSelectedInput && guessStack.length <= 0) {
    currentScreen = (
      <GameScreen
        userInput={userSelectedInput}
        guessStackHandler={guessStackHandler}
      />
    );
  } else if (guessStack.length > 0) {
    currentScreen = (
      <GameOverScreen
        guessStack={guessStack}
        usersInput={userSelectedInput}
        onRestart={configureNewGame}
      />
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header title={"Guess A Number"} />
        {currentScreen}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
