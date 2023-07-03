import React from 'react'
import Header from './Header'
// import { useStateValue } from '../context/StateProvider';
// import { getAllSongs } from '../api';
// import { actionType } from '../context/reducer';
// import SongCard1 from './SongCard1';

export default function home() {
  // const [{allSongs}, dispatch] = useStateValue();
  // useEffect(()=>{
  //     if(!allSongs){
  //       getAllSongs().then((data)=>{
  //         dispatch({
  //           type : actionType.SET_ALL_SONGS,
  //           allSongs : data.song,
  //         })
  //       })
  //     }
  //   },[])
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
      <Header />
      {/* <div className='relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md'>
            <SongContainer data={allSongs}/>
      </div> */}
    </div>
  )
}

// export const SongContainer = ({data}) => {
//   return (
//     <div className='w-full flex flex-wrap gap-3 items-center justify-evenly'>
//       {data && data.map((song,i)=>(
//         <SongCard1 key={song._id} data={song} index={i}/>
//       ))}
//     </div>
//   )
// }
