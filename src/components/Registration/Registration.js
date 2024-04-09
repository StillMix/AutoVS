import React,{useState} from 'react';
import "./Registration.css";

function Registration(props) {
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
    <p className="title">Регистрация.</p>
    <div className="registration">
      <p className="registration__title">Создайте новый аккаунт.</p>
      <form onSubmit={handleSubmit}>
      <input className="registration__input" name="LoginInput" value={formValues.LoginInput}  onChange={handleChange} placeholder="Логин"/>
      <input className="registration__input" name="PasswordInput" value={formValues.PasswordInput}  onChange={handleChange} placeholder="Пароль"/>
      <button className="registration__btn" type="submit">Регистрация</button>
      </form>

    </div>
    </>
  );
}

export default Registration;
