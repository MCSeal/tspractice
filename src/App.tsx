import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'



var obj;
 

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  const [userData, setUserData] = useState([])

interface UserName {
  first: string;
  last: string;
  title: string;
}


interface UserPicture {
  thumbnail: string;
}

interface UserInfo {
  name: UserName;
  picture: UserPicture;
}

const getUserName = (userInfo: UserName) => {
  const {name: {first, last}} = userInfo;

  // above essentially the same as this:
  // const first = userInfo.name.first;
  // const last = userInfo.name.last;
  return `${first} ${last}`;
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


useEffect(() => {
   fetcher().then((randomData) => {
     setData(JSON.stringify(randomData) || "")
     setUserData(randomData.results)

   })
  
  
  
}, [])


  return (
    <div className="App">
      <header className="">
        <div className="text-white ">playground</div>
        
        
        <div>
        {
          userData.map((userInfo: UserName, index) => (
        
          <div className="content-center" key={index}>
            <p>{getUserName(userInfo)}</p>
            <img className="inline" src={userInfo.picture.thumbnail} />
          </div>
          ))
        }
        </div>
        
        

     
     
     
      </header>
    </div>
  )
}

export default App
