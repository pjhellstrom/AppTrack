import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import Tracker from "../../components/tracker/Tracker";
import Background from "../../components/UI/Background";

const ArchivedOverviewScreen = props => {
  const trackers = useSelector(state => state.trackers.archivedTrackers);
  return (
    <Background>
      <FlatList
        data={trackers}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <Tracker
            title={itemData.item.title}
            company={itemData.item.company}
            description={itemData.item.description}
            technologies={itemData.item.technologies}
            status={itemData.item.status}
            onViewDetail={() => {
              props.navigation.navigate("TrackerDetail", {
                trackerId: itemData.item.id,
                trackerTitle: itemData.item.title
              });
            }}
          />
        )}
      />
    </Background>
  );
};

ArchivedOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: "Archived Trackers"
  };
};

export default ArchivedOverviewScreen;
