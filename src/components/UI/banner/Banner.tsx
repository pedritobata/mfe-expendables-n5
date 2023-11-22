import { Wrapper } from "./styles";

interface Props {
  title: string;
  description: string;
  img: string;
}

const Banner: React.FC<Props> = ({ description, img, title }) => {
  return (
    <Wrapper $img={img}>
      <h2 className="banner__title">{title}</h2>
      <p className="banner__description">{description}</p>
    </Wrapper>
  );
};

export default Banner;
