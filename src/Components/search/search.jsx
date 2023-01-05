import { useState } from "react"
import { useDispatch } from "react-redux"
import { getMovie } from "../../Redux/actios";
import s from './search.module.css'

export default function Search(){

    const[title, setTitle] = useState('');
    const dispatch = useDispatch();

    function handleChange(e){
        setTitle(e.target.value.replaceAll(" ", "+"))
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getMovie(title))
        
        setTitle('')
    }

    return(
        <form className={s.conteiner} onSubmit={(e)=>handleSubmit(e)}>
            <input
            type="text"
            className={s.seeker}
            value={title}
            placeholder="Search for the Title..."
            onChange={(e)=>handleChange(e)}
            />
        </form>
    )
}