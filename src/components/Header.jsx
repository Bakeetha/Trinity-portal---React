import React from 'react'
import Trinity_Logo_White from '../assets/logo/Trinity_Logo_White.png';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#408bc0] border-b shadow-sm sticky top-0 z-40'> 
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
          <a>
            <img src={Trinity_Logo_White} className='h-10 cursor-pointer' 
                onClick={()=>navigate('/')}/>
          </a>
    <div>
        <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white 
                    border-b-[3px] border-b-transparent`} >
                 Solar
            </li>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent`}>
                Roofing
            </li>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent`}>
            Batteries
            </li>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent`}>
            Why Trinity
            </li>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent`}>
            Community Partners
            </li>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent`}>
            Careers
            </li>
            <li className={`cursor-pointer py-3 text-lg font-semibold text-white
                    border-b-[3px] border-b-transparent`}>Contact Us</li>
        </ul>
    </div>
    </header>
    </div>
  )
}
