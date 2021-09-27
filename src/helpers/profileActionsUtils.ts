import MoneyTransferIcon from "../components/Icons/MoneyTransferIcon";
import NotificationIcon from "../components/Icons/NotificationIcon";
import StatisticsIcon from "../components/Icons/StatisticsIcon";
import { FriendActions, UserActions } from "../constants/profileActions";

export const getUserIconByAction = (action: string) => {
  switch (action) {
    case UserActions.PROFILE_STATISTICS: return StatisticsIcon;
    case UserActions.MONEY_TRANSFERS: return MoneyTransferIcon;
  }
};

export const getFriendIconByAction = (action: string) => {
  switch (action) {
    case FriendActions.SEND_MONEY: return MoneyTransferIcon;
    case FriendActions.NOTIFY_ABOUT_POSTS: return NotificationIcon;
  }
}