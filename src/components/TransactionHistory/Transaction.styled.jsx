import styled from "@emotion/styled";

export const TableRow = styled.tr`
    td {
        color: #848689;
        width: 30%;
        padding: 12px 20px;
        text-align: center;
        font-weight: 400;

        :nth-of-type(2) {
            border-right: 2px solid #8486892b;
            border-left: 2px solid #8486892b;
        }
    }
`;