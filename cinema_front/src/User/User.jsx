import React from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import NewTicket from "./NewTicket/NewTicket";
import Tickets from "./Tickets/Tickets";
import Archive from "./Archive/Archive";
import style from "./User.module.css"

let User = () => {

    const [films, setFilms] = React.useState(null)
    const [cinemas, setCinemas] = React.useState(null)
    const [currentOrders, setCurrentOrders] = React.useState(null)
    const [archiveOrders, setArchiveOrders] = React.useState(null)
    const navigate = useNavigate()

    let logOut = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    React.useEffect(() => {
        async function loadFilms() {
            let films = await axios.get('http://localhost:8080/films', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            setFilms(films)
        }
        loadFilms()
        async function loadCinemas() {
            let cinemas = await axios.get('http://localhost:8080/cinemas', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            setCinemas(cinemas)
        }
        loadCinemas()
    }, []);

    return <div className={style.outer}>
        <div className={style.header}>
        <button onClick={() => logOut()} >Выйти</button>
    </div>
        <div>
            {
                films !== null &&
                films.map((film) => <div className={style.filmBlock}><p>{film.name}</p></div>)
            }
        </div>
        <hr/>
        <div>
            <NewTicket cinemas={cinemas} films={films} setCurrentOrders={setCurrentOrders}/>
            <Tickets orders={currentOrders} setOrders={setCurrentOrders}/>
            <Archive orders={archiveOrders} setOrders={setArchiveOrders}/>
        </div>
    </div>
}

export default User