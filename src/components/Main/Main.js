import React, { useState, useEffect } from "react";
import "./Main.css";
import Luch from "../../images/luch.svg";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";

function Main(props) {
  const [isImagePopupOpen, setisImagePopupOpen] = useState(false);
  
  function closeAllPopups() {
    setisImagePopupOpen(false);
  }
  function handleCardClick(){
    setisImagePopupOpen(true)
}
  const [cards, setCards] = useState([]);
  function addCard(card){
    if (!card) {
      return;
    }else{
    console.log(card.name, card.cent, card.marka, card.model, card.status, card.op)
    props.api.addCard(card.name, card.cent, card.marka, card.model, card.status, card.op).then((data)=>{
      setCards([data.data, ...cards]);
      console.log(cards)
      closeAllPopups()
    })
    .catch((err) => {
        console.log(err)
    });
  }
  }
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await props.api.getCards();
        if (data) {
          setCards(data.data);
          console.log(data.data)
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCards();
  }, [props.api]);



  return (
    <>
    <Popup handleSubmits={addCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
      <header className="header">
        <p className="header__logo">Auto.</p>
        <button className="header__btn" onClick={handleCardClick}>
          Добавить объявление
        </button>
      </header>
      <main className="Main">
        <div className="ads">
          <div className="ads__header">
            <img src={Luch} className="ads__headerImg" alt="лого" />
            <p className="ads__headerTitle">Посмотрите объявления</p>
          </div>
          <div className="ads__element">
            {Array.isArray(cards) &&
              cards.map((card, index) => <Card key={index} data={card} />)}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
