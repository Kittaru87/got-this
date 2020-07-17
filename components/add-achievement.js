import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { RadioButton } from "react-native-paper";

export default function AddAchievement(props) {
  const [achievement, setAchievement] = useState("");
  const [category, setCategory] = useState("Self");

  const onChangeAchievement = (text) => {
    setAchievement(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextInput
            placeholder="Enter achievement"
            onChangeText={onChangeAchievement}
            style={styles.txtInput}
            multiline
            numberOfLines={4}
          ></TextInput>

          <View style={styles.radioBtn}>
            <View style={styles.btnView}>
              <RadioButton
                value="Self"
                status={category === "Self" ? "checked" : "unchecked"}
                onPress={() => setCategory("Self")}
              />
              <Text style={styles.radioBtnText}>Self</Text>
            </View>

            <View style={styles.btnView}>
              <RadioButton
                value="Work"
                status={category === "Work" ? "checked" : "unchecked"}
                onPress={() => setCategory("Work")}
              />
              <Text style={styles.radioBtnText}>Work</Text>
            </View>

            <View style={styles.btnView}>
              <RadioButton
                value="Living"
                status={category === "Living" ? "checked" : "unchecked"}
                onPress={() => setCategory("Living")}
              />
              <Text style={styles.radioBtnText}>Living</Text>
            </View>

            <View style={styles.btnView}>
              <RadioButton
                value="Play"
                status={category === "Play" ? "checked" : "unchecked"}
                onPress={() => setCategory("Play")}
              />
              <Text style={styles.radioBtnText}>Play</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.addAchievement(achievement, category)}
          >
            <Text style={styles.btnText}>Add Achievement</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
  btnView: {
    flexDirection: "row",
  },
  radioBtn: {
    margin: 20,
  },
  radioBtnText: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  txtInput: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    fontSize: 18,
    padding: 10,
    margin: 20,
  },
});
