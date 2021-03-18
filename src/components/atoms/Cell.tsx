import styled from "styled-components";

const Cell: React.FC<{}> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Cell;

const Wrapper = styled.td`
  font-weight: 700;
`;