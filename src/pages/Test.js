import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import basedList from './../data/list'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Wrap = styled.div`
  width: 100%;
`
const Searchwrap = styled.div`
  width: 1280px;
  height: 400px;
  margin: 0 auto;
  border: 5px solid #ddd;
  border-radius: 10px;
`
const SearchForm = styled.form`
    width: 80%;
    height: 300px;
    margin: 0 auto;
    background-color: lightskyblue;
    flex-wrap: wrap;
`
const Searchbar = styled.div`
    height: 45px;
    width: 100%;
    margin: 0 auto;
`




const SearchLine = styled.div`
  margin: 40px auto;
  width: 1280px;
  border: 1px solid #ddd;
`
const Content = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 1.2% ;
`
const ContentItem = styled.div`
  flex-basis: 100%;
  border: 1px solid #ddd; border-radius: 5px;
  padding: 20px; box-sizing: border-box; cursor: pointer;
  /* white-space: break-spaces; //줄이 길어지면 자동으로 줄바꿈 */
  display: flex; justify-content: start;
  img{
    width: 20%; display: block; 
    margin-bottom:24px; position: relative;}
  ul{
    margin: 0 0 0 20px;
    li{
      width: auto;
      span{
        width: auto;
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 20px;
        box-shadow: inset 0 -10px #D8FFD1;
      }
    }
  }
  @media screen and (max-width: 1200px){
    flex-basis: 100%;
  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
`
// const Category = styled.div`
//   width: 100%;
//   margin-bottom: 1.2%;
//   ul{
//     max-width: 1200px;
//     margin: 0 auto;
//     display: flex;
//     flex-wrap: wrap; justify-content: space-between;
//     li{
//       border: 1px solid #ddd;
//       padding: 5px 20px;
//       border-radius: 5px; cursor: pointer;
//       background-color: ${(props) => props.theme.colors.ContentBg};
//       color: ${(props) => props.theme.colors.Color};
//       &.on{
//         background-color: lightyellow;
//         font-weight: bold;
//         color: #000;
//       }
//     }
//     }
// `


function Test() {

  const [data, setData] =useState(basedList);
 
// const dataFilter = data.filter(e =>{
//     if(job === "전체"){
//       return e.job
//   }else{
//       return e.job === job
//   }
//   return e.job
// })

  return (
    <>
      <Wrap>
        <Searchwrap>
          <SearchForm>
            <Searchbar>
              <input type='text' placeholder='검색어를 입력하세요'></input>
              <button>검색하기</button>
            </Searchbar>
            <Searchbar>
              <input type='text' placeholder='검색어를 입력하세요'></input>
              <button>검색하기</button>
            </Searchbar>
          </SearchForm>
        </Searchwrap>
        <SearchLine />
        <Content>
          {
            data && data.map((e,i)=>{
              return(
                <ContentItem key={i}>
                  <img src={e.firstImageUrl} alt={e.facltNm}></img>
                  <ul>
                    <li><span>{e.facltNm}</span></li>
                    <li>주소 : {e.addr1}</li>
                    <li>종류 : {e.induty}</li>
                    <li >사이트 : {e.homepage}</li>
                  </ul>
                </ContentItem>
              )
            })
          }
        </Content>
      </Wrap>
    </>
  )
}

export default Test