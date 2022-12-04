import React, {useState} from "react";
import axios from "axios";
import Cinema from "./Cinema";
import style from "../Admin/Admin.module.css";

const Cinemas = (props) => {

    let inputCinemaName = React.createRef();
    let inputTickets = React.createRef();
    const [cinemaName, setCinemaName] = useState("")
    const [countTickets, setCountTickets] = useState("")


    React.useEffect(() => {
        async function loadCinemas(setCinemas) {
            let cinemas = await axios.get('http://localhost:8080/cinemas', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            setCinemas(cinemas)
        }
        loadCinemas(props.setCinemas);

    }, []);

    async function deleteCinema(id, setCinemas) {
        let cinemas = await axios.delete('http://localhost:8080/cinemas/' + id, {}).then((response) => {
            if (response.status === 200) {
                return response.data
            }
        })
        setCinemas(cinemas)
    }

    async function createCinema(setCinemas) {
        let data = {
            name: cinemaName,
            countTickets: countTickets
        }
        let cinemas = await axios.post('http://localhost:8080/cinemas', data).then((response) => {
            if (response.status === 200) {
                setCinemas(response.data)
                return response.data
            }
        })
        setCinemas(cinemas)
        setCinemaName('')
    }

    let onChangeCinemaName = () => {
        setCinemaName(inputCinemaName.current.value);
    }

    let onChangeTickets = () => {
        setCountTickets(inputTickets.current.value);
    }

    return <div className={style.block}>
        <h1>Кинотеатры</h1>
        {
            props.cinemas !== null &&
            props.cinemas.map((cinema) => <Cinema cinema={cinema} setCinemas={props.setCinemas} deleteCinema={deleteCinema}/>)
        }
        <textarea ref={inputCinemaName} value={cinemaName} onChange={onChangeCinemaName}/>
        <input type={'number'} min={0} ref={inputTickets} value={countTickets} onChange={onChangeTickets}/>
        <button onClick={() => createCinema(props.setCinemas)}>Добавить новый кинотеатр</button>
    </div>
}

export default Cinemas