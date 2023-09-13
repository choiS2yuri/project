import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import pclogo from './../images/pc_logo.png'
import mobilelogo from './../images/mobile.logo.png'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Login from '../pages/Login'
import Eventbanner1 from './../images/card-event.jpg'
import Eventbanner2 from './../images/birthday.jpg'

function Header(){
  // const navigate = useNavigate();
  const[sideOpen,setSideOpen] = useState(false);
  
  return (
    <>
    {/* 헤더-네비바 -> 비회원이면 : 회원가입,로그인 / 회원이면:회원정보수정,로그아웃으로 변경되어야함*/}
    
    <div className="w-full bg-white h-[50px] md:h-[180px] ${sideOpen === true ? 'hidden' : ''}">
      <div className="max-w-7xl mx-auto relative">
        <div className="xl:pt-3 xl:pb-3 ">
          <div className="flex">
            <a href="/" className="flex px-3 my-2">
              <img src={pclogo} alt="logo" className="w-0 md:w-[150px] md:h-[100px] " />
              {/* <img src={mobilelogo}  alt="logo" className="ml-5 w-[100px] h-[40px] md:hidden" /> */}
            </a>
            <ul className="hidden md:flex basis-[100%] items-center">
                <li className="basis-1/4 text-center"><a href="/" className="text-[12px] md:text-[14px] lg:text-[16px] font-bold ">캠핑장 찾기</a></li>
                <li className="basis-1/4 text-center"><a href="/" className="text-[12px] md:text-[14px] lg:text-[16px] font-bold">랭킹</a></li>
                <li className="basis-1/4 text-center"><a href="/" className="text-[12px] md:text-[14px] lg:text-[16px] font-bold">리뷰</a></li>
                <li className="basis-1/4 text-center"><a href="/" className="text-[12px] md:text-[14px] lg:text-[16px] font-bold">그린톡</a></li>
                <li className="basis-1/4 text-center"><a href="/" className="text-[12px] md:text-[14px] lg:text-[16px] font-bold">그린마켓</a></li>
                <li className="basis-1/4 text-center"><a href="/" className="text-[12px] md:text-[14px] lg:text-[16px] font-bold">고객센터</a></li>
            </ul>
            {/* 햄버거버튼 */}
            <div className="w-6 h-4 relative top-2  -right-[80%] sm:-right-[70%] md:-right-[80%] cursor-pointer md:hidden" onClick={()=>{setSideOpen(!sideOpen);}}>  
              <span className={`absolute top-0 left-0 w-full h-[3px] bg-black rounded-md 4 ${sideOpen === true ? 'hidden' : ''} `}></span>
              <span className={`absolute top-[50%] left-0 w-full h-[3px] bg-black rounded-md ${sideOpen === true ? '-rotate-45' : ''}`}></span>
              <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-md  ${sideOpen === true ? 'top-[50%] rotate-45' : ''}`}></span>
            </div>
          </div>
         {/* 사이드바 -> 로그인 했을떄,안했을때 2가지 버전으로 만들어야함*/}
         <div className={`w-full h-[800px] bg-[#f9fcfc] z-50 top-0 py-5 text-[#999999] fixed  ${sideOpen === true ? 'left-0' : 'left-full'} transition-all duration-1000 md:hidden`} >
            <div className="max-w-7xl mx-auto">
               <div className="flex justify-center">
                <div className="w-[105px] h-[105px] rounded-[50%] bg-slate-200 flex items-center justify-center"></div>
               </div>
               <div className="flex justify-center">
                <p className='underline cursor-pointer'>로그인</p><span>이 필요합니다.</span>
               </div>
                {/* <div className="flex w-[80%] mx-auto h-[30px] rounded-md bg-white justify-center items-center shadow-[0_5px_14px_rgba(127,138,140,0.09)] mt-4">
                    <ul className="flex items-center ">
                          <li className=""><Link to="/"> 예약내역조회</Link> | </li>
                          <li className="ml-2"><Link to="/">마이페이지</Link> |</li>
                          <li className="ml-2"><Link to="/">쿠폰할인</Link></li>
                    </ul>
                </div>          */}
            </div>
          <div className="bg-white mt-4 shadow-[0_5px_14px_rgba(127,138,140,0.09)]">
            <div className="m-10">
              <ul className="">
                <li className="py-5"><Link to="/">캠핑장 찾기</Link></li>
                <li className="py-5"><Link to="/">랭킹</Link></li>
                <li className="py-5"><Link to="/">리뷰</Link></li>
                <li className="py-5"><Link to="/">그린톡</Link></li>
                <li className="py-5"><Link to="/">그린마켓</Link></li>
                <li className="py-5"><Link to="/">고객센터</Link></li>
              </ul>  
            </div>
          </div>
          <div className="mt-4 w-full h-full ">
            <ul className='flex gap-5 w-80 h-10'>
              {/* <li className=''><img src={Eventbanner1} alt="cardevent" className='w-[50%]'/></li>
              <li className=''><img src={Eventbanner2} alt="happyevent" className='w-[50%]' /></li>
               */}
            </ul>
          </div>
         </div>
          {/* 회원가입,로그인 */}
          <div className="hidden md:block">
              <ul className="flex text-[12px] text-[#767676] absolute top-2 right-10">
                  <li className=""><NavLink to="/membership" className="font-bold">회원가입 • </NavLink></li>
                  <li className="ml-1"><NavLink to="/login" className="font-bold relative before:absolute before:top-[50%] before:height-4 before:width-[1px] before:left-[15px] before:bg-[#000]">로그인</NavLink></li>
              </ul>
          </div>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Header