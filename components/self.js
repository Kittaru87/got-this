import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
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

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card title="Self">
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
          <Text style={styles.total}>Section total: {showCount}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
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
