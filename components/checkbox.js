import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from 'react-native-elements';

export default function Checkbox(props) {
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected);

  const updateValue = () => {
    setSelection(!isSelected);
    props.incrementCount(isSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isSelected}
          onPress={updateValue}
          style={styles.checkbox}
          title={props.label}
        />
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
