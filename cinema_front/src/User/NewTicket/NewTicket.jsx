import Select from "react-select";
import React from "react";
import axios from "axios";

let NewTicket = (props) => {

    const [chooseCinema, setChooseCinema] = React.useState(null)
    const [chooseFilm, setChooseFilm] = React.useState(null)
    const [seances, setSeances] = React.useState(null)
    const [chooseSeance, setChooseSeance] = React.useState(null)
    const [chooseCountTickets, setChooseCountTickets] = React.useState(null)

    let inputCountTickets = React.createRef()

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

    let seanceName = (seance) => {
        const date = new Date(seance.dateTime)
        const day = ('0' + date.getDate()).slice(-2)
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const year = date.getFullYear();
        const onlyDate = day + '.' + month + '.' + year
        const startTime = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2)
        let duration = seance.film.durationSeconds
        let h = parseInt(duration / 3600, 10)
        duration =  duration - h * 3600
        let m = parseInt(duration / 60, 10)
        duration = duration - m * 60
        let s = duration
        const endTime = (('0' + (date.getHours() + h)).slice(-2)) + ':' + (('0' + (date.getMinutes() + m)).slice(-2)) + ':' + (('0' + (date.getSeconds() + s)).slice(-2))
        return onlyDate + ' ' + startTime + ' - ' + endTime
    }

    let getSeances = () => {
        async function loadSeances() {
            let seances = await axios.get('http://localhost:8080/seances/' + chooseCinema.value + '/' + chooseFilm.value, {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            setSeances(seances)
        }
        loadSeances()
        let data = []
        if (seances != null) {
            seances.forEach(function (seance) {
                data.push({
                    label: seanceName(seance),
                    value: seance.id,
                    tickets: seance.remainingTickets
                })
            })
        }
        return data
    }

    let onChangeFilm = (film) => {
        setChooseFilm(film)
    }

    let onChangeSeance = (seance) => {
        setChooseSeance(seance)
    }


    let SelectFilm
    if (chooseCinema !== null) {
        SelectFilm = <Select onChange={(value) => onChangeFilm(value)} options={getFilms()}/>
    }

    let SelectSeance
    if (chooseFilm !== null) {
        SelectSeance = <Select onChange={(value) => onChangeSeance(value)} options={getSeances()}/>
    }

    let SelectCountTickets
    if (chooseSeance !== null) {
        SelectCountTickets = <input type={"number"} min={1} max={chooseSeance.tickets} ref={inputCountTickets} value={chooseCountTickets} onChange={() => setChooseCountTickets(inputCountTickets.current.value)}/>
    }

    async function orderTickets() {
        let data = {
            user: JSON.parse(localStorage.getItem('user')).id,
            seance: chooseSeance.value,
            tickets: chooseCountTickets
        }
        let availableOrders = await axios.post('http://localhost:8080/orders', data).then((response) => {
            if (response.status === 200) {
                props.setCurrentOrders(response.data)
                return response.data
            }
        })
        props.setCurrentOrders(availableOrders)
    }

    return <div>
        <Select onChange={(value) => setChooseCinema(value)} options={getCinemas()}/>
        {SelectFilm}
        {SelectSeance}
        {SelectCountTickets}
        <button onClick={() => orderTickets()} >Оформить заказ</button>
    </div>
}

export default NewTicket