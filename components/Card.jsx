import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
  },
});
