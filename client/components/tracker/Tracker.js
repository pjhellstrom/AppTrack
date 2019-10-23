import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet
} from "react-native";

import Colors from "../../constants/Colors";

const Tracker = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onViewDetail} useForeground>
      <View style={styles.trackerCard}>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.company}>{props.company}</Text>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>
              {props.description.length < 100
                ? props.description
                : props.description.substring(0, 100).concat("...")}
            </Text>
          </View>
          <View style={styles.technologiesWrapper}>
            {props.technologies.split(" ").map(tech => {
              return (
                <View style={styles.technologiesTag} key={tech}>
                  <Text style={styles.technologiesText}>{tech}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.status}>{props.status}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  trackerCard: {
    shadowColor: "#ccc",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 7,
    backgroundColor: "white",
    height: 150,
    margin: 20
  },
  titleHeader: {
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.secondary
  },
  title: {
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  details: {
    padding: 10
  },
  company: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333"
  },
  descriptionWrapper: {
    height: 40,
    justifyContent: "center"
  },
  description: {
    fontSize: 12
  },
  technologiesWrapper: {
    flexDirection: "row"
  },
  technologiesTag: {
    margin: 2,
    padding: 3,
    borderRadius: 5,
    backgroundColor: Colors.ternary,
    textAlign: "center"
  },
  technologiesText: {
    color: "white"
  },
  status: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
    textAlign: "right"
  }
});

export default Tracker;
