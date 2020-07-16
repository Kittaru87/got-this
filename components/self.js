import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import { Card } from 'react-native-elements'

export default function Self() {
  const [count, setCount] = useState(0);
  console.log(count);

  const showCount = count;

  const incrementCount = (isSelected) => {
    isSelected ? setCount(count - 1) : setCount(count + 1);
  };

  return (

    <View style={styles.container}>
        <Card title="Self" style={styles.background}>
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
          <Checkbox label="I have meditated" incrementCount={incrementCount} />
          <Checkbox label="I had a nice bath" incrementCount={incrementCount} />
          <Text style={styles.total}>Section total: {showCount}</Text>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9ead3',
    marginTop: Constants.statusBarHeight,
    paddingBottom: 15,
  },
  background: {
    marginHorizontal: 20,
  },
  total: {
    textAlign: 'center',
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
