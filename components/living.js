import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-elements";

export default function Living() {
  const [count, setCount] = useState(0);
  console.log(count);

  const showCount = count;

  const incrementCount = (isSelected) => {
    isSelected ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Card title="Living" style={styles.background}>
        <Checkbox label="Paid bills" incrementCount={incrementCount} />
        <Checkbox label="Cleaned kitchen" incrementCount={incrementCount} />
        <Checkbox label="Watered plants" incrementCount={incrementCount} />
        <Checkbox label="Vaccumed house" incrementCount={incrementCount} />
        <Checkbox label="Taken out rubbish" incrementCount={incrementCount} />
        <Text style={styles.total}>Section total: {showCount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce5cd",
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
