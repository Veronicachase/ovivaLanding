import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const getWebinarDate = async () => {
  try {
    const response = await axios.get(`${apiUrl}/webinar/webinar-date`);
    console.log('Webinar data:', response.data.activityDate);
    return response.data;
  } catch (error) {
    console.error('Error fetching webinar data:', error);
    throw error;
  }
};

export default getWebinarDate;
