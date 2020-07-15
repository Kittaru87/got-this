import React, { useState } from "react";
import { StyleSheet, Text, View, CheckBox } from "react-native";

export default function Checkbox(props) {
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={() => {
            setSelection;
            props.incrementCount(isSelected);
          }}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
