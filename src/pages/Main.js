import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHandshakeAngle, faMagnifyingGlass, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {pclogo} from './../images/pclogo.png'
// import {mobilelogo} from './../images/mobilelogo.png'





function Main() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // const [data, setData] = useState();
  const [sideOpen, setSideOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);
    // useEffect(() =>{
    //   axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=PROJECT&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json`).then(function(res){
    //     // console.log(res.data.response.body.items.item);
    //     setData(res.data.response.body.items.item);
    //   })
    // },[])
// 정석이 리뷰 함수
// const [data, setData] = useState(Card);
//   let [type, setType] = useState("best")

//   const best = [['맛있는 먹거리','재미있는','낭만캠핑'], ['가족과함께','애완동물동반','캠핑카'],['카라반','자연과함께','sdadsadas']]
//   const recent = [['가족과함께','애완동물동반','캠핑카'],['추천캠핑','조용해요','별이보여요'],['카라d반adsasd','asds','sdadsadas']]  

//   const hash = () =>{
//    let value;

//    if(type === "best"){

//     best.forEach(e => {
//       return value = e;
//     })

//    }else if(type==="recent"){
//     recent.forEach(e => {
//       return value = e;
//     })
//    }
//     return value
//   }
  
//   const CardMenu = data.filter(e =>{
//     return (type === "" || e.type === type)    
//   })
//   console.log(CardMenu)
         

  return (
    <>
    <div className="h-[5000px]">
      {/* 윤정헤더 */}
      <div className="w-full bg-white h-[50px] md:h-[180px] ${sideOpen === true ? 'hidden' : ''}">
        <div className="max-w-7xl mx-auto relative">
          <div className="xl:pt-3 xl:pb-3 ">
            <div className="flex">
              <a href="/" className="flex px-3 my-2">
                <img src='./../images/pclogo' alt="logo" className="w-0 md:w-[150px] md:h-[100px] " />
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
              <div>
                <div className="w-6 h-4 relative top-2  -right-[80%] sm:-right-[70%] md:-right-[80%] cursor-pointer md:hidden" onClick={()=>{setSideOpen(!sideOpen);}}>  
                  <span className={`absolute top-0 left-0 w-full h-[3px] bg-black rounded-md 4 ${sideOpen === true ? 'hidden' : ''} `}></span>
                  <span className={`absolute top-[50%] left-0 w-full h-[3px] bg-black rounded-md ${sideOpen === true ? '-rotate-45' : ''}`}></span>
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-md  ${sideOpen === true ? 'top-[50%] rotate-45' : ''}`}></span>
                </div>
                {/* 모바일 써치+버튼 시작 */}
                <div className={`z-50 bg-white pt-5 w-[100%] fixed top-0 flex justify-around ${scrollPosition > 500 ? "block" : "hidden"}`}>
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
                </div>
                {/* 모바일 써치+버튼 끝 */}
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
      {/* 윤정헤더 끝 */}
      {/* 유리써치 */}
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
      {/* 유리써치 끝*/}
      {/* 나현리뷰시작 */}
      <div className='w-full bg-slate-500 h-[300px]'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {/* 나현리뷰끝 */}
      {/* 수연이벤트배너 */}
      
      {/* 수연이벤트배너끝 */}
      {/* 정석리뷰시작 */}
      {/* <div className="w-full mt-10">
        <div className="flex mx-auto mb-4 md:w-[100%] ">
          <h2 className='text-[20px] mx-auto basis-[50%] md:basis-[40%] lg:basis-[25%] xl:basis-[20%]'>리뷰&</h2>
          <ul className="flex basis-[33%] md:basis-[20%] lg:basis-[30%]">
            <li className="mr-2 cursor-pointer bg-lime-300" onClick={()=>{setType("best")}}>인기순ㅣ</li>
            <li className="cursor-pointer" onClick={()=>{setType("recent")}}>최신순</li>
          </ul>
        </div>
      <div className="w-full">
        { CardMenu.slice(1,4).map((e,i)=>{
           return(
            <ul className='mx-auto w-[100%] md:flex justify-center'>
              <li className='py-2 md:basis-[40%] lg:basis-[25%] xl:basis-[15%] '>
                <img src={e.img} alt="" className='rounded-2xl h-[200px] w-[80%] mb-4 mx-auto md:w-[90%] lg:w-[100%]' />
              </li>
              <li className='mb-5 md:basis-[45%] flex flex-col justify-center lg:basis-[35%]'>
                <p className='w-[80%] mx-auto mb-5 bg-lime-200 md:basis-[10%] lg:w-[80%]'>{e.title}</p>
                <p className='w-[80%] mx-auto mb-5 md:line-clamp-2'>{e.desc}</p>
                  <div className='flex justify-around text-center w-[90%] mx-auto '>
                    {hash(i).map((e,index) =>{
                        return (
                        <div className='hidden border rounded-lg border-black-600 md:block basis-[30%] py-2 lg:basis-[25%]' key={i}>{e}</div>
                        )
                      })
                      }
                  </div>
              </li>
              <NavLink to ="/GreenTalk">
                <p className='hidden md:block relative top-[200px] -left-[20px]'>더 보기</p>      
              </NavLink>
            </ul>
            ) 
            })  
            }
      </div>
      </div> */}
      {/* 정석리뷰끝 */}
      {/* 장터시작 */}
      <div className='w-full'>
        <ul className='max-w-7xl mx-auto flex justify-around flex-wrap basis-full'>
          <li className='w-[200px] h-[200px] bg:white border-[3px] border-[#D8FFD1] rounded-[20px] relative text-center cursor-pointer'>
            <FontAwesomeIcon className="text-[#DDDDDD] text-[65px] pt-[50px] drop-shadow-[3px_3px_rgba(127,138,140,0.15)]" icon={faCartShopping} />
            <p className='text-end px-[10px] w-[194px] h-[47px] bg-[#24D181] absolute bottom-0 text-white text-[25px] rounded-b-[17px] leading-[47px]'>판매</p>
          </li>
          <li className='w-[200px] h-[200px] bg:white border-[3px] border-[#D8FFD1] rounded-[20px] relative text-center cursor-pointer'>
            <FontAwesomeIcon className="text-[#DDDDDD] text-[65px] pt-[50px] drop-shadow-[3px_3px_rgba(127,138,140,0.15)]" icon={faMoneyCheckDollar} />
            <p className='text-end px-[10px] w-[194px] h-[47px] bg-[#24D181] absolute bottom-0 text-white text-[25px] rounded-b-[17px] leading-[47px]'>구매</p>
          </li>
          <li className='w-[200px] h-[200px] bg:white border-[3px] border-[#D8FFD1] rounded-[20px] relative text-center cursor-pointer'>
            <FontAwesomeIcon className="text-[#DDDDDD] text-[65px] pt-[50px] drop-shadow-[3px_3px_rgba(127,138,140,0.15)]" icon={faHandshakeAngle} />
            <p className='text-end px-[10px] w-[194px] h-[47px] bg-[#24D181] absolute bottom-0 text-white text-[25px] rounded-b-[17px] leading-[47px]'>양도</p>
          </li>
        </ul>
      </div>
      {/* 장터끝 */}
      {/* 정석리스트시작 */}

      {/* 정석리스트끝 */}
      {/* 윤정풋터시작 */}
      <div className="h-[250px] md:h-[200px] text-[13px] md:text-[16px] border-t-[1px] border-solid-[#ddd] bg-[#F9F9F9] text-[#999999] md:py-4 md:px-4 lg: px-6 ">
        <div className="max-w-7xl mx-auto md:text-[15px] md:flex md:justify-between ">
          <div className="md:flex md:items-center">
            <a href="/" className='flex justify-center mr-4'><img src="./../images" alt="logo" className='w-[70px] h-[70px] md:w-[100px] md:h-[100px]'/></a>
            <div className="relative">
              <ul className="flex justify-center border-b-[1px] border-solid-[#ddd] md:border-transparent text-[15px] ">
                  <li className=""><a href="/">서비스 이용약관</a> | </li>
                  <li className="ml-2"><a href="/">개인정보 처리방침</a> | </li>
                  <li className="ml-2"><a href="/">제휴 신청</a> | </li>
                  <li className="ml-2"><a href="/">제휴 문의</a></li>
              </ul>
              <div className="text-center md:text-left">
                <p className=""><a href="/">(주)그린핑</a></p>
                <p className=""><a href="/">대표이사:ooo</a></p>
                <p className=""><a href="/">사업자등록번호 : 504-85-25999</a></p>
                <p className=""><a href="/">주소:대구광역시 중구 중앙대로 394, 제일빌딩 5F </a></p>
                <p className=""><a href="/">전화:053-123-4567</a></p>
              </div>
              {/* <ul className="flex justify-center mt-2 ">
                  <li className=""><a href="/">(주)그린핑 </a></li>
                  <li className="ml-2"><a href="/">대표이사:ooo </a></li>
                  <li className="ml-2"><a href="/">사업자등록번호:123-4567-890</a></li>
                  <li className="ml-2"><a href="/">주소:대구시 중구 </a></li>
                  <li className="ml-2"><a href="/">전화:053-123-4567</a></li>
              </ul>  */}
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex md:block">
                <li className="text-[25px] text-bold"><a href="/">고객센터1500-6000</a></li>
                <li className=""><a href="/">평일 09:00 - 18:00</a></li>
                <li className=""><a href="/">점심시간 11:30 - 12:30</a></li>
            </ul>
          </div>   
        </div>
      </div>
      {/* 윤정풋터끝 */}
    </div>
  </>
  )
}

export default Main