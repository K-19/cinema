import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router";
import style from './login.module.css'

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
                if (err.response.status === 400)
                    alert('Введите корректные данные')
                else
                    alert(err)
            });
    }

    return <div className={style.outer}>
        <div className={style.mainLogin}>
            <div>
            <input placeholder={"Фамилия"} ref={inputSurname} value={surname} onChange={() => {setSurname(inputSurname.current.value)}}/>
            </div><div>
            <input placeholder={"Имя"} ref={inputName} value={name} onChange={() => {setName(inputName.current.value)}}/>
        </div><div>
            <input placeholder={"Номер телефона"} ref={inputPhoneNumber} value={phoneNumber} onChange={() => {setPhoneNumber(inputPhoneNumber.current.value)}}/>
        </div><div>
            <input placeholder={"Электронная почта"} ref={inputEmail} value={email} onChange={() => {setEmail(inputEmail.current.value)}}/>
        </div><div>
            <label>Дата рождения:</label>
        </div><div>
            <input type={"date"} ref={inputBirthday} value={birthday} onChange={() => {setBirthday(inputBirthday.current.value)}}/>
        </div><div>
            <input placeholder={"Пароль"} ref={inputPassword} value={password} onChange={() => {setPassword(inputPassword.current.value)}}/>
        </div>
            <button onClick={onClickButton}>Зарегистрироваться</button>{" "}
            <button onClick={() => {navigate('/login')}}>Вернуться на страницу авторизации</button>
        </div>
    </div>
}

export default Registration;