import css from 'components/FriendList/FriendList.module.css';

export default function FriendList({ friendlist }) {
  return (
    <ul className={css.friendList}>
      {friendlist.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={isOnline ? css.isOnline : css.isOffline}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
