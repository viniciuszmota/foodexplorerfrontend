import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;

  background-color: ${({ isNew, theme }) =>
    isNew ? `transparent` : `${theme.COLORS.LIGHT_600}`};

  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};

  &:has(input:focus-visible) {
    outline-width: 0.1rem;
    outline-style: solid;
    outline-offset: 0.1rem;
  }

  > input {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline;

    width: fit-content;

    color: ${({ isNew, theme }) =>
      isNew ? `${theme.COLORS.LIGHT_500}` : `${theme.COLORS.LIGHT_100}`};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    background: transparent;
    border: none;
    outline: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
    border-radius: 0.3rem;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
