import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PlantList() {
    const dispatch = useDispatch();
    const plants = useSelector(store => store.plantList);
    const history = useHistory();

    const fetchPlants = () => {
        dispatch({ type: 'FETCH_PLANTS' });
    }

    const deletePlant = (plant) => {
        dispatch({ type: 'DELETE_PLANT', payload: plant });
        fetchPlants();
    }

    const goToPlantDetails = (plantId) => {
        history.push(`/plants/${plantId}`);
    }

    useEffect(() => {
        fetchPlants();
    }, []);

    return (
        <div>
            <h3>This is the plant list</h3>
            <ul>
                {plants.map(plant => (
                    <li key={plant.id}>
                        {plant.name}
                        {plant && (
                            <>
                                <button onClick={() => goToPlantDetails(plant.id)}>Details</button>
                                <button onClick={() => deletePlant(plant)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlantList;
