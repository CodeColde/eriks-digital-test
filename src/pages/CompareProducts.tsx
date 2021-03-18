import React from "react";
import styled from "styled-components";
import IApiReturn from "../entities/return";
import CompareBody from "../components/organisms/CompareBody";
import ProductHeader from "../components/organisms/ProductHeader";
import SelectionList from "../components/organisms/SelectionList";
import Header from "../components/atoms/Header";
import TableWrapper from "../components/atoms/TableWrapper";
import useQueryHandler from "../utils/useQueryHandler";
import theme from "../constants/theme";

interface ISelectedProducts {
  [x: string]: boolean;
};

function CompareProducts () {
  const [selectedProducts, setSelectedProducts] = React.useState<ISelectedProducts>({});

  const {
    loading,
    data,
    error
  } = useQueryHandler<IApiReturn>(
    "compareProducts",
    "/products/all",
  );

  React.useEffect(() => {
    if (!!data && !!data.products && !error && !loading && !Object.keys(selectedProducts).length) {
      const selectedObjs: ISelectedProducts = {};
      data.products.forEach(el => {
        selectedObjs[el.sku] = el.display
      })
      setSelectedProducts(selectedObjs)
    }
  }, [data, error, loading, selectedProducts]);

  const sortedData = data?.products?.sort((a, b) => a.name > b.name ? 1 : -1);
  const filteredData = sortedData?.filter(el => !!selectedProducts[el.sku]);
  const totalSelected = filteredData ? filteredData.length : 0;

  const toggleShow = (value: string) => {
    const newSelectedProducts = {...selectedProducts};
    newSelectedProducts[value] = !selectedProducts[value];
    setSelectedProducts(newSelectedProducts);
  }

  return (
    <div>
      {error
        ? <Header>Error loading data!</Header>
        : (loading || !Object.keys(selectedProducts).length)
        ? <Header>Loading...</Header>
        : sortedData && filteredData
        ? (
          <Wrapper>
            <Header variant="Large">{filteredData.length} producten vergelijken</Header>
            <TableWrapper count={totalSelected}>
              <thead>
                <tr>
                  <SelectionList
                    products={sortedData}
                    selectedProducts={selectedProducts}
                    toggleShow={toggleShow}
                  />
                  {filteredData.map((product, i) => (
                    <ProductHeader
                      key={`product-${i}`}
                      product={product}
                      onClick={() => toggleShow(product.sku)}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareBody
                  data={filteredData}
                  count={totalSelected}
                />
              </tbody>
            </TableWrapper>
          </Wrapper>
        ) : <Header>No products available!</Header>
      }
    </div>
  );
}

export default CompareProducts;

const Wrapper = styled.div`
  border-bottom: 4px solid ${theme.colors.blue};
  padding-bottom: 40px;
`;