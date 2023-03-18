import styled from '@emotion/styled';

export const Section = styled.section`
  border-radius: 5px;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.57);
  width: fit-content;
`;

export const Heading = styled.div`
  padding: 32px 10px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #5c5e60;
  font-size: 24px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  li:first-of-type {
    border-bottom-left-radius: 5px;
  }

  li:last-of-type {
    border-bottom-right-radius: 5px;
  }
`;
