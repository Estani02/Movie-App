import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getMovie } from '../../Redux/actios'
import Search from '../search/search'
import s from './nav.module.css'

export default function Nav(){

    const dispatch = useDispatch()
    
    return(
        <nav className={s.contenedor}>
                <ul className={s.subcontenedor}>
                    <li><NavLink to='/' className={s.link} onClick={()=>dispatch(getMovie(undefined)) }>HOME</NavLink></li>
                    <div>
                        <Search />
                        <li><NavLink to='/fav' className={s.link}>FAVORITE MOVIES</NavLink></li>
                        <li><NavLink to='/about' className={s.link}>ABOUT</NavLink></li>
                    </div>
                </ul>
        </nav>
    )
}