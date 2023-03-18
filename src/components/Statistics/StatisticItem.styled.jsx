import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  flex: 1;
  min-width: 80px;
  align-items: center;
  background-color: ${(props) => props.background}; 
`;

export const Label = styled.span`
  color: #cefbfe;
`;

export const Value = styled.span`
  color: #cefbfe;
`;
