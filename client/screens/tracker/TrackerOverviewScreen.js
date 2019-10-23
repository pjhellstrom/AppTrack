import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Tracker from "../../components/tracker/Tracker";
import HeaderButton from "../../components/UI/HeaderButton";
import Background from "../../components/UI/Background";

const TrackerOverviewScreen = props => {
  const trackers = useSelector(state => state.trackers.activeTrackers);
  const dispatch = useDispatch();
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

TrackerOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: "Active Trackers",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Add'
          iconName={"ios-add-circle"}
          onPress={() => {
            navData.navigation.navigate("Add");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default TrackerOverviewScreen;
