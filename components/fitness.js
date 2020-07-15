import React, { useState } from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";

export default function Fitness() {
  const [items, setItems] = useState([
    { label: "I have gone for a walk today", selected: false },
  ]);

  const changeSelection = (item) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        (item.selected = !item.selected), (item.label = item.label);
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Fitness</Text>
      <Checkbox
        label={items[0].label}
        onValueChange={changeSelection}
        selected={items[0].selected}
      />
      <Checkbox label="I have done more than 30 mins exercise" />
      <Checkbox label="I have done more than an hour exercise" />
      <Checkbox label="I did some yoga today" />
      <Checkbox label="I went for a run" />
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
