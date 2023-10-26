import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <Text>Name</Text>
        <TextInput style={styles.inputBox} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text>Email</Text>
        <TextInput style={styles.inputBox} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text>Password</Text>
        <TextInput style={styles.inputBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
  },
});

export default Register;
