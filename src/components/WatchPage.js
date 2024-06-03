import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const dispatch= useDispatch();
    const [searchParams]= useSearchParams();
   const id= searchParams.get("v");
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div className="px-4  rounded-lg">

<iframe width="1000" height="450" src={"https://www.youtube.com/embed/"+ id} 
title="YouTube video player" 
frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowFullScreen></iframe>

    </div>
  )
}

export default WatchPage