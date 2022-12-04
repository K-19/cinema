import Ticket from "../Tickets/Ticket";
import React from "react";
import axios from "axios";
import ArchiveTicket from "./ArchiveTicket";

let Archive = (props) => {

    React.useEffect(() => {
        async function loadOrders() {
            let orders = await axios.get('http://localhost:8080/users/' + JSON.parse(localStorage.getItem('user')).id + '/orders/archive', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            props.setOrders(orders)
        }
        loadOrders();

    }, []);

    return <div>
        <h2>Архив</h2>
        {
            props.orders !== null &&
            props.orders.map((order) => <ArchiveTicket order={order}/>)
        }
    </div>

}

export default Archive