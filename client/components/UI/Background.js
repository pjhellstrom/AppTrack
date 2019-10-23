import React from "react";
import { View, StyleSheet } from "react-native";

const Background = props => {
  return <View style={styles.screen}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eee"
  }
});

export default Background;
