import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";

const TrackerDetailScreen = props => {
  const trackerId = props.navigation.getParam("trackerId");
  const selectedTracker = useSelector(state =>
    state.trackers.activeTrackers.find(tracker => tracker.id === trackerId)
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.company}>
          {selectedTracker.title} @ {selectedTracker.company}
        </Text>
        <Text style={styles.hiringContact}>
          Hiring Contact: {selectedTracker.hiringContact}
        </Text>
        <Text style={styles.status}>
          Status:{" "}
          <Text style={styles.statusText}>{selectedTracker.status}</Text>
        </Text>
      </View>
      <Text style={styles.label}>Description: </Text>
      <ScrollView>
        <Text style={styles.description}>{selectedTracker.description}</Text>
      </ScrollView>
      <Text style={styles.label}>Technologies Used: </Text>
      <View style={styles.technologiesWrapper}>
        {selectedTracker.technologies.split(" ").map(tech => {
          return (
            <View style={styles.technologiesTag} key={tech}>
              <Text style={styles.technologiesText}>{tech}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

TrackerDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: "Trackers Details",
    headerRight: (
      <View style={styles.headerRow}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Edit'
            iconName={"ios-create"}
            onPress={() => {
              navData.navigation.navigate("Add");
            }}
          />
        </HeaderButtons>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Delete'
            iconName={"ios-trash"}
            onPress={() => {
              navData.navigation.navigate("Add");
            }}
          />
        </HeaderButtons>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row"
  },
  wrapper: {
    margin: 20
  },
  company: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333"
  },
  hiringContact: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#888"
  },
  status: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },
  statusText: {
    color: "green"
  },
  label: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 5
  },
  description: {
    fontSize: 16
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
  }
});

export default TrackerDetailScreen;
