import styled from 'styled-components'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'


const Originals = () => {

  const [originals,setOriginals] = useState(null);
  const imgURL ="https://image.tmdb.org/t/p/original/"
  const  nav = useNavigate()
  useEffect(() => {
    const fetchDatas = async () =>{
    await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US&page=1`).then((resp) =>{
      //console.log("resp",resp.data.results[1].backdrop_path);
      setOriginals(resp.data.results);
    })
  }
  fetchDatas()
  .catch(console.error)
  console.log("originals",originals)
  },[])


  return (
      <Container>
        <h4>Originals</h4>
       { !originals ? <div> hi</div> 
       :
       <>
        <Content>
           <Wrap>
           <img  data ={originals[5]} onClick={() =>{
                   nav("/detail/originals/" + originals[5].id)
                 }
                  } src= {`${imgURL + originals[5].backdrop_path}`} alt=""/>
   
           </Wrap>

           <Wrap>
           <img  data ={originals[4]} onClick={() =>{
                   nav("/detail/originals/" + originals[4].id)
                 }
                  } src= {`${imgURL + originals[4].backdrop_path}`} alt=""/>
           </Wrap>

           <Wrap>
           <img  data ={originals[3]} onClick={() =>{
                   nav("/detail/originals/" + originals[3].id)
                 }
                  } src= {`${imgURL + originals[3].backdrop_path}`} alt=""/>
           </Wrap>

           <Wrap>
           <img  data ={originals[2]} onClick={() =>{
                   nav("/detail/originals/" + originals[2].id)
                 }
                  } src= {`${imgURL + originals[2].backdrop_path}`} alt=""/>
           </Wrap>

        </Content>
        </>
   }
      </Container>
    
  )
}


const Container = styled.div`
padding: 0 0 26px;
`
const Content = styled.div`
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));

 @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
`
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Originals