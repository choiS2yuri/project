import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
// import set from 'date-fns/set/index.js'


function Market() { 

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    // const targetRef = useRef(null);  
    // const handleScroll = () => {
    //   console.log("scrolling");
      
    //   if (window.scrollY > 0) {
    //     targetRef.current.style.position = "fixed";      
    //   }
    // };
  

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);
    

  return (
    <>
    
        <div className="h-[5000px]">
            {/* 네비에 넣을 써치부분 시작 */}
            <div className={`mt-5 w-full h-[300px] fixed top-0 ${scrollPosition > 500 ? "block" : "hidden"}`} >
                <div className=" max-w-7xl h-9 mx-auto flex justify-between flex-nowrap rounded-lg border items-center lg:basis-10/12" >
                    <input type="text" placeholder='검색어를 입력하세요' className='  border-none right-[30%]'/>
                    <button className='border bg-[#98EECC] text-white font-bold rounded-3xl text-lg right-0 w-[20%]'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            {/* 네비에 넣을 써치부분 시작 끝 */}
            {/* 마켓 부분 */}
            <div className='w-full'>
                <ul className='max-w-7xl mx-auto flex justify-around flex-wrap basis-full'>
                    <li className='text-center'>
                        <a href="/"><img src="https://placeholder.com/150x150" alt="판매" className=' w-full rounded-md shadow-sm cursor-pointer' />판매</a>
                    </li>
                    <li className='text-center'>
                        <a href="/"><img src="https://placeholder.com/150x150" alt="구매" className='rounded-md shadow-sm cursor-pointer' />구매</a>
                    </li>
                    <li className='text-center'>
                        <a href="/"><img src="https://placeholder.com/150x150" alt="양도" className='rounded-md shadow-sm cursor-pointer'/>양도</a>
                    </li>
                </ul>
            </div>
            {/* 메인에 넣은 써치부분 */}
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
                        monthsShown={2}
                    className='w-64'/>
                    <input type="text" placeholder='검색어를 입력하세요' className='  border-none right-[30%]'/>
                    <button className='border bg-[#98EECC] text-white font-bold rounded-3xl text-lg right-0 w-[20%]'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default Market