
const fetchCars = async () => {
    let cars = [];
    const response = await fetch("/api/get")
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data || [];
}

function

fetchCarsById(id) {
    return fetch(`/api/get/${id}`)
}

const addCar = async (make, model, year, color, mileage) => {
    console.log(JSON.stringify(make, model, year, color, mileage));
    await fetch("/api/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(make, model, year, color, mileage)
    })
}
const deleteCar = async (id) => {
    await fetch(`/api/delete/${id}`, {
        method: "DELETE"
    })
}
export default { fetchCars, fetchCarsById, addCar, deleteCar };