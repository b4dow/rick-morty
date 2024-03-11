import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import React from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.favoritesContainer}>
      <div className={style.containerFilters}>
        <h1>My Favorites</h1>

        <div className={style.filterOptions}>
          <h3>Order</h3>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>

          <h3>Filter</h3>
          <select onChange={handleFilter}>
            <option value="All">All Characters</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>

      {!myFavorites.length
        ? (
          <h3 className={style.title}>Welcome to your Favorites List. Create a curated collection of your favorite characters here</h3>
          ) : 
            myFavorites?.map((character, index) => {
              return (
                <div key={index} className={style.favoriteCharacters}>
                  <Card
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    origin={character.origin?.name}
                    gender={character.gender}
                    image={character.image}
                    species={character.species}
                  />
                </div>
              );
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
