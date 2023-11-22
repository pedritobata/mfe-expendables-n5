import Banner from "../../components/UI/banner/Banner";
import Card from "../../components/UI/card/Card";
import List from "../../components/UI/list/List";
import { TMDB_IMG_BASE_URL } from "../../shared/constants";
import { Character } from "../../types/characters";
import { Wrapper } from "./styles";
import useFetchData from "./useFetchData";

const CharactersList: React.FC<{}> = () => {
  const { characters, movie } = useFetchData();

  return (
    <Wrapper>
      <Banner
        title={movie?.original_title!}
        description={movie?.overview!}
        img={`${TMDB_IMG_BASE_URL}/${movie?.poster_path!}`}
      />
      <h2 className="character-list__title">Cast</h2>
      <List
        data={characters}
        renderItem={(item) => (
          <Card
            title={item.character}
            description={item.original_name}
            img={`${TMDB_IMG_BASE_URL}/${item.profile_path}`}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Wrapper>
  );
};

export default CharactersList;
