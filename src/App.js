import './App.css';
import { getPosts } from './api/getPosts';
import { useEffect, useState } from 'react';
import ShowPhoto from './components/ShowPhoto';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import UsersData from './components/UsersData';

function App() {
  const [data, setData] = useState(null)
  const [result, setResult] = useState([]);
  useEffect(()=>{
    getPosts().then((posts)=>setData(posts))

  },[])

  return (
    <div className="App">
      <h1>Posts</h1>
      {/* <div>
        {data.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div> */}
      {/* <ShowPhoto /> */}
      <SearchBar setResult={setResult} />
      <SearchResult result={result} />
      <UsersData />
    </div>
  );
}

export default App;
