import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, PaperProvider, RadioButton } from "react-native-paper";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [checked, setChecked] = useState("like");

  const alert = () => {
    if (name === "" || age === "") {
      Alert.alert("Warning", "Please provide your name and age.", [
        { text: "OK" },
      ]);
    } else {
      Alert.alert(
        "Summary",
        `My name is ${name} and i am ${age} years old. I ${checked} coffee!`,
        [{ text: "OK" }]
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COFFEE</Text>
      <View style={styles.views}>
        <Text style={styles.label}>Your name:</Text>
        <TextInput
          placeholder="input your name"
          value={name}
          onChangeText={(name) => {
            setName(name);
          }}
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.views}>
        <Text style={styles.label}>Your age:</Text>
        <TextInput
          placeholder="input your age"
          value={age}
          onChangeText={(age) => {
            if (isNaN(age)) {
              return;
            } else {
              setAge(age);
            }
          }}
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.views}>
        <Text style={styles.label}>Like Coffee?</Text>
        <View style={styles.radios}>
          <View style={styles.radio}>
            <RadioButton
              value="like"
              status={checked === "like" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("like");
              }}
            />
            <Text>Yes</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton
              value="dislike"
              status={checked === "dislike" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("dislike");
              }}
            />
            <Text>No</Text>
          </View>
        </View>
      </View>
      <Button mode="contained" onPress={alert}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  views: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  label: {
    width: 100,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    borderRadius: 5,
    width: 250,
    color: "black",
    backgroundColor: "#d3d3d3",
  },
  radios: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    width: 250,
  },
  radio: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
    fontWeight: "bold",
  },
});
