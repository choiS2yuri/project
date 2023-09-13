import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHandshakeAngle, faMagnifyingGlass, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { NavLink, useLocation } from 'react-router-dom'
import axios from 'axios'


function Search() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [data, setData] = useState();
  const [alldata, setAllData] = useState();
  const [donm, setDonm] = useState("전체")

  const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);
    useEffect(() =>{
      axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=PROJECT&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json`).then(function(res){
        // console.log(res.data.response.body.items.item);
        setData(res.data.response.body.items.item);
      })
    },[])
    // const [city, setCity] = useState(["모든 지역"])
    // useEffect(()=>{
    //   fetch("https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=PROJECT&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json").then((res) =>{
    //     return res.json()
    //   }).then((data)=> {
    //     console.log(data)
    //     // setCity(res.data.response.body.items.item)
    //   });
    // },[]);
    
    const FilterData = data && data.filter(e =>{
      return donm === "전체" || donm === e.doNm
     })


  return (
    <>
      <div className="h-[5000px]">
      {/* 모바일 써치+버튼 시작 */}
        <div className={`z-50 bg-white pt-5 w-[100%] fixed top-0 flex justify-around ${scrollPosition > 500 ? "block" : "hidden"}`}>
          <div className=" max-w-[70%] h-9 flex justify-between flex-nowrap rounded-lg border items-center lg:basis-3/4 relative" >
            <div className='basis-3/4 border h-full rounded'>
              <input type="text" placeholder='검색어를 입력하세요' className='  border-none  w-full h-full'/>
            </div>
            <div className='basis-1/4 border h-full rounded'>
              <button className='border bg-[#98EECC] text-white font-bold rounded text-lg right-0 w-[100%] h-full'>
                <NavLink to='/'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      {/* 모바일 써치+버튼 끝 */}
                
        {/* 유리써치 */}
        <div className="mt-5 w-full h-[300px]">
          <div className="max-w-7xl h-9 mx-auto flex justify-between flex-nowrap rounded-lg border items-center lg:basis-10/12" >
            <select className=''>
              <option>전체</option>
                {
                  data && FilterData.map((e,i)=>{
                    return(
                    <li key={i}>{e.doNm}</li>
                    )
                  })
                }
                {/* <option value="0">전체</option>
               <option value="1">서울</option>
               <option value="2">부산시</option>
               <option value="3">대구시</option>
               <option value="4">인천시</option>
               <option value="5">광주시</option>
               <option value="6">대전시</option>
               <option value="7">울산시</option>
               <option value="8">세종시</option>
               <option value="9">경기도</option> */}
            </select>
            <DatePicker
              locale={ko}
              selectsRange={true}
              startDate={startDate} 
              endDate={endDate} 
              onChange={(date)=>setDateRange(date)} 
              dateFormat="yyyy년 MM월 dd"
              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 300)}
              monthsShown={2} className='w-64 text-black'/>
            <input type="text" placeholder='검색어를 입력하세요' className='  border-none right-[30%]'/>
            <NavLink to='/sdetail' className="border bg-[#98EECC] text-white font-bold rounded-3xl text-lg right-0 w-[20%]">
              <FontAwesomeIcon icon={faMagnifyingGlass} className='w-full mx-auto' />
            </NavLink>
          </div>
        </div>
        {/* 유리써치 끝*/}
      </div>
    </>
  )
  }


export default Search