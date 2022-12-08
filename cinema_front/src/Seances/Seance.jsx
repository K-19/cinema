import React, {Component} from "react";
import style from '../App.module.css'

class Seance extends Component {

    formatDate(film, dateTime) {
        const date = new Date(dateTime)
        const day = ('0' + date.getDate()).slice(-2)
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const year = date.getFullYear();
        const onlyDate = day + '.' + month + '.' + year
        const startTime = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2)
        let duration = film.durationSeconds
        let h = parseInt(duration / 3600, 10)
        duration =  duration - h * 3600
        let m = parseInt(duration / 60, 10)
        duration = duration - m * 60
        let s = duration

        const endTime = (('0' + (date.getHours() + h)).slice(-2)) + ':' + (('0' + (date.getMinutes() + m)).slice(-2)) + ':' + (('0' + (date.getSeconds() + s)).slice(-2))
        return onlyDate + ' ' + startTime + ' - ' + endTime
    }

    render() {
        return <tr className={style.infoBlock}>
            <td key={this.props.seance.id}>
                {this.props.seance.film.name + ' | Кинотеатр ' + this.props.seance.cinema.name + ' | ' + this.formatDate(this.props.seance.film, this.props.seance.dateTime)}
            </td>
            <td>
                <button onClick={() => this.props.deleteSeance(this.props.seance.id)}>Удалить</button>
            </td>
        </tr>
    }
}

export default Seance;