import React, { useEffect, useState,createContext} from 'react'
import Trending from './components/Trending';
import axios from 'axios';
import Recommends from './components/Recommends';
export const MovieContext = createContext("");

const ShowData = () => {
  const url ="hi"
    const [trending,setTrending] = useState('hihi');
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d03799692be1c26faf0ade18a4205f9f`).then((resp) =>{
           // console.log("resp",resp);
           setTrending(resp.data.results);
            console.log(trending)
          })
      },[])
  return (
  
    <div>
    <Recommends data={{url}} />
    </div>
    
    
 

  );
 

}
export default ShowData


