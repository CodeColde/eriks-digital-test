import { useState } from "react";
import styled from "styled-components";
import theme from "../../constants/theme";

const Row: React.FC<{}> = ({ children }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Wrapper selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </Wrapper>
  )
}

export default Row;

const Wrapper = styled.tr<{ selected: boolean; }>`
  ${({ selected }) => selected && `background-color: ${theme.colors.grey};`}

  &:hover {
    background-color: ${theme.colors.grey};
  }
`;