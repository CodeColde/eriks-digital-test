import styled from "styled-components";
import { IProduct } from "../../entities/return";
import { ISelectedProducts } from "../../entities/selectedProducts";
import Checkbox from "../atoms/Checkbox";
import Header from "../atoms/Header";
import theme from "../../constants/theme";

interface IProps {
  products: IProduct[];
  selectedProducts: ISelectedProducts;
  toggleShow: (value: string) => void;
}

function SelectionList({ products, selectedProducts, toggleShow }: IProps) {
  return (
    <Wrapper>
      <Header variant="Big">Je selectie</Header>
      <List>
        {products.map(el => (
          <li key={el.sku}>
            <Label>
              <Checkbox
                checked={selectedProducts[el.sku]}
                value={el.name}
                onChange={() => toggleShow(el.sku)}
              />
              <Text>{el.name}</Text>
            </Label>
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default SelectionList;

const Wrapper = styled.td`
  border-right: 1px solid ${theme.colors.greylight};
  padding-left: 0;
  padding-right: 16px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1.2;
`;