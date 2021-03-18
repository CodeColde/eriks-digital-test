import styled from "styled-components";
import theme from "../../constants/theme";

interface IProps {
  checked: boolean;
  value: string;
  onChange: () => void;
}

function Checkbox (props: IProps) {
  return (
    <Wrapper>
      <Input
        type="checkbox"
        {...props}
      />
      <CustomCheckmark />
    </Wrapper>
  )
}

export default Checkbox;

const CustomCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 4px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Wrapper = styled.div`
  display: block;
  height: 16px;
  min-width: 16px;
  max-width: 16px;
  width: 16px;
  margin-right: 12px;
  margin-top: 4px;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    input ~ ${CustomCheckmark} {
      background-color: ${theme.colors.grey};
    }
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;

  &:checked ~ ${CustomCheckmark} {
    background-color: ${theme.colors.blue};
  }

  &:checked ~ ${CustomCheckmark}:after {
    display: block;
  }
`;