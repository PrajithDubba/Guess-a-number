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

export default function App() {
  const [userSelectedInput, SetUserSelectedInput] = useState();
  const [roundCount, setRoundCount] = useState(0);

  const configureNewGame = () => {
    SetUserSelectedInput(null);
    setRoundCount(0);
  };

  const inputHandler = (selectedInput) => {
    SetUserSelectedInput(selectedInput);
  };

  const roundCountHandler = (count) => {
    setRoundCount(count);
  };

  let currentScreen = <GuessScreen onStartGame={inputHandler} />;
  if (userSelectedInput && roundCount <= 0) {
    currentScreen = (
      <GameScreen
        userInput={userSelectedInput}
        roundCounter={roundCountHandler}
      />
    );
  } else if (roundCount > 0) {
    currentScreen = (
      <GameOverScreen
        roundsCount={roundCount}
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
