import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import './App.css'

function App({noOfStars=10}) {

  const [ratings, setRatings] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex){
    setRatings(getCurrentIndex);
    
  }
  function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex);
    
  }
  function handleMouseLeave(){
    setHover(ratings);
    
  }

  return (
    <>
    {
      [...Array(noOfStars)].map((_,index)=>{
        index+=1;


        return <FaStar
        className={index<=(hover || ratings) ? 'active' : 'inactive'}
        key={index}
        onClick={()=>handleClick(index)}
        onMouseMove={()=>handleMouseEnter(index)}
        onMouseLeave={()=>handleMouseLeave()}
        size={40}
        />
      })

      
    }

    </>
  )
}

export default App
