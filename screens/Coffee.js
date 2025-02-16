import { View } from "react-native";
import { Button, RadioButton, Text } from "react-native-paper";
import styles from "../styles/Styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default Coffee = ({ route }) => {
  const [checked, setChecked] = useState("like");
  const { name, email } = route.params || {
    name: "John",
    email: "abc@gmail.com",
  };
  const navigate = useNavigation();

  const proceed = () => {
    navigate.navigate("TabNavigator", {
      screen: "Details",
      params: { name, email, checked },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailView}>
        <Text style={styles.question}>Do you like coffee?</Text>
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
      <Button mode="contained" onPress={proceed}>
        Proceed
      </Button>
    </View>
  );
};
