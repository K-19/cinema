import React, {useState} from "react";
import axios from "axios";
import style from "../Admin/Admin.module.css";
import Film from "./Film";
import mainStyle from '../App.module.css'

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
            }
        }).catch((reason => {
            if (reason.response.status === 400)
                alert('Введите корректные данные')
            else
                alert(reason)
        }))
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
        <table className={mainStyle.infoTable}>
            {
                props.films !== null &&
                props.films.map((film) => <Film film={film} deleteFilm={deleteFilm}/>)
            }
        </table>
        <hr/>
            <h3>Добавление нового фильма</h3>
        <div>
            <input placeholder={"Название фильма"} ref={inputFilmName} value={filmName} onChange={onChangeFilmName}/>
        </div>
        Продолжительность фильма:
        <div>
            <input className={style.inputTime} type={"number"} min={0} ref={inputDurationH} value={durationH} onChange={onChangeDurationH}/>{" ч."}
            <input className={style.inputTime} type={"number"} min={0} max={59} ref={inputDurationM} value={durationM} onChange={onChangeDurationM}/>{" мин."}
            <input className={style.inputTime} type={"number"} min={0} max={59} ref={inputDurationS} value={durationS} onChange={onChangeDurationS}/>{" сек."}
        </div>
        <button onClick={() => createFilm()}>Добавить новый фильм</button>
    </div>
}

export default Films