import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.editContainer}>
      <Image 
      source={require("./assets/left.png")} 
      style={styles.arrow} 
      />
      <Text style={styles.edit}>Edit Profile</Text>
      </View>
      <View style={styles.profileContainer}>
      <Image 
      source={require("./assets/IMG_20211005_180225_228.jpg")} 
      style={styles.profile} 
      />
      <Image 
      source={require("./assets/camera.png")} 
      style={styles.camera} 
      />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.inputTag}>School</Text>
        <Text style={styles.input}>The Lawrenceville School
        </Text>
        <Text style={styles.inputTag}>Email Address</Text>
        <Text style={styles.input}>danielrozar@gmail.com
        </Text>
        <Text style={styles.inputTag}>Name</Text>
        <Text style={styles.input}>Daniel Rozar</Text>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.inputTag}>Nick Name</Text>
        <Text style={styles.input}>r.denial</Text>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.inputTag}>Emergency Contact</Text>

        <View style={styles.book}>
          <Text style={styles.input}>+1-987654321</Text>
          <Image 
          source={require("./assets/book.png")} 
          style={styles.books} 
          />
      </View>
      <View style={styles.horizontalLine}></View>
      <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  editContainer: {
    flex: 0.2,
    backgroundColor: "#fff",
    marginTop: 35,
    borderBottomColor: "#888",
    borderBottomWidth: 0.5,
    marginStart: 5,
    marginEnd: 5,
  },

  profileContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center"
  },

  textContainer: {
    flex: 1,
    marginStart: 30,
    marginEnd: 30,
  },

  arrow: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 50,
    bottom: 10,
    width: 50,
    height:  20,
  },

  edit: {
    position: "absolute",
    top: 50,
    left: 170,
    right: 50,
    bottom: 10,
    fontSize: 20,
    fontWeight:"bold"
  },

  profile: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },

  camera: {
    position: "absolute",
    top: 130,
    left: 230,
    right: 100,
    bottom: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  book: {
    flexDirection: "row",
    justifyContent:"space-between",
  },

  books: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },

  inputTag: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#888",
    marginBottom: 15,
  },

  input: {
    fontSize: 20,
    marginBottom: 5,
  },

  inputTags: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#00b8e6",
    marginBottom: 10,
    marginTop: 15,
  },

  button: {
    flex: 0.5,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#51C1E8",
    borderRadius: 25,
  },

  horizontalLine: {
    borderRightColor: "#888",
    borderBottomWidth: 0.5,
    marginStart: 5,
    marginEnd: 5,
  },
});
