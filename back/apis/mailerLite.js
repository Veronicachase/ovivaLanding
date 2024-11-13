const axios = require('axios');
const apiKey = process.env.MAILER_LITE_TOKEN; 

const webinarSubscriber = async (email) => {
  try {
    const response = await axios.post(
      'https://connect.mailerlite.com/api/subscribers',  
      {
        email: email,
        resubscribe: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',  
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`,  
        }
      }
    );
    console.log('Usuario suscrito:', response.data);
  } catch (error) {
    console.error('Error al suscribir:', error.response ? error.response.data : error.message); 
    throw error;
  }
};

module.exports = {
  webinarSubscriber,
};
