const { User } = require('../DB_connection.js')

const postUser = async(request, response)=> {
    try {
        const { id, email, password } = request.body

        if(!email || !password) return response.status(400).send('Faltan datos')
        
        const user = await User.findOrCreate({
            where: {
                id: id,
                email: email,
                password: password
            },
        })
        return response.status(200).json(user)
    } 
    catch (error) {
        return response.status(500).json({ error: error.message})
    }
    
}

module.exports = postUser