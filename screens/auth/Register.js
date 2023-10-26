import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";

const Register = () => {
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //function
  //btn funcn

  const handleSubmit = () => {
    setLoading(true);
    try {
      if (!name || !email || !password) {
        setLoading(false);
        Alert.alert("Please fill all fields");
        return;
      }
      console.log("register data", { name, email, password });
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"Name"} value={name} setValue={setName} />
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({ name, password, email }, null, 4)}</Text> */}
      <SubmitButton
        btnTitle="Register"
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#e1d5c9",
    // marginTop: 100,
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginTop: 100,
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
