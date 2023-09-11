import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { NavLink } from 'react-router-dom'
import axios from 'axios'



function Search() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [data, setData] = useState();
  const [sideOpen, setSideOpen] = useState();

  const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);
    useEffect(() =>{
      axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=Project&serviceKey={process.env.REACT_APP_APIKEY}&_type=json`).then(function(res){
        console.log(res.data.response.items.item);
        // setData(res.data.BasedList.item);
      })
    },[])

  return (
    <>
      <div className="h-[5000px]">
        <div className={`mt-5 w-[80%] h-[300px] fixed top-0 flex justify-around ${scrollPosition > 500 ? "block" : "hidden"}`} >
          <div className=" max-w-[640px] h-9 mx-auto flex justify-between flex-nowrap rounded-lg border items-center lg:basis-3/4 relative" >
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
          <div className="w-6 h-4 relative top-2 right-0 cursor-pointer fiexd" onClick={()=>{setSideOpen(!sideOpen); }}>  
              <span className={`absolute top-0 left-0 w-full h-[3px] bg-black rounded-md 4 ${sideOpen === true ? 'hidden' : ''} `}></span>
              <span className={`absolute top-[50%] left-0 w-full h-[3px] bg-black rounded-md ${sideOpen === true ? '-rotate-45' : ''}`}></span>
              <span className={`absolute top-[100%] left-0 w-full h-[3px] bg-black rounded-md  ${sideOpen === true ? 'top-[50%] rotate-45' : ''}`}></span>
          </div>
        </div>
        <div className="mt-5 w-full h-[300px]">
          <div className="max-w-7xl h-9 mx-auto flex justify-between flex-nowrap rounded-lg border items-center lg:basis-10/12" >
            <select className=''>
              <option value="0">전체</option>
              <option value="1">서울</option>
              <option value="2">부산시</option>
              <option value="3">대구시</option>
              <option value="4">인천시</option>
              <option value="5">광주시</option>
              <option value="6">대전시</option>
              <option value="7">울산시</option>
              <option value="8">세종시</option>
              <option value="9">경기도</option>
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
              monthsShown={2} className='w-64'/>
            <input type="text" placeholder='검색어를 입력하세요' className='  border-none right-[30%]'/>
            <NavLink to='/sdetail' className="border bg-[#98EECC] text-white font-bold rounded-3xl text-lg right-0 w-[20%]">
              <FontAwesomeIcon icon={faMagnifyingGlass} className='w-full mx-auto' />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
  };


export default Search