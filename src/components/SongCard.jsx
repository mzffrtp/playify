import { Link } from "react-router-dom";
import PlayPause from "./PlayPause"
import { useSelector } from "react-redux";


export default function SongCard ({song, i}) {
  const {activeSong, isPlaying} = useSelector((state)=>state.player);

  console.log(song.item);
  const handlePauseClick = () => {

  }

  const handlePlayClick = () => {

  }
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-pulse rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.item.title ? "flex bg-black bg-opacity-70" :"hidden"}`}>
          <PlayPause song = {song}
          handlePauseClick = {handlePauseClick}
          handlePlayClick= {handlePlayClick}/>
        </div>
        <img className="w-full h-full rounded-lg"  
        alt="song-img" src={song.item.header_image_url}/>
      </div>
      <div>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={`https://genius-song-lyrics1.p.rapidapi.com/songs/${song.item.id}`}>
          {song.item.title}
          </Link>
        </p>
      </div>
      <div>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={""}>
          {song.item.artist_names}
          </Link>
        </p>
      </div>
    </div>
  )
}