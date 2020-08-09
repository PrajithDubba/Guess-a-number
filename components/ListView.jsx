import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default (props) => {
  return (
    <View style={styles.mainScreen}>
      <FlatList
        data={props.data}
        renderItem={(each) => {
          return (
            <View style={styles.flatListView}>
              <Text>{each.item.value}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    marginVertical: 20,
  },
  flatListView: {
    height: 25,
    width: 300,
    marginVertical: 2.5,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowOffset: { width: 20, height: 20 },
    backgroundColor: "white",
  },
});
