import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  //state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //function
  //btn funcn

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        setLoading(false);
        Alert.alert("Please fill all fields");
        return;
      }
      // console.log("Login data", { email, password });
      setLoading(false);
      const { data } = await axios.post(
        "http://192.168.1.20:8080/api/v1/auth/login",
        { email, password }
      );
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  //temp function to check local storage data
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("local storage=>", data);
  };

  getLocalStorageData();
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
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
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not a user Please{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </Text>
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

export default Login;
