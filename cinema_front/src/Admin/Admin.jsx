import style from './Admin.module.css'
import React from "react";
import Cinemas from "../Cinema/Cinemas";
import Films from "../Films/Films";
import Seances from "../Seances/Seances";
import {useNavigate} from "react-router";

const Admin = () => {

    const [cinemas, setCinemas] = React.useState(null)
    const [films, setFilms] = React.useState(null)
    const navigate = useNavigate()

    let logOut = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return <div className={style.outer}>
        <div className={style.header}>
            <button onClick={() => logOut()} >Выйти</button>
        </div>
        <div>
            <Cinemas cinemas={cinemas} setCinemas={setCinemas}/>
            <Films films={films} setFilms={setFilms}/>
            <Seances cinemas={cinemas} films={films}/>
        </div>
    </div>
}

export default Admin