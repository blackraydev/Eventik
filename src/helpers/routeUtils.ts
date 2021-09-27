import FeedIcon from "../components/Icons/FeedIcon";
import FriendsIcon from "../components/Icons/FriendsIcon";
import GroupsIcon from "../components/Icons/GroupsIcon";
import MessagesIcon from "../components/Icons/MessagesIcon";
import ProfileIcon from "../components/Icons/ProfileIcon";
import SettingsIcon from "../components/Icons/SettingsIcon";
import { PrivateRouteNames, PrivateRoutes } from "../constants/routeNames";

export const getIconByRoute = (route: string) => {
  switch (route) {
    case PrivateRoutes.PROFILE: return ProfileIcon;
    case PrivateRoutes.FRIENDS: return FriendsIcon;
    case PrivateRoutes.FEED: return FeedIcon;
    case PrivateRoutes.MESSAGES: return MessagesIcon;
    case PrivateRoutes.GROUPS: return GroupsIcon;
    case PrivateRoutes.SETTINGS: return SettingsIcon;
  }
};

export const getTitleByRoute = (route: string) => {
  switch (route) {
    case PrivateRoutes.PROFILE: return PrivateRouteNames.PROFILE;
    case PrivateRoutes.FRIENDS: return PrivateRouteNames.FRIENDS;
    case PrivateRoutes.FEED: return PrivateRouteNames.FEED;
    case PrivateRoutes.MESSAGES: return PrivateRouteNames.MESSAGES;
    case PrivateRoutes.GROUPS: return PrivateRouteNames.GROUPS;
    case PrivateRoutes.SETTINGS: return PrivateRouteNames.SETTINGS;
  }
}