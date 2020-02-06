import React, { useState, useCallback, } from 'react';
import { Slide } from '../../constants/images';
import {Link} from 'react-router-dom';



const Content: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = useCallback(() => {
    if(count < Slide.length - 1) {
      setCount(prev => prev + 1)
    }else{
      setCount(prev => 0)
    }
    },
    [count],
  )
  const handleDecrement = useCallback(
    () => {
      if(count > 0) {
        setCount(prev => prev - 1)
      }else{
        setCount(prev => 0)
      }
    },
    [count],
  )

  return (
    <section>
      <p>You clicked {count} times</p>
      <p>
        <button onClick={handleIncrement}>+1</button>
        <Link to='/location1'><img src={Slide[count]} alt="" key={Slide[count]}/></Link>
        <button onClick={handleDecrement}>-1</button>
      </p>
    </section>
  )
}

export default Content;