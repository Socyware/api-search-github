import "./styles.css";

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="main">
      <button>{text}</button>
    </div>
  );
};

export default ButtonIcon;
