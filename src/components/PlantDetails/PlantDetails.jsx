import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PlantDetails() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        const fetchPlantDetails = async () => {
            try {
                const response = await axios.get(`/api/plants/${id}`);
                console.log(response.data); 
                if (response.data && response.data.length > 0) {
                    setPlant(response.data[0]); 
                } else {
                    setPlant(null);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchPlantDetails();

        return () => {
        };
    }, [id]);

    return (
        <div>
            <h3>Plant Details</h3>
            {plant ? (
                <div>
                    <p>Name: {plant.name}</p>
                    <p>Kingdom: {plant.kingdom}</p>
                    <p>Clade: {plant.clade}</p>
                    <p>Order: {plant.order}</p>
                    <p>Family: {plant.family}</p>
                    <p>Subfamily: {plant.subfamily}</p>
                    <p>Genus: {plant.genus}</p>
                </div>
            ) : (
                <p>Plant not found</p>
            )}
        </div>
    );
}

export default PlantDetails;
