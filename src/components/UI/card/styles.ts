import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  width: 70%;
  box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
  gap: 10px;
  border-radius: 10px;
  overflow: hidden;

  .card {
    &__image {
      max-width: 150px;
    }

    &__info {
      padding: 0.5em;
    }

    &__title {
    }

    &__description {
    }
  }
`;
