import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import loginChk from './../images/login-check.svg'
import naverLogo from "./../images/naver.svg"
import kakaoLogo from "./../images/kakao.svg"

function Login() {

    
  return (
    <div className="bg-[#f9fcfc] pt-[60px] pb-[140px] ">
        <div className="relative mx-auto w-[450px]">
            <div className="text-center text-[25px] font-semibold text-[#333] mb-9">로그인</div>
              <div className="p-[30px] bg-white rounded-xl shadow-[0_5px_14px_rgba(127,138,140,0.09)]">
                    <ul>
                      <li>
                        <input type="text" className='py-0 px-[15px] w-full h-[54px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis' placeholder='아이디를 입력해주세요.'/>
                      </li>
                      <li className='mt-[10px]'>
                      <input type="password" className='py-0 px-[15px] w-full h-[54px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis' placeholder='비밀번호를 입력해주세요.'/>
                      </li>
                    </ul>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center">
                          <div className='cursor-pointer flex'>
                              <input type="checkbox" name="" id="" className='mr-1' />
                             <p className='text-[#999] text-[12px]'>아이디 저장</p> 
                          </div>
                      </div>
                    </div>
                    <div className="mt-[25px]">
                      <ul>
                        <li><button className='bg-[#2ed090] text-[#fff] border-[1px] border-solid-[#B2FFA4] w-full h-[50px] font-bold rounded-lg text-center leading-13'>로그인</button></li>
                        {/* <li className='mt-[10px]'><button className='text-[#2ed090] w-full h-[50px] font-bold rounded-lg text-center leading-13 border-[1px] border-solid-[#B2FFA4]'>회원가입</button></li> */}
                      </ul>
                    </div>
                    <div className="flex justify-center mt-4">
                      <ul className="text-[#999] text-[12px] flex gap-3">
                          <li><NavLink to="/">아이디 찾기</NavLink></li>
                          <li><NavLink to="/">비밀번호 찾기</NavLink></li>
                          <li><NavLink to="/membership">회원가입</NavLink></li>
                      </ul>
                    </div>
                    <div className="flex mt-4">
                      <ul className='w-full flex justify-around'>
                        <li className='flex'><img src={naverLogo} alt="네이버" /><NavLink to="/"> 네이버 간편로그인</NavLink></li>
                        <li className='flex'><img src={kakaoLogo} alt="카카오톡" /><NavLink to="/"> 카카오톡 간편로그인</NavLink></li>
                      </ul>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Login