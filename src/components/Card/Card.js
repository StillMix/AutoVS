import "./Card.css";
import Seroe from '../../images/seroedliproverky.png'

function Card(props) {
  console.log(props.data.name)
  return (
    <>
          <div className="card">
                  <img src={Seroe} className="card__img"/>
                  <div className="card__container">
                    <p className="card__container_nameCar">{props.data.name}</p>
                    <p className="card__container_pay">{props.data.name}</p>
                    <p className="card__container_marka">{`Марка: ${props.data.marka}`}</p>
                    <p className="card__container_model">{`Модель: ${props.data.model}`}</p>
                    <p className="card__container_status">{`Статус: ${props.data.status}`}</p>
                  </div>
          </div>
    </>
  );
}

export default Card;