import React, { useEffect, useState } from 'react'
import { getPhotos } from '../api/getPhotos';

function ShowPhoto() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        getPhotos().then((photos)=>setData(data))
    },[])
  return (
    <div>
        <h1>Photos</h1>
      {data.map((data, index) => (
        <span key={index}>{data.title}</span>
      ))}
    </div>
  );
}

export default ShowPhoto
