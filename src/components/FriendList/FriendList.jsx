import PropTypes from 'prop-types';
import Friend from './Friend/Friend';

const imageDefault = `https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg`;

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <Friend
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
      />
    ))}
  </ul>
);
FriendList.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: imageDefault,
    }),
  ),
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;
