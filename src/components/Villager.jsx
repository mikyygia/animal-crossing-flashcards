import data from "./Villager-data";
import "../index.css";

function Villagers ({index, state}) {
    if (!state) {
        return (
            <div className="card-front">
                <h2>"{data[index].catchphase}"</h2>
            </div>
        );
    } else {
        return (
            <div className="card-back">
                <h2>{data[index].name}</h2>
                <img src={data[index].img} alt={`picture of ${data[index].name} from animal crossing`} />
            </div>
        );
    }
}

export default Villagers;
