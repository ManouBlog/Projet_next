async function fetchRepos(user){
    const reponse = await fetch('https://api.github.com/users/'+user+'/repos')
    await new Promise((resolve)=>setTimeout(resolve,2000));
    const json = await reponse.json()
    return json;
}
const DetailsUser = async ({user})=>{
    const respos = await fetchRepos(user)
    // console.log("respos",respos)
  return (
    <div>
      <h1>DETAILS REPO</h1>
      {respos.map((item,index)=>(
        <p key={index}>{item.url}</p>
      ))}
    </div>
  )
}

export default DetailsUser;
