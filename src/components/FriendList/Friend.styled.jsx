import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.57);
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;

export const Status = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  color: #010101;
  font-size: 26px;
  font-weight: 600;
`;
