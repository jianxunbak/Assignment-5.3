import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../styles/Styles";

export default settings = ({ route }) => {
  const { name, email, checked } = route.params || {
    name: "John",
    email: "abc@gmail.com",
    checked: "like",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.detail}>My name is {name}</Text>
      <Text style={styles.detail}>My email is {email}</Text>
      <Text style={styles.detail}>I {checked} coffee</Text>
    </View>
  );
};
