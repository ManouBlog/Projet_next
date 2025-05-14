
// import Link from "next/link";
import Books from "../components/Books"

// const fectchGithubUsers = async()=>{
//  const response = await fetch("https://api.github.com/search/users?q=greg",{
//     next:{
//         revalidate:60
//     }
//  })
//  await new Promise((resolve)=>setTimeout(resolve,2000));
//  const json = await response.json();
//  return json.items;
// }

const ListUser = async()=>{
//    const users = await fectchGithubUsers()
  return (
    <div>
      <h1>List User</h1>
      <Books />
      <hr />
      {/* <div className="overflow-x-auto">
  <table className="table">
   
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
        <td className="flex gap-5">
          <Link  href={user.html_url}>View On Github</Link>
          <Link href={`/listUser/${user.login}`}>Details User</Link>
        </td>
      </tr>
        ))
     }
      
   
    </tbody>
  </table>
</div> */}
    </div>
  )
}

export default ListUser;
