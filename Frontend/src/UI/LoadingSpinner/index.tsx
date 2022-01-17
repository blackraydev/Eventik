import * as UI from './styles';

interface ILoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({ fullScreen }) => {
  return (
    <UI.SpinnerHolder fullScreen={fullScreen}>
      <UI.Spinner />
    </UI.SpinnerHolder>
  );
};

export default LoadingSpinner;
