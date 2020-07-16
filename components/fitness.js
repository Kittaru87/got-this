import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";

export default function Fitness() {
  const [count, setCount] = useState(0);
  console.log(count);

  const showCount = count;

  const incrementCount = (isSelected) => {
    isSelected ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Fitness</Text>
      <Checkbox
        label="I have gone for a walk today"
        incrementCount={incrementCount}
      />
      <Checkbox
        label="I have done more than 30 mins exercise"
        incrementCount={incrementCount}
      />
      <Checkbox
        label="I have done more than an hour exercise"
        incrementCount={incrementCount}
      />
      <Checkbox label="I did some yoga today" incrementCount={incrementCount} />
      <Checkbox label="I went for a run" incrementCount={incrementCount} />
      <Text>{showCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
