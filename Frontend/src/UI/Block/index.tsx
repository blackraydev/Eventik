import * as UI from './styles';

interface IBlockProps {
  title: string;
  description?: string;
  outerText?: string;
  innerText?: string;
  authTypeHandler?: () => void;
  children: any;
}

const Block: React.FC<IBlockProps> = ({ title, description, outerText, innerText, authTypeHandler, children }) => {
  return (
    <UI.BlockHolder>
      <UI.Block>
        <UI.Title>{title}</UI.Title>
        <UI.Description>{description}</UI.Description>
        {children}
      </UI.Block>
      <UI.OuterText>
        {outerText}
        <UI.InnerText onClick={authTypeHandler}>{innerText}</UI.InnerText>
      </UI.OuterText>
    </UI.BlockHolder>
  );
};

export default Block;
