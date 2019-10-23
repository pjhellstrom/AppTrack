import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";

const AddScreen = props => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [hiringContact, setHiringContact] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [status, setStatus] = useState("Active");

  const addTrackerHandler = () => {
    props.onAddTracker(trackerInput);
    setTrackerInput("");
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Title'
          style={styles.textInput}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          placeholder='Company'
          style={styles.textInput}
          value={company}
          onChangeText={text => setCompany(text)}
        />
        <TextInput
          placeholder='Hiring Contact'
          style={styles.textInput}
          value={hiringContact}
          onChangeText={text => setHiringContact(text)}
        />
        <TextInput
          placeholder='Description'
          style={styles.textInput}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          placeholder='Technologies'
          style={styles.textInput}
          value={technologies}
          onChangeText={text => setTechnologies(text)}
        />
        <TextInput
          placeholder='Status'
          style={styles.textInput}
          value={status}
          onChangeText={text => setStatus(text)}
        />
        <Button title='Add Tracker' disabled={title === ""} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "90%",
    borderColor: "#888",
    borderBottomWidth: 0.7,
    padding: 10,
    marginBottom: 10
  }
});

export default AddScreen;
