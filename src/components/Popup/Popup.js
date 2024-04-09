import React, { useState, useEffect } from "react";
import "./Popup.css";
import closeBtn from "../../images/close.svg";
import addImg from "../../images/addImg.svg";

function Popup(props) {
  const handleClose = () => {
    props.onClose(); // Вызываем onClose только при клике на кнопку закрытия
  };

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
     props.handleSubmits(formValues)

  }

  return (
    <div className={`bodyPopup ${props.isOpen ? 'popup__open' : ''}`}>
      <div className="popup">
        <img src={closeBtn} onClick={handleClose} className="popup__close" /> {/* Измененный обработчик события */}
        <p className="popup__title">Добавить объявление</p>
        <form onSubmit={handleSubmit}>
          <div className="popup__container">
            <input
              type="file"
              id="fileInput"
              className="popup__addImg"
              accept="image/*"
            />
            <label htmlFor="fileInput" className="inputLabel">
              <img src={addImg} alt="addImg" className="addImg" />
              <span className="uploadText">Вставьте изображение</span>
            </label>

            <div className="popup_containerSettings">
              <input
                className="popup__input"
                placeholder={`Название`}
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              <input
                className="popup__input"
                placeholder={`Цена`}
                name="cent"
                value={formValues.cent}
                onChange={handleChange}
              />
              <input
                className="popup__input"
                name="marka"
                value={formValues.marka}
                placeholder={`Марка`}
                onChange={handleChange}
              />
              <input
                className="popup__input"
                name="model"
                value={formValues.model}
                placeholder={`Модель`}
                onChange={handleChange}
              />
              <input
                className="popup__input"
                name="status"
                value={formValues.status}
                placeholder={`Статус`}
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            className="popup_inputDop"
            placeholder={`Дополнительная информация`}
            name="op"
            value={formValues.op}
            onChange={handleChange}
          />
          <button className="popup__btn" type="submit">
            Опубликовать
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
