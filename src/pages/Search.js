import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHandshakeAngle, faMagnifyingGlass, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { NavLink, useLocation } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const Wrap = styled.div`
  height: 5000px;
`
const Wrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 300px;
`
const SearchContent = styled.div`
  max-width: 1280px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  border-radius: 5px;
  align-items: center;
  >input{
    flex-basis: 40%;
    height: 100%;
  }
  @media screen {
    
  }
`
const StyleDate = styled(DatePicker)`
    width: 250px;
    color: black;
    height: 100%;
`
const NavLinkWrap = styled.div`
  background-color: #98eecc;
  color: #fff;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  font-size: 18px;
  right: 0;
  flex-basis: 20%;
  height: 100%;
  a{
    >svg{   
      width: 100%;
      margin: 10px auto;
      font-weight: bold;
    }
  }
`

const MSearch = styled.div`

`
// ${scrollPosition > 500 ? "block" : "hidden"}`}
function Search() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [data, setData] = useState("전체");
  const [alldonm, setAllDonm] = useState("");
  const [donm, setDonm] = useState("")
  const [ischoice, setIsChoice] = useState([null,null]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState(1);
  const [Selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);

    // useEffect(()=>{
    //   fetch("https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json")
    //   .then((res) =>{return res.json()})
    //   .then((data)=> {
    //     setDonm(data.response.body.items.item)
    //   }); 
    // },[]);
    
        useEffect(()=>{
      fetch("https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=project&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json")
      .then((res) =>{return res.json()})
      .then((data)=> {
        setDonm(data.response.body.items.item)
      }); 
    },[]);
    console.log(data)
    const [optiondonmSelect, setOptionDonmSelect] = useState("");
    const optionDonm = (e) =>{
        const donmValue = e.target.value
        setOptionDonmSelect(donmValue);
        
        if(donmValue !== '전체'){
            setIsChoice([1,0])
        }else{
          setIsChoice([0,0])
        } 
      }
    
    const FilterData = donm && donm.filter(e =>{
      return
     })  

    // const Filter = [...new Set( alldonm.map(e => e.doNm))];

  return (
    <>
      <Wrap>
      {/* 모바일 써치+버튼 시작 */}
        <div className={`z-50 bg-white pt-5 w-full h-[300px] fixed top-0 flex justify-around ${scrollPosition > 500 ? "block" : "hidden"}`}>
          <div className=" max-w-[70%] h-9 flex justify-between flex-nowrap rounded-lg border items-center lg:basis-3/4 relative" >
            <div className='basis-3/4 border h-full rounded'>
              <input type="text" placeholder='검색어를 입력하세요' className='  border-none  w-full h-full'/>
            </div>
            <div className='basis-1/4 border h-full rounded'>
              <button className='border bg-[#98EECC] text-white font-bold rounded text-lg right-0 w-[100%] h-full'>
                <NavLink to='/sdetail'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      {/* 모바일 써치+버튼 끝 */}               
      {/* 유리써치 */}
        <Wrapper>
          <SearchContent>
            <select  onChange={optionDonm} className='text-[24px]  font-bold'>
              <option value="전체" >전체</option>
                {
                   donm && donm.map((e,i) =>{
                    return(
                      <option key={i} value={e.doNm}>{e.doNm}</option>)
                  })
                  // donm && Filter1.map((e,i)=>{
                  //   return(
                  //     <option key={i} value={e.doNm}>{e.doNm}</option>
                  //   )
                  // })
                }
            </select>
            <StyleDate
              locale={ko}
              selectsRange={true}
              startDate={startDate} 
              endDate={endDate} 
              onChange={(date)=>setDateRange(date)} 
              dateFormat="yyyy년 MM월 dd"

              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 300)}
              monthsShown={2} />
            <input type="text" placeholder='검색어를 입력하세요' className='  border-none right-[30%]' onChange={handleSelect} />
            <NavLinkWrap>
              <NavLink to='/searchd'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </NavLink>
            </NavLinkWrap>
          </SearchContent>
        </Wrapper>
        {/* 유리써치 끝*/}
      </Wrap>
    </>
  )
  }

export default Search