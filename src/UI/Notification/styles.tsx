import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import { getIconColorByType } from '../../helpers/notificationIconsUtils';
import { NotificationType } from '../../types/notificationType';

interface INotificationStyleProps {
  type: NotificationType;
}

export const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const Notification = styled.div`
  cursor: pointer;
  transition: .25s;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  min-width: 200px;
  max-width: 350px;
  padding: 15px;
  border-radius: 20px;
  color: ${colors.white};
  background-color: ${colors.secondary};

  &:hover {
    background-color: ${colors.notificationHover}
  }

  ${({ type }: INotificationStyleProps) => css`
    border: 1px solid ${getIconColorByType(type)};
  `}

  ${IconHolder} {
    ${({ type }: INotificationStyleProps) => css`
      fill: ${getIconColorByType(type)}
    `}
  }
`;
