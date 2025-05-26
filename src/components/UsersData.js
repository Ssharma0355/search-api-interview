import React, { useState } from 'react'

function UsersData() {
    const [data,setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const datas = res.json();
        setData(datas);

    }
  return (
    <div>
        {data.map((user,index)=>{
            <div key={index}>{user.name}</div>
        })}
      
    </div>
  )
}

export default UsersData
