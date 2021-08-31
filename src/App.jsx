import UserProfile from 'components/UserProfile/UserProfile';
import Statistic from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from 'components/UserProfile/user.json';
import stats from 'components/Statistics/statistical-data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic title="Upload stats" stats={stats} />
      <Statistic stats={stats} />
      <FriendList friendlist={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
