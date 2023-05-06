import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Header with details about author */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="grey"
            style={styles.icon}
          />
        </View>

        {/* Body with decription and image */}
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )}

        {/*Footer with likes and buttons*/}
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    width: "100%",
    marginVertical: 10, // add some margin at he bottom so the posts that are under eachother don't touch
    backgroundColor: "#fff",
  },
  //HEADER
  header: {
    backgroundColor: "purple",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // will always be a circle if the number is half of width or height
    marginRight: 10, // add some space to the right of the rounded off profile picture
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "grey",
  },
  icon: {
    marginLeft: "auto", // put something as far left as possible
  },
  //BODY
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
});
