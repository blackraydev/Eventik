import React from 'react';
import * as UI from './styles';

interface IPublicLayoutProps {
  children: any;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ children }) => {
  return(
    <UI.Layout>
      {children}
    </UI.Layout>
  );
};

export default PublicLayout;