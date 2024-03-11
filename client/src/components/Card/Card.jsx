import { Link, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import style from './Card.module.css'


// inline Styling
// const containerCard = {
//     color: 'black',
//     border: "1px solid black",
//     borderRadius: "20px"
// }

const Card = ({ id, name, species, gender, image, onClose, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, species, gender, image }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.containerCard}>
      <div className={style.buttons} >
        {isFav ? (
          <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
        ) : (
          <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
        )}

        <br />

        {!pathname.includes("/favorites") && (
          <button
            className={style.btnClose}
            onClick={() => {
              onClose(id);
            }}
          >
            X
          </button>
        )}
      </div>

      <Link to={`/detail/${id}`} className={style.containerCard} >
        <h2> {name} </h2>
      </Link>

      <div>
        <h2> {species}</h2>
        <h2> {gender}</h2>
      </div>
      <img 
        src={image} 
        alt={name} 
        className={style.image}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Card);
