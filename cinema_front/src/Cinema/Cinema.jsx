import {Component} from "react";
import React from "react";
import style from '../App.module.css'

class Cinema extends Component {
    render() {
        return <tr className={style.infoBlock}>
            <td className={style.firstColumn} key={this.props.cinema.id}>{this.props.cinema.name}
            </td>
            <td>
                <button onClick={() => this.props.deleteCinema(this.props.cinema.id, this.props.setCinemas)}>Удалить</button>
            </td>
        </tr>
    }
}

export default Cinema;