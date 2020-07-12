import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import SelectedNumber from "../components/SelectedNumber";
import Card from "../components/Card";

const randomNumberGenerator = (min, max, excludeNumber) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (excludeNumber && randomNumber === excludeNumber) {
    return randomNumberGenerator(min, max, excludeNumber);
  } else return randomNumber;
};

export default (props) => {
  const min = useRef(1);
  const max = useRef(100);
  let guess = randomNumberGenerator(min.current, max.current, props.userInput);
  const [guessNumber, setGuessNumber] = useState(guess);
  const [roundCount, setRoundCount] = useState(0);

  const { userInput, roundCounter } = props;
  useEffect(() => {
    if (userInput === guessNumber) {
      roundCounter(roundCount);
    }
  }, [guessNumber]);

  const nextGuessHandler = (newMin, newMax, direction) => {
    min.current = newMin;
    max.current = newMax;
    if (
      (direction === 1 && guessNumber < userInput) ||
      (direction === 2 && guessNumber > userInput)
    ) {
      Alert.alert("Dont lie!", "Sorry", [{ text: "okay", style: "cancel" }]);
      return;
    }
    let newGuess = randomNumberGenerator(min.current, max.current);

    setGuessNumber(newGuess);
    setRoundCount((current) => current + 1);
  };
  return (
    <View style={styles.main}>
      <Text>Opponent's Guess</Text>
      <Card>
        <SelectedNumber>{guessNumber}</SelectedNumber>
        <View style={styles.card}>
          <Button
            style={styles.button}
            title="LOWER"
            onPress={nextGuessHandler.bind(this, min.current, guessNumber, 1)}
          />
          <Button
            style={styles.button}
            title="GREATER"
            onPress={nextGuessHandler.bind(this, guessNumber, max.current, 2)}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
    maxWidth: "80%",
    paddingHorizontal: 20,
  },
  button: {
    marginHorizontal: 10,
    width: 70,
  },
});
