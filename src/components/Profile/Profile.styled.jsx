import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.57);
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 42px;
`;

export const ImgContainer = styled.div`
  width: 250px;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f3f6f9;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #25384d;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #adb5bf;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #adb5bf;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #8694a2;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #25384d;
`;

export const Stats = styled.ul`
  font-size: 18px;
  font-weight: 400;
  color: black;
  display: flex;
  gap: 10px;
  padding-top: 10px;
  background-color: #f3f6f9;
  padding: 0 24px;
  justify-content: center;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: 1px solid #e7ebf2;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 8px;
  flex: 1;

  :nth-of-type(2) {
    border-right: 1px solid #e7ebf2;
    border-left: 1px solid #e7ebf2;
  }
`;
