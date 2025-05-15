'use client'
import { useSelector ,useDispatch} from "react-redux";
import {increment} from "./store/slice/counterReducer"
export default function Home() {
  const myCounterValue = useSelector(state=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1 className='text-2xl'>Bonoua Online</h1>
      <p>{myCounterValue}</p>
      <button className="btn" onClick={()=>dispatch(increment())}>Increment</button>
      {/* <div>
        <ul>
           <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/Contact">Contact Page</Link>
          </li>
          <li>
            <Link href="/listUser">List User</Link>
          </li>
        </ul>
      </div> */}
    </div>
  
  );
}
