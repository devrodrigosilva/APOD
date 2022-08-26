import axios from 'axios';
const baseUrl = 'https://api.nasa.gov/planetary/apod';
const key = 'jT6voKSZmiV0eMBYrS5eFvVLgXELVAmG6jh75osa'

export const fetchImage = async () => {
    const url = `${baseUrl}?api_key=${key}`;
    const response = await axios.get(url);  
    const { title, explanation, copyright, hdurl} = response.data
    return {title, explanation, copyright, hdurl }
};