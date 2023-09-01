import {FaPauseCircle, FaPlayCircle} from "react-icons/fa"
import { useSelector } from "react-redux";

export default function PlayPause ({song, handlePause, handlePlay}) {
  const {activeSong, isPlaying} = useSelector((state)=>state.player);
  
  return (
    (isPlaying && activeSong.title === song.item.title) ? (
      <FaPauseCircle 
      size={35}
      className="text-gray-300"
      onClick={handlePause}
      />
    ) : (
      <FaPlayCircle 
      size={35}
      className="text-gray-300"
      onClick={handlePlay}/>
    )
  )
}