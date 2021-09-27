import { NotificationTypes } from "../constants/notifications";

export type NotificationType = 
  NotificationTypes.SUCCESS |
  NotificationTypes.INFO |
  NotificationTypes.WARNING | 
  NotificationTypes.ERROR;