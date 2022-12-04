import {Component} from "react";
import React from "react";

class Film extends Component {

    nameFilm(film) {
        let duration = film.durationSeconds
        let h = parseInt(duration / 3600, 10)
        duration =  duration - h * 3600
        let m = parseInt(duration / 60, 10)
        duration = duration - m * 60
        let s = duration
        return film.name + ' | ' + ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
    }

    render() {
        return <div>
            <ul key={this.props.film.id}>{this.nameFilm(this.props.film)}
                <button onClick={() => this.props.deleteFilm(this.props.film.id)}>Удалить</button>
            </ul>
        </div>
    }
}

export default Film;