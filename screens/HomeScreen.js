import { Alert, Text, TextInput, View } from "react-native";
import { Button, PaperProvider, RadioButton } from "react-native-paper";
import styles from "../styles/Styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigation();

  const proceed = () => {
    if (name === "" || email === "") {
      Alert.alert("Warning", "Please provide your name and age.", [
        { text: "OK" },
      ]);
    } else {
      navigate.navigate("Coffee", { name, email });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COFFEE</Text>
      <View style={styles.views}>
        <Text style={styles.label}>Name:</Text>
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
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="abc@email.com"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          style={styles.input}
        ></TextInput>
      </View>
      <Button mode="contained" onPress={proceed}>
        Proceed
      </Button>
    </View>
  );
};
