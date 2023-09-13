import React from 'react'
import pclogo from './../images/pc_logo.png'

function Footer(){
  return (
    <>
    <div className="h-[250px] md:h-[200px] text-[13px] md:text-[16px] border-t-[1px] border-solid-[#ddd] bg-[#F9F9F9] text-[#999999] md:py-4 md:px-4 lg: px-6 ">
      <div className="max-w-7xl mx-auto md:text-[15px] md:flex md:justify-between ">
        <div className="md:flex md:items-center">
            <a href="/" className='flex justify-center mr-4'><img src={pclogo} alt="logo" className='w-[70px] h-[70px] md:w-[100px] md:h-[100px]'/></a>
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
    
    </>
  )
}

export default Footer