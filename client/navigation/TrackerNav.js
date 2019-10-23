import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Ionicons } from "@expo/vector-icons";

import TrackerOverviewScreen from "../screens/tracker/TrackerOverviewScreen";
import ArchivedOverviewScreen from "../screens/tracker/ArchivedDetailScreen";
import TrackerDetailScreen from "../screens/tracker/TrackerDetailScreen";
import AddScreen from "../screens/tracker/AddScreen";
import Colors from "../constants/Colors";

const TrackerNav = createStackNavigator(
  {
    TrackerOverview: TrackerOverviewScreen,
    TrackerDetail: TrackerDetailScreen,
    Add: AddScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTitleStyle: {
        fontSize: 20
      },
      headerTintColor: "white"
    }
  }
);

const ArchivedNav = createStackNavigator(
  {
    ArchivedOverview: ArchivedOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTitleStyle: {
        fontSize: 20
      },
      headerTintColor: "white"
    }
  }
);

const tabScreenConfig = {
  Active: {
    screen: TrackerNav,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-bicycle' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel: "Active"
    }
  },
  Archived: {
    screen: ArchivedNav,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-archive' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel: "Archived"
    }
  },
  Settings: {
    screen: TrackerNav,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-settings' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel: "Settings"
    }
  }
};

const TabNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.primary
  }
});

export default createAppContainer(TabNavigator);
