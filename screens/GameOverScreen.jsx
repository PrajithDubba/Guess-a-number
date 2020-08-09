import React from "react";
import ListView from "../components/ListView";
import { StyleSheet, View, Text, Button } from "react-native";

export default (props) => {
  return (
    <View style={styles.mainScreen}>
      <Text>Game is Over!!!!!!</Text>
      <Text>
        The Number guessed was:{" "}
        <Text style={styles.bold}>{props.usersInput}</Text>
      </Text>
      <Text>Numbers guessed by computer were:</Text>
      <ListView data={props.guessStack} />
      <Button title="Start a new Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    width: "100%",
  },
  centerText: {
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
});
