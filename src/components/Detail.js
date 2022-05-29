import styled from 'styled-components'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const { idrec,idorg,idtren,iddis } = useParams();
    const[datas,setDatas] =useState([]);
    const imgURL ="https://image.tmdb.org/t/p/original/";
    const id =[idrec,idorg,idtren,iddis];
    id.map((i) =>{
      
       
    })
  
    useEffect (() =>{
     const fetchData = async () =>{

        id.map((i) =>{
            switch(i){
                
                case idrec:
                     axios.get(`
                    https://api.themoviedb.org/3/movie/${idrec}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
                      
                        console.log(resp.data)
                        //setDatas(resp.data.original_title)
                        setDatas(resp.data)
                    })
                break;
                
                case idorg:
                     axios.get(`
                     https://api.themoviedb.org/3/tv/${idorg}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
                      
                        console.log(resp.data)
                        // setDatas(resp.data.name)
                        setDatas(resp.data)
                    })
                break;

                case idtren:
                     axios.get(`
                     https://api.themoviedb.org/3/tv/${idtren}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
                      
                        console.log(resp.data)
                        // setDatas(resp.data.original_name)
                        setDatas(resp.data)
                    })
                break;

                case iddis:
                     axios.get(`
                    https://api.themoviedb.org/3/movie/${iddis}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
                      
                        console.log(resp.data.original_title)
                        // setDatas(resp.data.original_title)
                        setDatas(resp.data)
                    })
                break;

                
            }
        })
       

        // await axios.get(`
        // https://api.themoviedb.org/3/movie/${idorg}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
        //     console.log(resp.data)
        //     setDatas(resp.data)
        // })

        // await axios.get(`
        // https://api.themoviedb.org/3/movie/${idtren}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
        //     console.log(resp.data)
        //     setDatas(resp.data)
        // })

        // await axios.get(`
        // https://api.themoviedb.org/3/movie/${iddis}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then((resp) =>{
        //     console.log(resp.data)
        //     setDatas(resp.data)
        // })


     }
     fetchData()
     .catch(console.error)
    },[])
  return (
    
    <Container>
      <Background>
      <img alt={datas.original_title} src={imgURL + datas.poster_path} />
      </Background>
      <ContentMeta>
          <Controls>
             <Player>
             <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
             </Player>
             <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
          </Controls>
          <SubTitle>{datas.original_title}</SubTitle>
        <Description>{datas.overview}</Description>
      </ContentMeta>
    </Container>
  )
}



const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 210px 10px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 55px;

  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail



 // let one   =`https://api.themoviedb.org/3/movie/${idrec}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`
    // let two   =`https://api.themoviedb.org/3/movie/${idorg}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`
    // let three =`https://api.themoviedb.org/3/movie/${idtren}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`
    // let four  =`https://api.themoviedb.org/3/movie/${iddis}?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`

            // const requestOne = axios.get(one);
        // const requestTwo = axios.get(two);
        // const requestThree = axios.get(three);
        // const requestFour = axios.get(four);

        // await axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
        //     const responseOne = responses[0]
        //     const responseTwo = responses[1]
        //     const responesThree = responses[2]
        //     const responsesFour =responses[3]
        //     console.log("rep1",responseOne)
        //     // use/access the results 
        //   })).catch(errors => {
        //     // react on errors.
        //   })