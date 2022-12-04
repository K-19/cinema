import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router";
import {http} from '../service/get'

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
                if (data.status === 200) {
                    data.json().then(data => {
                        localStorage.setItem('user', JSON.stringify(data))
                        if (!data.admin)
                            navigate('/profile')
                        else
                            navigate("/admin")
                        alert(JSON.parse(localStorage.getItem('user')).email)
                    })

                }
            })
            .catch((err) => {console.log(err.message)});
    }

    let onChangePasswordText = () => {
        setPassword(inputPassword.current.value);
    }

    let onChangeEmailText = () => {
        setEmail(inputEmail.current.value);
    }

    return <div>
        <div>
            <textarea ref={inputEmail} value={email} onChange={onChangeEmailText}/>
            <textarea ref={inputPassword} value={password} onChange={onChangePasswordText}/>
            <button onClick={onClickButton}>Войти</button>
            <button onClick={onClickRegistrationButton}>Зарегистрироваться</button>
        </div>
    </div>
}

export default Login;