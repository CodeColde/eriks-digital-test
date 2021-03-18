import styled from "styled-components";
import theme from "../../constants/theme";

export default styled.table<{ count: number; }>`
  border-top: 1px solid ${theme.colors.grey};
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  td > div {
    padding: 8px 16px;
  }

  tbody > tr {
    border-bottom: 1px solid ${theme.colors.grey};

    &:last-child {
      border-bottom: none;
    }

    > td:first-child {
      border-right: 1px solid ${theme.colors.grey};
    }

    > td {
      padding: 8px 16px;
    }
  }

  thead {
    vertical-align: top;
  }
`;