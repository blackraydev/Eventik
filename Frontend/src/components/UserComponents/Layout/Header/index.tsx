import React, { useState } from 'react';
import { ChangeEvent } from '../../../../types/eventTypes';
import Input from '../../../../UI/Input';
import CoursikLogoIcon from '../../../Icons/CoursikLogoIcon';
import * as UI from './styles';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return(
    <UI.Header>
      <UI.LeftPart>
        <UI.LogoHolder>
          <UI.Logo>{CoursikLogoIcon}</UI.Logo>
          <UI.AppTitle>Conversik</UI.AppTitle>
        </UI.LogoHolder>
      </UI.LeftPart>
      <UI.MiddlePart>

      </UI.MiddlePart>
      <UI.RightPart>
        <Input
          value={searchValue}
          onChange={(e: ChangeEvent) => setSearchValue(e.currentTarget.value)}
          placeholder="Search"
          withoutMargin
        />
      </UI.RightPart>
    </UI.Header>
  );
};

export default Header;