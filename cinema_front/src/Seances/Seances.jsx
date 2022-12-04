import React, {useState} from "react";
import Select from "react-select"
import axios from "axios";
import style from "../Admin/Admin.module.css";
import Seance from "./Seance";
import DateTimePicker from "react-datetime-picker";

const Seances = (props) => {

    const [seances, setSeances] = React.useState(null)
    const [dateTime, setDateTime] = React.useState(new Date())
    const [cinemaId, setCinemaId] = React.useState(null)
    const [filmId, setFilmId] = React.useState(null)

    React.useEffect(() => {
        async function loadSeances() {
            let seances = await axios.get('http://localhost:8080/seances', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            setSeances(seances)
        }
        loadSeances(setSeances);

    }, []);

    async function deleteSeance(id) {
        let seances = await axios.delete('http://localhost:8080/seances/' + id, {}).then((response) => {
            if (response.status === 200) {
                return response.data
            }
        })
        setSeances(seances)
    }

    async function createSeance() {
        let data = {
            film: filmId.value,
            cinema: cinemaId.value,
            dateTime: dateTime
        }
        let seances = await axios.post('http://localhost:8080/seances', data).then((response) => {
            if (response.status === 200) {
                setSeances(response.data)
                return response.data
            }
        })
        setSeances(seances)
    }

    let getCinemas = () => {
        let data = []
        if (props.cinemas != null) {
            props.cinemas.forEach(function (cinema) {
                data.push({
                    label: cinema.name,
                    value: cinema.id
                })
            })
        }
        return data
    }

    let getFilms = () => {
        let data = []
        if (props.films != null) {
            props.films.forEach(function (film) {
                data.push({
                    label: film.name,
                    value: film.id
                })
            })
        }
        return data
    }

    return <div className={style.block}>
        <h1>Сеансы</h1>
        {
            seances !== null &&
            seances.map((seance) => <Seance seance={seance} deleteSeance={deleteSeance}/>)
        }
        <Select onChange={(value) => setCinemaId(value)} options={getCinemas()}/>
        <Select onChange={(value) => setFilmId(value)} options={getFilms()}/>
        <DateTimePicker value={dateTime} onChange={(value) => setDateTime(value)}/>
        <button onClick={() => createSeance()}>Добавить новый сеанс</button>
    </div>
}

export default Seances