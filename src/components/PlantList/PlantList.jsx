import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();
    const plants = useSelector(store => store.plantList);

    const fetchPlants = () => {
        dispatch({ type: 'FETCH_PLANTS' });
    }

    const deletePlant = (plant) => {
        dispatch({ type: 'DELETE_PLANT', payload: plant })
        fetchPlants();
    }

    useEffect(() => {
        fetchPlants();
    }, []); 

    return (
        <div>
            <h3>This is the plant list</h3>
                <ul>
                    {Object.values(plants).map(plant => (
                        <li key={plant.id}>
                            {plant.name}
                            <button onClick={() => deletePlant(plant)}>Delete</button>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default PlantList;
