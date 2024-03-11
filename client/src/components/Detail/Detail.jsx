import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Detail.module.css'

const Detail = ()=> {
    const [character, setCharacter ] = useState({})
    const { id } = useParams()

    useEffect(()=> {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(
                ({ data }) => {
                    if (data.name) {
                    setCharacter(data);
                } 
                else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id])

    return (
        <div>
            {
                character ? (
                    <div className={style.containerDetail} >
                        <div  className={style.containerImage} >
                            <img 
                                src={character.image} 
                                alt={character.name}
                                className={style.image}
                            />
                        </div>
                        <div className={style.containerTitle}>
                            <h3 className={style.title}>Name: {character.name}</h3>
                            <h3 className={style.title}>Status: {character.status}</h3>
                            <h3 className={style.title}>Species: {character.species}</h3>
                            <h3 className={style.title}>Gender: {character.gender}</h3>
                            <h3 className={style.title}>Origin: {character.origin?.name}</h3>
                        </div>
                    </div>
                ) : (
                    ''
                )
            }
           
        </div>
    )
}

export default Detail