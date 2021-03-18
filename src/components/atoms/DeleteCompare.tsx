import styled from "styled-components";
import Delete from "../../assets/icons/Delete";
import theme from "../../constants/theme";

interface IProps {
  onClick: () => void;
}

const DeleteCompare: React.FC<IProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Delete color={theme.colors.blue} height="20px" width="20px" />
    </Wrapper>
  )
}

export default DeleteCompare;

const Wrapper = styled.div`
  padding: 4px;
  margin-bottom: 16px;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;