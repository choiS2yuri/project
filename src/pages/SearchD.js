import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import basedList from './../data/list'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Sdetail from '../components/Sdetail'
import { eachDayOfInterval } from 'date-fns'

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
    all: unset;
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
  /* display: flex; justify-content: start; */
  /* white-space: break-spaces; //줄이 길어지면 자동으로 줄바꿈 */
  img{
    width: 20%; display: block; 
    margin-bottom:24px; position: relative;}
  ul{
    flex-basis: 100%;
    border: 1px solid #ddd; border-radius: 5px;
    list-style: none;
    margin: 20px 20px; box-sizing: border-box; cursor: pointer;
    border: 1px solid #ddd;
    
    li{
      width: auto;
      
      span{
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
const Input = styled.input`
  border: none;
  right: 30%;
`
function SearchD() {

    const [monsters, setMonsters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [copy, setCopy] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");


    useEffect(()=>{
      fetch("https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=project&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json")
    .then((res) =>{return res.json()})
    .then((data)=> {
      setMonsters(data.response.body.items.item)
      setCopy(data.response.body.items.item)
    }); 
  },[]);
    
  

  useEffect(() => {
      setMonsters(
          copy.filter(
              (e) =>
                  e.facltNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  e.addr1.includes(searchTerm) ||
                  e.induty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  e.firstImageUrl.includes(searchTerm) 
          )
      );
      setSearchKeyword()
  }, [searchTerm, copy]);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (    
  <>
      <Wrap>
        <Searchwrap>
          <SearchForm>
            <Searchbar>
              <Input type='text' placeholder='검색어를 입력하세요' onChange={handleInput} />
              <button>검색하기</button>
            </Searchbar>
          </SearchForm>
        </Searchwrap>
        <SearchLine />
        <Content >          
          <ContentItem>
            {
              
            }
          </ContentItem>
        </Content>
      </Wrap>
    </>
  )
}

export default SearchD