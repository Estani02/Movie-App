import { useSelector } from "react-redux"
import YouTube from "react-youtube"
import s from './video.module.css';


export default function Video(){

    const video = useSelector(state => state.video[0])
    if(video){
    return( 
        <YouTube 
        videoId={video.key}
        className={s.contenedorVideo}
        opts={{
            width: "80%",
            height: "100%",
            playerVars: {
                autoplay: 0,
                controls: 1,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
            },
        }}
    />
    )
    }
}