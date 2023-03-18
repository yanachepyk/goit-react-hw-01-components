import PropTypes from 'prop-types';
import Friend from './Friend';
import { FriendsContainer } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
