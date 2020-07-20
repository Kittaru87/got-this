import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-elements";

export default function Play() {
  const [count, setCount] = useState(0);
  console.log(count);

  const showCount = count;

  const incrementCount = (isSelected) => {
    isSelected ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Card title="Play" style={styles.background}>
        <Checkbox label="Mario Kart" incrementCount={incrementCount} />
        <Checkbox label="Monopoly" incrementCount={incrementCount} />
        <Checkbox label="Chess" incrementCount={incrementCount} />
        <Checkbox label="Darts" incrementCount={incrementCount} />
        <Checkbox
          label="Lots and lots of television"
          incrementCount={incrementCount}
        />
        <Text style={styles.total}>Section total: {showCount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ead1dc",
    marginTop: Constants.statusBarHeight,
    paddingBottom: 15,
  },
  background: {
    marginHorizontal: 20,
  },
  total: {
    textAlign: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
