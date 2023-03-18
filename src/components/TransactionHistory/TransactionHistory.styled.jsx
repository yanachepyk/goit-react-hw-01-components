import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  background-color: #00bcd5;

  th {
    text-transform: uppercase;
    color: #f4feff;
    padding: 15px 20px;
    width: 30%;

    :nth-of-type(2) {
      border-right: 2px solid #f4feffc4;
      border-left: 2px solid #f4feffc4;
    }
  }
`;

export const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: #ecf1f3;
  }
`;
