const { Favorite } = require('../DB_connection')

const postFav = async(request, response)=> {
    try {
        const { id, name, image, species, gender  } = request.body
        console.log('esto llega por body', request.body);


        if(!id || !name || !image || !species || !gender ) return response.status(401).send('Faltan datos')
        //if(!id) return response.status(401).send('Faltan datos')

        const characterFind = await Favorite.findOrCreate({
            where : { id },
            defaults: { name, image, species, gender }
        })
        console.log('findOrCreate',characterFind);

        const allFavorites = await Favorite.findAll()
        return response.status(200).json(allFavorites)

    } 
    catch (error) {
        return response.status(500).json({ error: error.message})
    }
}

module.exports = postFav