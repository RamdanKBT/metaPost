import { Text, StyleSheet, View, Image, TextInput, Button } from "react-native";
import { useState } from "react";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const descriptionState = useState("hello"); // is an array of 2 values
  const description = descriptionState[0]; // 1st value in the array, the actual description of our state = hello
  const setDescription = descriptionState[1]; // 2nd value in the array, use this to change hello into somethimg else
  console.warn("Descr", description);

  const onSubmit = () => {
    console.warn("onSubmit");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Text>Create a post</Text>
      <TextInput placeholder="write here" multiline></TextInput>
      <Button title="Post" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
});

export default CreatePostScreen;
