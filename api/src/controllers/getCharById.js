const axios = require('axios');

const getCharById = async (request, response) => {
  try {
    const { id } = request.params;
    const URL = `https://rym2.up.railway.app/api/character/${id}?key=pi-hx-mferreyra`;

    const axiosResponse = await axios(URL);
    const characterData = axiosResponse.data;

    if (characterData.id) {
      const character = {
        id,
        name: characterData.name,
        status: characterData.status,
        species: characterData.species,
        origin: characterData.origin?.name,
        image: characterData.image,
        gender: characterData.gender
      }

      return response.status(200).json(character)
    } 
    else {
      return response.status(500).send('Character not found')
    }
  } 
  catch (error) {
    return response.status(500).send(error.message)
  }
}

module.exports = getCharById
