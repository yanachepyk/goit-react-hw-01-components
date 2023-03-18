import PropTypes from 'prop-types';
import { FriendCard, Name, Status } from './Friend.styled';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="56" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
