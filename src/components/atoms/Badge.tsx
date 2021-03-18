import styled from "styled-components";

interface IProps {
  src: string;
}

function Badge({src}: IProps) {
  return (
    <Image src={src} alt="Keurmerk" />
  )
}

export default Badge;

const Image = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 4px;
  margin-bottom: -4px;
`;