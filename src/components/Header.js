import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult } from '../utils/searchSlice';

const Header = () => {
  const dispatch= useDispatch();
  const [searchQuery, setSearchQuery]= useState("");
  const [searchSuggestion, setSearchSuggestion]= useState([]);
  const [showSuggestion, setShowSuggestion]= useState(false);
  const cache= useSelector((store)=>store.search);


  const handleToggleMenu = ()=>{
    dispatch(toggleMenu());

  }

  const getSuggestions= async ()=>{
    
    const data= await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json= await data.json();
    // console.log(json[1]);
    dispatch(cacheResult({
      [searchQuery]: json[1],
    }))
    setSearchSuggestion(json[1]);
  }

  useEffect(()=>{
    
    const timer= setTimeout(()=>{
       if(cache[searchQuery])
        {
          setSearchSuggestion(cache[searchQuery]);
        }
        else{
          getSuggestions();
        }
    },50)

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])
  return (
    <div className="flex justify-between px-4 py-3 items-baseline">
          <div className="flex gap-4 ">
            <i className="fa-solid fa-bars text-lg cursor-pointer" onClick={handleToggleMenu} ></i>
            <img alt='logo' className="h-6"  src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"/>
          </div>

          <div className="flex   flex-col">
              <div>
                  <input type="text" className="border border-gray-400 rounded-l-full w-[30rem] px-3 h-10"
                   value={searchQuery}
                    onChange={(e)=>{
                      setSearchQuery(e.target.value);
                     }}
                    
                     onFocus={(e)=>{
                      setShowSuggestion(true);
                     }}
                     onBlur={(e)=>{
                      setShowSuggestion(false);
                     }}

                   />
                <button className="rounded-r-full border border-gray-400 px-3 bg-gray-100 h-10">search</button>
              </div>

              { 
                   showSuggestion&&searchSuggestion.length>0 && <div className=" bg-white  fixed my-10 w-[30.4rem] border border-gray-300 rounded-xl shadow-lg">
                   <ul className="px-4 py-2 ">
 
                     {searchSuggestion.map((s)=><li className="hover:bg-gray-100">{s}</li>)}
                     
                     
                     
                  </ul>
                  
                  
               </div>
              }
             
          </div>

          <div>
            <img alt="user logo" className="h-10" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" />
          </div>
    </div>
  )
}

export default Header