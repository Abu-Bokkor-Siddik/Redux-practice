
import './App.css'

import { decrement, increment } from './redux/features/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'


function App() {
  // const count = useSelector((state) => state.counter.count)
  // both way 
  const {count} = useAppSelector((state) => state.counter)
 const dispatch= useAppDispatch()
  return (
    <>
     <div className='flex h-screen justify-center items-center'>
       <div className='flex   justify-center gap-10'><button onClick={()=>dispatch(increment(1))}className=' rounded-lg  bg-orange-300 border-t-green-400 p-4 '>increment</button>
       <p className='text-5xl '>{count}</p>
       <button onClick={()=>dispatch(decrement(1))} className=' rounded-lg  bg-red-500 border-t-green-400 p-4 '>decrement</button>
       </div>
     </div>
        
    </>
  )
}

export default App
