import styled from "styled-components";

export const Wrapper = styled.div<{ $img: string }>`
  background-image: url(${(props) => props.$img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 250px;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1em;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.67);
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
  }

  .banner {
    &__title {
      position: relative;
      color: #fff;
      font-size: 2em;
    }

    &__description {
      position: relative;
      color: #fff;
      font-size: 1.1em;
    }
  }
`;
