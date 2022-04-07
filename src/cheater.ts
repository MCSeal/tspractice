var obj;


interface UserName {
  first: string;
  last: string;
  title: string;
}

interface UserInfo {
  name: UserName
}


const fetcher = () => {



  return fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => {
      console.log(obj)
      return obj
    })
 
    .catch((error) => console.log(error))

}


const getUserName = (userInfo: UserName) => {
  const {name: {first, last}} = userInfo;

  // above essentially the same as this:
  // const first = userInfo.name.first;
  // const last = userInfo.name.last;
  return `${first} ${last}`;
}



useEffect(() => {
   fetcher().then((randomData) => {
     setData(JSON.stringify(randomData) || "")
     setUserData(randomData.results)

   })
  
  
  
}, [])



        <div>
        {
        
        userData.map((userInfo: UserName, index) => (
        
        <div>
          <p>{getUserName(userInfo)}</p>
        </div>
        ))
          
          
          
          
        }</div>
     