import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const addWebinarData = async (data) => {
  try {
   
    const response = await axios.post(`${apiUrl}/webinar`, data, {
     headers: {
        'Content-Type': 'application/json', 
      }
    });

    console.log('This is my data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};

export default addWebinarData
