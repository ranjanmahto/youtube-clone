import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch= useDispatch();

  const handleToggleMenu = ()=>{
    dispatch(toggleMenu());

  }
  return (
    <div className="flex justify-between px-4 py-3 items-baseline">
          <div className="flex gap-4 ">
            <i className="fa-solid fa-bars text-lg cursor-pointer" onClick={handleToggleMenu} ></i>
            <img alt='logo' className="h-6"  src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"/>
          </div>

          <div className="flex  align-baseline">
             <input type="text" className="border border-gray-400 rounded-l-full w-[30rem] px-3 h-10"/>
             <button className="rounded-r-full border border-gray-400 px-3 bg-gray-100">search</button>
             
          </div>

          <div>
            <img alt="user logo" className="h-10" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" />
          </div>
    </div>
  )
}

export default Header