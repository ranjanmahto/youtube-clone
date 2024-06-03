import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const showMenu= useSelector((store)=>store.app.isMenuOpen);
  if(showMenu== false)
    {
      return;
    }
  return (
    <div className="w-42 h-screen  px-3" >
       <div>
          <button>
            Home
          </button>
       </div>
       <div>
          <button>
            Shorts
          </button>
       </div>
       <div>
          <button>
            Subscriptions
          </button>
       </div>
       <hr className='font-semibold'/>





    </div>
  )
}

export default Sidebar