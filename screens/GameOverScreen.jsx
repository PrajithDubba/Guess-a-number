import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default (props) => {
  return (
    <View style={styles.mainScreen}>
      <Text>Game is Over!!!!!!</Text>
      <Text>No of Rounds to complete the game is: {props.roundsCount}</Text>
      <Text>The Number guesses was: {props.usersInput}</Text>
      <Button title="Start a new Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
