import React from 'react';
import {motion} from 'framer-motion'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
// import MusicPlayer from './MusicPlayer';
// import {IoTrash} from "react-icons/io5"

export default function SongCard1({data,index,type}) {
    const [{songIndex,isSongPlaying},dispath] = useStateValue();
    const addToContext=()=>{
        // console.log(type);
        if(!isSongPlaying){
            dispath({
                type:actionType.SET_ISSONG_PLAYING,
                isSongPlaying : true
            });
        }
        if(songIndex !== index){
            dispath({
                type: actionType.SET_SONG_INDEX,
                songIndex: index,
              });
        }
    }
  return (
    <motion.div className='relative w-50 min-w-[210] px-2 py-4 cursor-pointer hover:bg-card bg-gray-100 shadow-md rounded-lg 
    flex flex-col items-center' onClick={type==='song' && addToContext}>
        <div className='w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden'>
            <motion.img whileHover={{scale:1.05}}
                src={data.imageURL} className='w-full h-full rounded-lg object-cover'
            />
        </div>
        <p className='text-base text-center text-headingColor font-semibold my-2'>
            {data.name.length > 25 ? `${data.name.slice(0,25)}..` : data.name}
            {data.artist && (
            <span className='block text-sm text-gray-400 my-1'>
                {data.artist.length > 25 ? `${data.artist.slice(0,25)}..` : data.artist}
            </span>
            )}
        </p>
        {/* <MusicPlayer /> */}
    </motion.div>
  )
}
