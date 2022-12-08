import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router";
import style from './login.module.css'

const Login = function () {

    const navigate = useNavigate()
    const regLink = useRef('/registration')
    const profileLink = useRef('/profile')

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useRef()

    let inputEmail = React.createRef();
    let inputPassword = React.createRef();

    let onClickRegistrationButton = () => {
        navigate(regLink.current)
    }


    let onClickButton = () => {
        let credentials = {
            email: email,
            password: password
        }
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((data) => {
                debugger
                if (data.status === 200) {
                    data.json().then(data => {
                        localStorage.setItem('user', JSON.stringify(data))
                        if (!data.admin)
                            navigate('/profile')
                        else
                            navigate("/admin")
                    })

                }
                else if (data.status === 400)
                    alert('Введите корректные данные')
                else
                    alert(data)
            });
    }

    let onChangePasswordText = () => {
        setPassword(inputPassword.current.value);
    }

    let onChangeEmailText = () => {
        setEmail(inputEmail.current.value);
    }

    return <div className={style.outer}>
        <div className={style.mainLogin}>
            <div>
                <input placeholder={"Логин"} ref={inputEmail} value={email} onChange={onChangeEmailText}/>
            </div><div>
                <input type={"password"} placeholder={"Пароль"} ref={inputPassword} value={password} onChange={onChangePasswordText}/>
            </div><div>
                <button onClick={onClickRegistrationButton}>Зарегистрироваться</button>
            {"  "}
                <button onClick={onClickButton}>Войти</button>
        </div>
        </div>
    </div>
}

export default Login;