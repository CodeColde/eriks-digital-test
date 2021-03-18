import styled from "styled-components";
import { IProduct } from "../../entities/return";
import DeleteCompare from "../atoms/DeleteCompare";
import Header from "../atoms/Header";
import PriceCompare from "../atoms/PriceCompare";
import theme from "../../constants/theme";

interface IProps {
  product: IProduct;
  onClick: () => void;
}

function ProductHeader({ product, onClick }: IProps) {
  return (
    <Wrapper>
      <Container>
        <DeleteCompare onClick={onClick} />
        <Product src={product.productImage} alt={product.name} />
        <Header>{product.name}</Header>
        <PriceCompare>{product.grossPrice}</PriceCompare>
        <PP>per stuk / excl. btw</PP>
        <Break />
      </Container>
    </Wrapper>
  )
}

export default ProductHeader;

const Wrapper = styled.td`
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = styled.img`
  height: 240px;
  width: 240px;
  object-fit: contain;
`;

const PP = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  color: ${theme.colors.grey};
  line-height: 1.1;
`;

const Break = styled.div`
  width: 100%;
  margin: 32px 0 24px;
  border-bottom: 1px solid ${theme.colors.grey};
`;