import "./styles.css";

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="resultcard-main">
      <div className="resultcard-title">{title}</div>
      <p className="resultcard-p">{description}</p>
    </div>
  );
};

export default ResultCard;
