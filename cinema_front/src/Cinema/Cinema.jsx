import {Component} from "react";
import React from "react";
import axios from "axios";

class Cinema extends Component {
    render() {
        return <div>
            <ul key={this.props.cinema.id}>{this.props.cinema.name}
                <button onClick={() => this.props.deleteCinema(this.props.cinema.id, this.props.setCinemas)}>Удалить</button>
            </ul>
        </div>
    }
}

export default Cinema;