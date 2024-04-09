import "./Login.css";
import React,{useState} from 'react';
import { Link } from "react-router-dom";

function Login(props) {
  const [formValues, setFormValues] = useState({});


  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }



    function handleSubmit(event) {
      event.preventDefault();
     props.handleSubmit(formValues)
  }
  return (
    <>
    <p className="title">Вход.</p>
    <div className="login">
      <p className="login__title">Добро пожаловать.</p>
      <p className="login__subtitle">Пожалуйста войдите в систему</p>
      <form onSubmit={handleSubmit}>
      <input className="login__input" name="LoginInput" value={formValues.LoginInput}  onChange={handleChange} placeholder="Логин"/>
      <input className="login__input" name="PasswordInput" value={formValues.PasswordInput}  onChange={handleChange} placeholder="Пароль"/>
      <button className="login__btn" type="submit">Войти</button>
      </form>
      <Link to="/registration"><button className="login__btn">Регистрация</button>
      </Link>
    </div>
    </>
  );
}

export default Login;
