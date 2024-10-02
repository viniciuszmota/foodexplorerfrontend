import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
import styled from "styled-components"

export const Container = styled.div`
  width: fit-content;
  position: relative;

  width: 21rem;
  min-height: 29.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  padding: 2rem;
  margin: 0.3rem;
  transition: transform 300ms, filter 200ms;

  &:hover {
    transform: translateY(3px);
    filter: brightness(1.1);
  }

  > a {
    align-items: center;
    text-align: center;
  }

  .fav {
    border: none;
    margin: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;

    transition: transform 300ms;

    &:hover {
      transform: scale(1.1);
    }

    > svg path {
      transition: stroke 1s;
    }

    &:hover svg path {
      stroke: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .edit {
    border: none;
    margin: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;

    transition: transform 300ms;

    &:hover {
      transform: scale(1.1);
    }

    > svg path {
      transition: stroke 1s;
    }

    &:hover svg path {
      stroke: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .preview {
    width: 8.8rem;
    aspect-ratio: 1;
    margin-bottom: 1.2rem;
    border-radius: 50%;
  }

  .title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 1.2rem;

    width: 100%;
    position: relative;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ::before {
      content: " >";
      position: absolute;
      right: 0;

      text-align: right;

      background: ${({ theme }) => theme.COLORS.DARK_200};
      width: 1rem;
    }
  }

  .description {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;
    margin-bottom: 1.5rem;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: none;
  }

  .price-tag {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    margin-bottom: 1rem;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1.6rem;

    button:nth-child(2) {
      padding: 0.4rem;
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      border: none;
      border-radius: 0.5rem;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;

      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .centered {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  svg.icon path {
    stroke: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  ${DEVICE_BREAKPOINTS.LG} {
    width: 30.4rem;
    height: 46.2rem;

    .preview {
      width: 17.6rem;
      aspect-ratio: 1;
      margin-bottom: 1.5rem;
    }

    .title {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
    }

    .description {
      display: initial;
    }
    .price-tag {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .group {
      flex-direction: row;
      justify-content: space-between;

      button:nth-child(2) {
        padding: 1.2rem 2.4rem;
        width: fit-content;
      }
    }
  }
`
