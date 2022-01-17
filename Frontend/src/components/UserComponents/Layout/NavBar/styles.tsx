import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const NavBar = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${COLORS.SECONDARY};
  width: 300px;
  border-radius: 25px;
  margin-top: 25px;
  padding: 25px 0;
`;
