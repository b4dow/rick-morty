import React from 'react'
import Card from '../Card/Card'
import SearchBar from '../Searchbar/SearchBar'
import style from './Cards.module.css'

export default function Cards (props) {
  const { characters, onClose } = props

  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
      <br />
      <div className={style.containerCards}>
        {characters.length === 0 ? (
          <h3 className={style.title}>
            Welcome to the Rick and Morty application, please search for a
            character you want.
          </h3>
        ) : (
          characters.map((character, index) => {
            return (
              <Card
                key={index}
                id={character.id}
                name={character.name}
                status={character.status}
                origin={character.origin.name}
                gender={character.gender}
                image={character.image}
                species={character.species}
                onClose={onClose}
              />
            )
          })
        )}
      </div>
    </div>
  )
}
