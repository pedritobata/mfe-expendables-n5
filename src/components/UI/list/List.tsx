import { Wrapper } from "./styles";

interface Props<T> {
  data: T[];
  renderItem: (t: T) => JSX.Element;
  keyExtractor: (t: T) => string;
}

function List<T>({ data, renderItem, keyExtractor }: Props<T>) {
  return (
    <Wrapper>
      {data.map((item) => {
        const Item = () => renderItem(item);

        return <Item key={keyExtractor(item)} />;
      })}
    </Wrapper>
  );
}

export default List;
