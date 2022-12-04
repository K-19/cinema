import React, {useState} from "react";
import axios from "axios";
import style from "../Admin/Admin.module.css";
import Film from "./Film";

const Films = (props) => {

    let inputFilmName = React.createRef();
    let inputDurationH = React.createRef();
    let inputDurationM = React.createRef();
    let inputDurationS = React.createRef();
    const [filmName, setFilmName] = useState("")
    const [durationH, setDurationH] = useState("")
    const [durationM, setDurationM] = useState("")
    const [durationS, setDurationS] = useState("")


    React.useEffect(() => {
        async function loadFilm(setFilms) {
            let films = await axios.get('http://localhost:8080/films', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            setFilms(films)
        }
        loadFilm(props.setFilms);

    }, []);

    async function deleteFilm(id) {
        let films = await axios.delete('http://localhost:8080/films/' + id, {}).then((response) => {
            if (response.status === 200) {
                return response.data
            }
        })
        props.setFilms(films)
    }

    async function createFilm() {
        let data = {
            name: filmName,
            durationSeconds: (parseInt(durationH) * 3600) + (parseInt(durationM) * 60) + parseInt(durationS)
        }
        let films = await axios.post('http://localhost:8080/films', data).then((response) => {
            if (response.status === 200) {
                props.setFilms(response.data)
                return response.data
            }
        })
        props.setFilms(films)
        setFilmName('')
        setDurationH('')
        setDurationM('')
        setDurationS('')
    }

    let onChangeFilmName = () => {
        setFilmName(inputFilmName.current.value);
    }

    let onChangeDurationH = () => {
        setDurationH(inputDurationH.current.value);
    }

    let onChangeDurationM = () => {
        setDurationM(inputDurationM.current.value);
    }

    let onChangeDurationS = () => {
        setDurationS(inputDurationS.current.value);
    }

    return <div className={style.block}>
        <h1>Фильмы</h1>
        {
            props.films !== null &&
            props.films.map((film) => <Film film={film} deleteFilm={deleteFilm}/>)
        }
        <textarea ref={inputFilmName} value={filmName} onChange={onChangeFilmName}/>
        <input type={"number"} min={0} ref={inputDurationH} value={durationH} onChange={onChangeDurationH}/>
        <input type={"number"} min={0} max={59} ref={inputDurationM} value={durationM} onChange={onChangeDurationM}/>
        <input type={"number"} min={0} max={59} ref={inputDurationS} value={durationS} onChange={onChangeDurationS}/>
        <button onClick={() => createFilm()}>Добавить новый фильм</button>
    </div>
}

export default Films