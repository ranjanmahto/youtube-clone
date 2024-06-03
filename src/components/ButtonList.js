import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list= ["All", "Comedy", "Songs","Entertainment","Jairam Mahto","Technical","Laptop","Phone","Amit Badana"];
  return (
    <div className="flex">

         
          
          {list.map((l)=><Button name={l} />)}

    </div>
  )
}

export default ButtonList