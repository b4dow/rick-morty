const server = require('../src/app')
const session = require('supertest')
const agent = session(server)


describe('Test de RUTAS', ()=> {
    describe('GET /rickandmorty/character/:id', ()=> {
        it('Responde con status: 200', async()=> {
            await agent.get('/rickandmorty/character/1').expect(200)
        }),
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=> {
            const response = await agent.get('/rickandmorty/character/1') 
            const propiedades = ["id", "name", "species", "gender", "status", "origin", "image"]

            propiedades.forEach((prop)=> {
                expect(response.body).toHaveProperty(prop)

            })

        }),
        it('Si hay un error responde con status: 500', async()=> {
            await agent.get('/rickandmorty/character/910').expect(500)
        })
    })

    describe('GET /rickandmorty/login', ()=> {
        it('La informacion de login es correcta', async()=> {
            const request = await agent.get('/rickandmorty/login?email=meli@gmail.com&password=1234pass')
            const response = request.body
            expect(response.access).toEqual(true)
        }),
        it('La informacion de login es incorrecta', async()=> {
            const request = await agent.get('/rickandmorty/login?email=melisa@gmail.com&password=1234meli')
            const response = request.body
            expect(response.access).toEqual(false)
        })
    })

    describe('POST /rickandmorty/fav', ()=> {
        const character = {
            id: 899,
            status: 'Alive',
            name: ' Luis',
            origin: 'Earth',
            species: 'Human',
            image: 'image.png',
            gender: 'Male'
        }
        it('Lo que envíes por body debe ser devuelto en un arreglo', async()=> {
            const response = await agent.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
        })
    })

    beforeEach(()=> { // hook antes de que corra el test
        let character2 = {
            id: 900,
            status: 'Alive',
            name: 'Tico',
            origin: 'Earth',
            species: 'Human',
            image: 'image2.png',
            gender: 'Male'
        }
        return character2
    })

    describe('DELETE /rickandmorty/fav/:id', ()=> {
        const character = {
            id: 899,
            status: 'Alive',
            name: ' Luis',
            origin: 'Earth',
            species: 'Human',
            image: 'image.png',
            gender: 'Male'
        }
        it('Esta ruta, debe devolver un arreglo con los elementos previos sin modificar',  async()=> {
            const response = await agent.delete('/rickandmorty/fav/30')
            expect(response.body).toContainEqual(character)
        })
        it('Elimina correctamente a los personajes', async()=> {
            const response = await agent.delete('/rickandmorty/fav/900')
            expect(response.body).toContainEqual(character)
        })
    })
})