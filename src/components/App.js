import "./App.css";
import React, { useState,  useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import {mestoAuth} from '../utils/Auth';
import api from '../utils/Api.js';
import Main from "./Main/Main";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup/Popup";

function App(props) {
  let navigate = useNavigate();
  const [loggedIn, setloggedIn] = useState(false);


  const [selectedCard, setselectedCard] = useState({
    title: "",
    price: "",
    brand: "",
    model: "",
    status: "",
    additionalInfo: "",
  });






   React.useEffect(() =>{
    if(localStorage.getItem('jwt')){
      setloggedIn(true)
     }
 },[])


function login(log) {
  if (!log){
    return;
  }

  mestoAuth.authorize(log.PasswordInput,log.LoginInput).then((data) => {
    if (data.message === 'Неправильные почта или пароль'){
      console.log(data)
    }else{
      localStorage.setItem('jwt', log.LoginInput);
      setloggedIn(true)
      navigate('/')
    }
  })
  .catch(err => console.log(err));
}

function register(reg) {
  console.log(reg.PasswordInput,reg.LoginInput)
  mestoAuth.register(reg.PasswordInput,reg.LoginInput).then((res) => {
    if(res){
      navigate(`/`);

    } 
}).catch(err =>{
  console.log(err)
});
}





  return (
    <>
      
      <Routes>
      <Route path="/" element={loggedIn ? <Main api={api} /> : <SignIn handleSubmit={login}/>} />
       
        <Route path="/registration" element={<Registration handleSubmit={register} />} />
      </Routes>
    </>
  );
}

export default App;
