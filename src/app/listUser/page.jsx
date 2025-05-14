
import Link from "next/link";
const fectchGithubUsers = async()=>{
 const response = await fetch("https://api.github.com/search/users?q=greg")
 const json = await response.json();
 return json.items;
}

const ListUser = async()=>{
   const users = await fectchGithubUsers()
  return (
    <div>
      <h1>List User</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Name
        </th>
        <th>Pays</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index)=>(
<tr key={index}>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.avatar_url}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.login}</div>
              <div className="text-sm opacity-50">{user.user_view_type}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>
          <Link  href={user.html_url}>View On Github</Link>
        </td>
      </tr>
        ))
     }
      
   
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ListUser;
