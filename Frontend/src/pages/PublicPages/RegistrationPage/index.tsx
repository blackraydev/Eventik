import React from 'react';
import RegistrationBlock from '../../../components/AuthComponents/RegistrationBlock';
import AuthLayout from '../../../layouts/AuthLayout';

interface IRegistrationPageProps {};

const RegistrationPage: React.FC<IRegistrationPageProps> = () => {
  return(
    <AuthLayout>
      <RegistrationBlock/>
    </AuthLayout>
  );
};

export default RegistrationPage;