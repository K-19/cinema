import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router";
import {http} from '../service/get'

const Registration = function () {

    const navigate = useNavigate()
    const loginLink = useRef('/login')

    const [surname, setSurname] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")
    const [password, setPassword] = useState("")

    let inputSurname = React.createRef();
    let inputName = React.createRef();
    let inputPhoneNumber = React.createRef();
    let inputEmail = React.createRef();
    let inputBirthday = React.createRef();
    let inputPassword = React.createRef();

    let onClickButton = () => {
        let credentials = {
            surname: surname,
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            birthday: birthday,
            password: password
        }
        // if (http('http://localhost:8080/registration', 'POST', credentials)) {
        //     navigate(loginLink.current)
        // }
        fetch('http://localhost:8080/registration', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((data) => {
                if (data.status === 201) {
                    navigate('/login')
                }
            })
            .catch((err) => {
                alert(err.message)
                console.log(err.message)
            });
    }

    return <div>
        <div>
            <label>Фамилия
            <textarea ref={inputSurname} value={surname} onChange={() => {setSurname(inputSurname.current.value)}}/></label>
            <label>Имя
            <textarea ref={inputName} value={name} onChange={() => {setName(inputName.current.value)}}/></label>
            <label>Телефон
            <textarea ref={inputPhoneNumber} value={phoneNumber} onChange={() => {setPhoneNumber(inputPhoneNumber.current.value)}}/></label>
            <label>Электронная почта
            <textarea ref={inputEmail} value={email} onChange={() => {setEmail(inputEmail.current.value)}}/></label>
            <label>Дата рождения
            <input type={"date"} ref={inputBirthday} value={birthday} onChange={() => {setBirthday(inputBirthday.current.value)}}/></label>
            <label>Пароль
            <textarea ref={inputPassword} value={password} onChange={() => {setPassword(inputPassword.current.value)}}/></label>
            <button onClick={onClickButton}>Зарегистрироваться</button>
            <button onClick={() => {navigate('/login')}}>Вернуться на страницу авторизации</button>
        </div>
    </div>
}

export default Registration;