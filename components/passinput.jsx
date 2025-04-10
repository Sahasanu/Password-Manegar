import React, { useState } from 'react'
import person from '../src/assets/person.png'
import visioff from '../src/assets/visi_off.png'
import vision from '../src/assets/visi_on.png'

const manegar = () => {
  const [src, setSrc] = useState(visioff)

  const handleVisible = () => {
    setSrc(prevSrc => prevSrc === visioff ? vision : visioff)
  }
  return (
    <div className='Manconatiner w-[50%] h-[auto] ml-auto mr-auto  mt-[5vh] rounded-[10px] bg-white z- shadow'>
      <div className="head bg-green-300 rounded-t-[5px] h-[5vh] font-bold flex items-center pl-[1vw]"> Save Your Passwords</div>
      
        <div className="input w-[100%]  p-[1vw]">
          <input
            className='w-[100%] bg-gray-300 rounded-[6px] p-[10px]  focus:outline-none'
            type="text"
            placeholder="Enter Web links"
          />
          <div className="userpass flex gap-[10px] mt-[10px] ">
            <div className=' bg-gray-300 w-[50%] rounded-[6px] flex items-center'>
              <input
                type="text"
                className=' w-[90%] bg-transparent  p-[10px] focus:outline-none'
                placeholder="Enter Username"
              />
              <div className="image w-[10%]  pl-[7px]">
                <img src={person} alt="" />
              </div>
            </div>
            <div className='w-[50%] rounded-[6px] flex items-center  bg-gray-300 '>
              <input
                type={src === visioff ? "password" : "text"}
                className='w-[90%] bg-gray-300 rounded-[6px] p-[10px]  focus:outline-none'
                placeholder="Enter password"
              />
              <div className="w-[10%]">
                <img src={src} alt="Toggle visibility" onClick={handleVisible} className='w-[20px] cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default manegar
