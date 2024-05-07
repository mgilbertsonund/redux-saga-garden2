import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';



function PlantList() {
    const dispatch = useDispatch();
    const plants = useSelector(store => store.plantList);
    const history = useHistory();

    const fetchPlants = () => {
        dispatch({ type: 'FETCH_PLANTS' });
    }

    const deletePlant = (plant) => {
        dispatch({ type: 'DELETE_PLANT', payload: plant })
        fetchPlants();
    }

    const plantDetails = (plantId) => {
        history.push(`/plants/${plantId}`);
    }

    useEffect(() => {
        fetchPlants();
    }, []); 

    return (
        <div>
            <h3>This is the plant list</h3>
                <ul>
                    {Object.values(plants).map(plant => (
                        <li key={plant.id} onClick={() => plantDetails(plant.id)} >
                            {plant.name}
                            <button onClick={() => deletePlant(plant)}>Delete</button>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default PlantList;
