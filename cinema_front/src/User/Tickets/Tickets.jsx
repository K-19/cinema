import Cinema from "../../Cinema/Cinema";
import React from "react";
import axios from "axios";
import Ticket from "./Ticket";
import style from "../User.module.css"

let Tickets = (props) => {

    React.useEffect(() => {
        async function loadSaences() {
            let orders = await axios.get('http://localhost:8080/users/' + JSON.parse(localStorage.getItem('user')).id + '/orders', {}).then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
            props.setOrders(orders)
        }
        loadSaences();

    }, []);

    async function deleteOrder(id) {
        debugger
        let orders = await axios.delete('http://localhost:8080/orders/' + id + '/' + JSON.parse(localStorage.getItem('user')).id, {}).then((response) => {
            if (response.status === 200) {
                return response.data
            }
        })
        debugger
        props.setOrders(orders)
    }

    return <div className={style.block}>
        <h2>Ваши билеты</h2>
        {
            props.orders !== null &&
            props.orders.map((order) => <Ticket order={order} setOrders={props.setOrders} deleteOrder={deleteOrder}/>)
        }
    </div>
}

export default Tickets