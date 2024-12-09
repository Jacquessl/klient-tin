import './style.css'
import CarService from "../service/CarService";
import React from 'react'
import { useNavigate } from "react-router-dom";


const Add = () => {
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();
    let coJestZle;
    const handleAddCar = (e) => {
        e.preventDefault();
        var marka = document.getElementById("marka").value;
        var model = document.getElementById("model").value;
        var rok = Number(document.getElementById("rok").value);
        var kolor = document.getElementById("kolor").value;
        var przebieg = Number(document.getElementById("przebieg").value);
        if(Number.isInteger(rok) && Number.isInteger(przebieg)) {
            setError(false)
            const car = {
                make: marka,
                model: model,
                year: rok,
                color: kolor,
                mileage: przebieg
            }
            CarService.addCar(car);
            navigate("/");

            return
        }
        else if (!Number.isInteger(przebieg)) {
            if(coJestZle !== null && Number.isInteger(rok)) {
                document.getElementById("rok").style.borderColor = "#999999";
            }
           coJestZle = document.getElementById("przebieg");
            coJestZle.style.borderColor = "red";
        }
        if(!Number.isInteger(rok)){
            if(coJestZle !== null && Number.isInteger(przebieg)) {
                document.getElementById("przebieg").style.borderColor = "#999999";
            }
            coJestZle = document.getElementById("rok")
            coJestZle.style.borderColor = "red";
        }
        setError(true);
     };
    return (
        <div id="form">
            <form onSubmit={handleAddCar}>
            <input className="input" id="marka" placeholder="Marka" type="text"/>
            <input className="input" id="model" placeholder="Model" type="text"/>
            <input className="input" id="rok" placeholder="Rok" type="text"/>
            <input className="input" id="kolor" placeholder="Kolor" type="text"/>
            <input className="input" id="przebieg" placeholder="Przebieg" type="text"/>
                <button className="submit">Add</button>
            </form>
            {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    Przebieg lub rok nie jest liczbą całkowitą!
                </div>
            )}
        </div>
);
}

export default Add;