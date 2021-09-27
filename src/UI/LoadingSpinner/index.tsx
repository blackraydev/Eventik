import * as UI from './styles';

const LoadingSpinner: React.FC = () => {
  return(
    <UI.SpinnerHolder>
      <UI.Spinner />
    </UI.SpinnerHolder>
  );
};

export default LoadingSpinner;