import React from "react";
import styled, { css } from "styled-components";
import theme from "../../constants/theme";

type VariantType = "Large" | "Big" | "Default" | "Medium" | "Small" | "Tiny";

interface Props extends React.HTMLAttributes<{}> {
  variant?: VariantType;
  as?: keyof JSX.IntrinsicElements;
}

const elementMap: { [k in VariantType]: keyof JSX.IntrinsicElements } = {
  Large: "h1",
  Big: "h2",
  Default: "h3",
  Medium: "h4",
  Small: "h5",
  Tiny: "h6"
};

const Large = css`
  font-size:  2.6em;
`;

const Big = css`
  font-size: 1.5em;
`;

const Default = css`
  font-size: 1.2em;
`;

const Medium = css``;

const Small = css``;

const Tiny = css``;

const MainTitle = styled.h1<Props>`
  color: ${theme.colors.blue};

  ${({ variant = "Default" }) => {
    switch (variant) {
      case "Large":
        return Large;
      case "Big":
        return Big;
      case "Medium":
        return Medium;
      case "Small":
        return Small;
      case "Tiny":
        return Tiny;
      default:
        return Default;
    }
  }}
`;

const Header: React.FC<Props> = ({
  variant = "Default",
  as = elementMap[variant],
  children,
  ...rest
}) => {
  return (
    <MainTitle variant={variant} as={as} {...rest}>
      {children}
    </MainTitle>
  );
};

export default Header;
