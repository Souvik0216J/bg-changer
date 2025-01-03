import { useState } from 'react'
import './App.css'

function App() {
  // color is variables
  const [color, changeColor] = useState('olive')

  // function chnageColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick ={() => changeColor('red')} className='outline-none px-3 py-1 rounded-full text-black shadow-lg hover:text-red-500'>Red</button>
          <button onClick ={() => changeColor('green')} className='outline-none px-3 py-1 rounded-full text-black shadow-lg hover:text-green-500'>Green</button>
          <button onClick ={() => changeColor('blue')}  className='outline-none px-3 py-1 rounded-full text-black shadow-lg hover:text-blue-500'>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
