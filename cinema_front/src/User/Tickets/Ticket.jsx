import React from "react";

let Ticket = (props) => {

    let formatDate = (seance) => {
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

    return <div>
        <ul key={props.order.id}>{props.order.seance.film.name + ' | Кинотеатр ' + props.order.seance.cinema.name + ' | ' + formatDate(props.order.seance) + ' | Количество билетов: ' + props.order.ticketsCount}
            <button onClick={() => props.deleteOrder(props.order.id)}>Удалить</button>
        </ul>
    </div>
}

export default Ticket