import TRACKERS from "../../data/dummy-data";

const initialState = {
  activeTrackers: TRACKERS.filter(tracker => tracker.status !== "Archived"),
  archivedTrackers: TRACKERS.filter(tracker => tracker.status === "Archived")
};

export default (state = initialState, action) => {
  return state;
};
