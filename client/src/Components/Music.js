// import React, { useEffect } from 'react'
 import Header from './Header'
// import { useStateValue } from '../context/StateProvider';
// import { getAllSongs } from '../api';
// import SongCard from './SongCard';
// import { actionType } from '../context/reducer';
// import SongCard1 from './SongCard1';

// export default function Music() {
//     const [{allSongs}, dispatch] = useStateValue();
//     useEffect(()=>{
//         if(!allSongs){
//           getAllSongs().then((data)=>{
//             dispatch({
//               type : actionType.SET_ALL_SONGS,
//               allSongs : data.song,
//             })
//           })
//         }
//       },[])
//   return (
//     <div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
//         <Header />
//         <div className='relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md'>
//             <SongContainer data={allSongs}/>
//       </div>
//     </div>
//   )
// }

// export const SongContainer = ({data}) => {
//     return (
//       <div className='w-full flex flex-wrap gap-3 items-center justify-evenly'>
//         {data && data.map((song,i)=>(
//           <SongCard key={song._id} data={song} index={i}/>
//         ))}
//       </div>
//     )
//   }
  






import React,{useEffect} from 'react'
// import {NavLink} from 'react-router-dom';
// import {IoAdd,IoPause,IoPlay,IoTrash} from 'react-icons/io5'
// import {AiOutlineClear} from 'react-icons/ai'
import {useStateValue} from '../context/StateProvider';
import { getAllSongs } from '../api';
import { actionType } from '../context/reducer'
// import SongCard from './SongCard';
import SongCard1 from './SongCard1';
export default function Music() {
  // const [songFilter, setsongFilter] = useState("");
  // const [isFocus, setisFocus] = useState(false);
  const [{allSongs}, dispatch] = useStateValue();
  useEffect(()=>{
    if(!allSongs){
      getAllSongs().then((data)=>{
        dispatch({
          type : actionType.SET_ALL_SONGS,
          allSongs : data.song,
        })
      })
    }
  })
  return (
  
    <div className='w-full p-4 flex items-center justify-center flex-col'>
      <Header />
      {/* <div className='w-full flex justify-center items-center gap-20'>
        <NavLink to={"/dashboard/newSong"} className="flex items-center justify-center px-4 py-3 border rounded-md border-gray-300
        hover:border-gray-500 hover:shadow-md cursor-pointer">
          <IoAdd />
        </NavLink>
        <input type='text' placeholder='Search Here...' value={songFilter} onChange={(e)=> setsongFilter(e.target.value)} 
        onBlur={()=>setisFocus(false)}
        onFocus={()=>setisFocus(true)}
        className={`w-52 px-4 py-2 border ${isFocus ? "border-gray-500 shadow-md":"border-gray-300"} rounded-md bg-transparent outline-none
        duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}/>
        <i><AiOutlineClear className='text-3xl text-textColor cursor-pointer'/>
        </i>
      </div> */}
      {/* Main Container */}
      <div className='relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md'>
        {/* count */}
        {/* <div className='absolute top-4 left-4'>
          <p className='text-xl font-bold'> 
            <span className='text-sm font-semibold text-textColor'>Count:{" "}</span>
            {allSongs?.length}
          </p>
        </div> */}
        <SongContainer data={allSongs}/>
      </div>
    </div>
  )
}

export const SongContainer = ({data}) => {
  return (
    <div className='w-full flex flex-wrap gap-3 items-center justify-evenly'>
      {data && data.map((song,i)=>(
        <SongCard1 key={song._id} data={song} index={i} type="song"/>
      ))}
    </div>
  )
}
