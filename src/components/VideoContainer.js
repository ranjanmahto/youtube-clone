import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const fetch_videos=async ()=>{
    const data= await fetch(YOUTUBE_API);
    const response= await data.json();

    // console.log(response);
    setVideos(response.items);
  }



   useEffect(()=>{
    fetch_videos();
   },[])

  return (
    <div className="flex flex-wrap ">

      {videos.map((video)=> <Link to={"/watch?v="+video.id}>    <VideoCard info={video}/> </Link>)}
             
    </div>
  )
}

export default VideoContainer