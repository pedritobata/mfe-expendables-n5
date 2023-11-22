import { Wrapper } from "./styles";

interface Props {
  title: string;
  description: string;
  img: string;
}

const Card: React.FC<Props> = ({ description, img, title }) => {
  return (
    <Wrapper>
      <img src={img} alt="character" className="card__image" />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </Wrapper>
  );
};

export default Card;
