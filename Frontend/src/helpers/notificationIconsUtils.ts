import CheckMarkIcon from "../components/Icons/CheckMarkIcon";
import ErrorIcon from "../components/Icons/ErrorIcon";
import ExclamationIcon from "../components/Icons/ExclamationIcon";
import WarningIcon from "../components/Icons/WarningIcon";
import { NotificationTypes } from "../constants/notifications";
import { NotificationType } from "../types/notificationType";
import colors from "../constants/colors";

export const getIconByType = (type: NotificationType) => {
  switch (type) {
    case NotificationTypes.SUCCESS: return CheckMarkIcon;
    case NotificationTypes.INFO: return ExclamationIcon;
    case NotificationTypes.WARNING: return WarningIcon;
    case NotificationTypes.ERROR: return ErrorIcon;
  }
};

export const getIconColorByType = (type: NotificationType) => {
  switch (type) {
    case NotificationTypes.SUCCESS: return colors.successIcon;
    case NotificationTypes.INFO: return colors.infoIcon;
    case NotificationTypes.WARNING: return colors.warningIcon;
    case NotificationTypes.ERROR: return colors.errorIcon;
  }
};