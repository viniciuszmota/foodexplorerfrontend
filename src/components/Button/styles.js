import styled from "styled-components"

export const Container = styled.button`
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ isLoading, theme }) =>
    isLoading ? "transparent" : `${theme.COLORS.LIGHT_100}`};

  border: none;
  border-radius: 0.5rem;
  justify-content: center;
  padding: 1.2rem 3.2rem;
  gap: 0.8rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  &::after {
    ${({ isLoading }) =>
      isLoading
        ? `
    content: "";
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 0.4rem solid transparent;
    border-bottom-color: #fff7;
    border-radius: 50%;
    animation: button-loading-spinner 800ms ease infinite;
    `
        : ``};
  }

  @keyframes button-loading-spinner {
    0% {
      transform: rotate(0turn);
    }
    50% {
      transform: rotate(-0.5turn);
    }
    100% {
      transform: rotate(1turn);
    }
  }
`
