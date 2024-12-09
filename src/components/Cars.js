import { useState, useEffect } from "react";
import CarService from "../service/CarService";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState("");

    useEffect(() => {
        CarService.fetchCars()
            .then((data) => setCars(data))
            .catch((error) => console.error("Error fetching cars:", error));
    }, []);



    const handleRemoveCar = (index) => {

        for (let idexRemove = 0; idexRemove < cars.length; idexRemove++) {
            if (idexRemove !== index) {
                console.log(document.getElementById(idexRemove).value);
                document.getElementById(idexRemove).disabled = true;
            }
        }
        CarService.deleteCar(index).then(() => {
            CarService.fetchCars()
                .then((data) => {
                setCars(data)
                for (let idexRemove = 0; idexRemove < cars.length; idexRemove++) {
                        console.log(document.getElementById(idexRemove).value);
                        document.getElementById(idexRemove).disabled = false;
                }
            });
        });}

    return (
        <div id="cars">
            <ul>
                {Array.isArray(cars) && cars.map((car) => (
                    <li key={car.id}>
                        {car.id} {car.make} {car.model} ({car.year}) - {car.color}, {car.mileage} miles
                        <button id={car.id} onClick={() => handleRemoveCar(car.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>

);
};

export default Cars;
