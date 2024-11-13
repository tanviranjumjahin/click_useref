
import './App.css'
import { useRef, useState } from "react";
import Container from './componentes/Container';




function App() {
  let dropRef = useRef(null)
  let handledrop =()=>{
    // console.log(dropRef.current);
    if (dropRef.current.style.display =='block') {
      dropRef.current.style.display ='none'
    } else {
      dropRef.current.style.display ='block'
    }

  }


  return (
    <>
      <Container className={'max-w-menuContainer'}>
        <div onClick={handledrop} className='pt-5'>
          <button className=' bg-red-400 py-3 px-10 text-white rounded-md'>Click</button>
          <div className="bg-teal-500 hidden "ref={dropRef}>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}


export default App





