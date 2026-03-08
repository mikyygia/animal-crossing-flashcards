import data from "./Villager-data";
import "../index.css";

function Villagers ({index, state}) {
    return (
        <div className={`flashcard-container ${data[index].type}`}>
            <div className={`flashcard-inner ${state ? "flipped" : ""}`}>
                <div className="card-front">
                    <h2>"{data[index].catchphase}"</h2>
                </div>
                <div className="card-back">
                    <h2>{data[index].name}</h2>
                    <img src={data[index].img} alt={`picture of ${data[index].name} from animal crossing`}/>
                </div>
            </div>
        </div>
    );
}

export default Villagers;
