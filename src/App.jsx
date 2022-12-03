import { React } from "react";
import styled from "styled-components";

import sed_svg from "./assets/images/icon-sedans.svg";
import suv_svg from "./assets/images/icon-suvs.svg";
import lux_svg from "./assets/images/icon-luxury.svg";

const b_orange = `hsl(31, 77%, 52%)`;
const d_cyan = `hsl(184, 100%, 22%)`;
const vd_cyan = `hsl(179, 100%, 13%)`;
const white_75 = `hsla(0, 0%, 100%, 0.75)`;
const grey_95 = `hsl(0, 0%, 95%)`;

const base = `"Lexend Deca", sans-serif`;
const accent = `"Big Shoulders Display", cursive`;

const DirectRootChild = styled.div`
  background: ${grey_95};
  min-height: 100vh;
  display: grid;
  place-content: center;
  padding-inline: 1.5rem;
  padding-block: 4.5rem;
`;

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 72rem;

  @media only screen and (min-width: 48rem) and (max-width: 63.9375rem) {
    width: 66.66%;
    margin-inline: auto;
  }

  @media only screen and (min-width: 64rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const WrapperItem = styled.div`
  font-family: ${base};
  /* font-size: 0.9375rem; */
  padding-inline: 2.625rem;
  padding-block: 3rem;
  background: ${(props) =>
    props.sedans ? b_orange : props.suvs ? d_cyan : vd_cyan};
  display: grid;
  justify-items: left;
  gap: 2rem;
  overflow: hidden;

  @media only screen and (min-width: 48rem) {
    font-size: 1.15rem;
    padding-inline: 3.8rem;
    padding-block: 4rem;
    gap: 6rem;
  }
`;

const InfoSec = styled.div`
  display: grid;
  gap: 1.75rem;

  @media only screen and (min-width: 48rem) {
    gap: 2rem;
  }
`;

const Icon = styled.img.attrs((props) => ({
  src: props.sedans ? sed_svg : props.suvs ? suv_svg : lux_svg,
  alt: props.alt || "an svg icon of a vehicle",
}))`
  @media only screen and (min-width: 48rem) {
    width: 5rem;
  }
`;

const Title = styled.h2`
  font-family: ${accent};
  font-size: 2.5rem;
  color: ${grey_95};
  text-transform: uppercase;

  @media only screen and (min-width: 48rem) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: ${white_75};
  line-height: 1.75;
`;

const Button = styled.a.attrs((props) => ({
  href: props.sedans
    ? "https://en.wikipedia.org/wiki/Sedan_(automobile)"
    : props.suvs
    ? "https://en.wikipedia.org/wiki/Sport_utility_vehicle"
    : "https://en.wikipedia.org/wiki/Category:Luxury_vehicles",
}))`
  background: ${grey_95};
  color: ${(props) =>
    props.sedans ? b_orange : props.suvs ? d_cyan : vd_cyan};
  text-decoration: none;
  padding-block: 0.8rem;
  padding-inline: 2.125rem;
  border-radius: 999rem;
  border: 2px solid;
  outline: none;
  transition: background 0.25s ease-out, color 0.2s ease-in;
  &:hover,
  &:focus {
    background: ${(props) =>
      props.sedans ? b_orange : props.suvs ? d_cyan : vd_cyan};
    color: ${grey_95};
    border: 2px solid;
  }

  @media only screen and (min-width: 48rem) {
    padding-block: 0.9rem;
  }
`;

const Footer = styled.footer`
  font-family: ${base};
  font-size: 0.625rem;
  position: fixed;
  right: 0;
  bottom: 0;
  transform: rotate(-90deg) translate(6rem, 5.5rem);
`;

const Link = styled.a`
  font-family: ${accent};
  color: hsl(228, 45%, 44%);
  outline: none;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const App = () => (
  <DirectRootChild>
    <Wrapper>
      <WrapperItem sedans>
        <InfoSec>
          <Icon sedans />
          <Title>Sedans</Title>
          <Description>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </Description>
        </InfoSec>
        <Button sedans>Learn More</Button>
      </WrapperItem>
      <WrapperItem suvs>
        <InfoSec>
          <Icon suvs />
          <Title>SUVs</Title>
          <Description>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </Description>
        </InfoSec>
        <Button suvs>Learn More</Button>
      </WrapperItem>
      <WrapperItem>
        <InfoSec>
          <Icon />
          <Title>Luxury</Title>
          <Description>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </Description>
        </InfoSec>
        <Button>Learn More</Button>
      </WrapperItem>
    </Wrapper>

    <Footer>
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link href="https://www.frontendmentor.io/profile/purrrplelipton">
        Toby
      </Link>
      .
    </Footer>
  </DirectRootChild>
);

export default App;
