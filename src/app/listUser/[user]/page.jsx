// app/listUser/[user]/page.jsx
import DetailsUser from '../../components/DetailsUser';

export default function UserDetail({ params }) {
  const { user } = params;

  return (
    <div>
      <h1>Détail de : {user}</h1>
      <DetailsUser user={user} />
    </div>
  );
}
