import styled from 'styled-components'

import React from 'react'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../Firebase'
//import { collection, getFirestore } from 'firebase/firestore'
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
//import { doc } from 'firebase/firestore/lite';
//import { doc, getDoc ,onSnapshot} from "firebase/firestore";
import { collection, query, where, getDocs ,getFirestore} from "firebase/firestore/lite";
import { MovieContext } from '../showData';



const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
    //const db = getFirestore();
  //const q = query(collection(db, "movies"));
 const [posts, setPosts] = useState([]);
  const [recommends,setRecommends] = useState([]);  
  const [newDisneys,setNewDisneys] =  useState([]); 
  const [originals,setOriginals] =   useState([]); 
  const [trending,setTrending] =  useState([]); 
  const [movies,setMovies] = useState([]);



  // useEffect(() => {
    // const citiesCol = collection(db, 'movies');
    // const citySnapshot = await getDocs(citiesCol);
    
  //   querySnapshot.forEach((snapshot) => {
  //     console.log(snapshot);
  
  //     snapshot.docs.map((doc) => {
  //       console.log("recommends",recommends);
  //       switch (doc.data().type) {
  //         case "recommend":
  //          // recommends = [...recommends, { id: doc.id, ...doc.data() }];
  //           setRecommends(...recommends, { id: doc.id, ...doc.data() })

  //           break;

  //         case "new":
  //          // newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
  //           setNewDisneys(...newDisneys, { id: doc.id, ...doc.data() });
  //           break;

  //         case "original":
  //           //originals = [...originals, { id: doc.id, ...doc.data() }];
  //           setOriginals(...originals, { id: doc.id, ...doc.data() });
  //           break;

  //         case "trending":
  //          // trending = [...trending, { id: doc.id, ...doc.data() }];
  //           setTrending(...trending, { id: doc.id, ...doc.data() });
  //           break;
  //       }
  //     });

  //     dispatch(
  //       setMovies({
  //         recommend: recommends,
  //         newDisney: newDisneys,
  //         original: originals,
  //         trending: trending,
  //       })
  //     );
  //   });
  // }, [userName]);



  return (
 
    <Container>
     <ImgSlider />
     <Viewers />
     <Recommends />
     <NewDisney />
     <Trending />  
    <Originals />
    </Container>
   
  )
}

const Container =styled.main`
  position: relative;
  min-height: calc(100vh -250px);

 
  overflow-x: hidden;
  display: block;
  //background: url("/images/home-background.img");
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }

`;
export default Home