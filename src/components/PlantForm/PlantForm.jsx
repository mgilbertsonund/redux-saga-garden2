import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    let [newPlant, setPlant] = useState({
        id: 4,
        name: '',
        kingdom: '',
        clade: '',
        order: '',
        family: '',
        subfamily: '',
        genus: ''
    });

    const handleChange = (event, field) => {
        setPlant({...newPlant, [field]: event.target.value})
    }

    const addNewPlant = event => {
        event.preventDefault();
        // Dispatching all fields
        dispatch({ type: 'ADD_PLANT', payload: newPlant });
        // Updates the next plant to have a new id and resets all fields
        setPlant({id: newPlant.id + 1, name: '', kingdom: '', clade: '', order: '', family: '', subfamily: '', genus: ''});
    }

    return (
        <div>
            <h3>This is the form</h3>
            {/* <pre>{JSON.stringify(newPlant)}</pre> */}
            <form onSubmit={addNewPlant}>
                <input type='text' placeholder='Plant Name' value={newPlant.name} onChange={(event) => handleChange(event, 'name')} />
                <input type='text' placeholder='Plant Kingdom' value={newPlant.kingdom} onChange={(event) => handleChange(event, 'kingdom')} />
                <input type='text' placeholder='Plant Clade' value={newPlant.clade} onChange={(event) => handleChange(event, 'clade')} />
                <input type='text' placeholder='Plant Order' value={newPlant.order} onChange={(event) => handleChange(event, 'order')} />
                <input type='text' placeholder='Plant Family' value={newPlant.family} onChange={(event) => handleChange(event, 'family')} />
                <input type='text' placeholder='Plant Subfamily' value={newPlant.subfamily} onChange={(event) => handleChange(event, 'subfamily')} />
                <input type='text' placeholder='Plant Genus' value={newPlant.genus} onChange={(event) => handleChange(event, 'genus')} />
                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}

export default PlantForm;
