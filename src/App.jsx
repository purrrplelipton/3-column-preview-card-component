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

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 1rem;
  overflow: hidden;
`;

const WrapperItem = styled.div`
  font-family: ${base};
  padding-inline: 2.625rem;
  padding-block: 3rem;
  background: ${(props) =>
    props.sedans ? b_orange : props.suvs ? d_cyan : vd_cyan};
  gap: 1.75rem;
`;

const Icon = styled.img.attrs((props) => ({
  src: props.sedans ? sed_svg : props.suvs ? suv_svg : lux_svg,
  alt: props.alt || "an svg icon of a vehicle",
}))``;

const Title = styled.h2`
  font-family: ${accent};
  font-size: 2.5rem;
  color: ${grey_95};
  text-transform: uppercase;
`;

const Description = styled.p`
  color: ${white_75};
  line-height: 1.75;
`;

const Button = styled.input.attrs((props) => ({
  type: props.type || "button",
  value: props.value || "Learn More",
}))`
  border: none;
  font: inherit;
  padding-block: 0.7625rem;
  padding-inline: 2.12rem;
  border-radius: 999rem;
  border: 2px solid;
  color: ${(props) =>
    props.sedans ? b_orange : props.suvs ? d_cyan : vd_cyan};
  &:hover {
    background: ${(props) =>
      props.sedans ? b_orange : props.suvs ? d_cyan : vd_cyan};
    color: ${grey_95};
    border: 2px solid;
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
  &:hover {
    text-decoration: none;
  }
`;

const App = () => (
  <div
    style={{
      background: grey_95,
      minHeight: "100vh",
      display: "grid",
      placeContent: "center",
      paddingInline: "1.5rem",
      paddingBlock: "4.5rem",
    }}
  >
    <Wrapper>
      <WrapperItem sedans>
        <Icon sedans />
        <Title>Sedans</Title>
        <Description>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </Description>
        <Button />
      </WrapperItem>
      <WrapperItem suvs>
        <Icon suvs />
        <Title>SUVs</Title>
        <Description>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </Description>
        <Button />
      </WrapperItem>
      <WrapperItem>
        <Icon />
        <Title>Luxury</Title>
        <Description>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </Description>
        <Button />
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
  </div>
);

export default App;
