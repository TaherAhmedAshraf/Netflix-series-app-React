import logo from './logo.svg';
import "./index.css"
function Card(props) {
  return (
    <div className="card">
      <div className="cardImg"><img src={props.img} alt="hey"/></div>
      <div className="cardContent">
        <h5>{props.title} : Season Count {props.count}</h5>
        <h3>{props.name}</h3>
        <div className="btn"><a href={props.link}><button>Watch Now</button></a></div>
      </div>
     
    </div>
  );
}

export default Card;
