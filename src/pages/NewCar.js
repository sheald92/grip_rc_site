import React from "react";
import { useNavigate } from 'react-router-dom'
import NewCarForm from "../components/cars/NewCarForm";
function NewCarPage() {
    const navigate = useNavigate();
    function addCarHandler(carData) {
        fetch(
            'https://grip-rc-default-rtdb.firebaseio.com/cars.json',
            {
                method: 'POST', 
                body: JSON.stringify(carData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return <section> 
        <h1>New car Page</h1>
        <NewCarForm onAddCar={addCarHandler}/>
    </section>;
}

export default NewCarPage;