import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-elements";

export default function Work() {
  const [count, setCount] = useState(0);
  console.log(count);

  const showCount = count;

  const incrementCount = (isSelected) => {
    isSelected ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Card title="Work" style={styles.background}>
        <Checkbox label="Filed expenses" incrementCount={incrementCount} />
        <Checkbox
          label="Set out of office email"
          incrementCount={incrementCount}
        />
        <Checkbox
          label="Didn't steal any pens"
          incrementCount={incrementCount}
        />
        <Checkbox label="Booked holiday" incrementCount={incrementCount} />
        <Checkbox
          label="Won employee of the month"
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
    backgroundColor: "#c9daf8",
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
