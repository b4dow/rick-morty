import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         allCharacters: [...state.allCharacters, action.payload],
        //         myFavorites: [...state.allCharacters, action.payload]
        //     };
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            }

        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter((character) => character.id !== Number(action.payload))
        //     };
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload 
            }

        case FILTER: 
            if(action.payload === 'All') {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            }
            const filterState = [...state.allCharacters].filter((character)=> character.gender === action.payload)

            if(!filterState.length) {
                alert('No hay generos agregados para ese filtro')
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            }
            return {
                ...state,
                myFavorites: filterState
            }

        case ORDER:
             const shortCharacter = [...state.allCharacters]
             shortCharacter.sort((a, b)=> {
                if(action.payload === 'A') {
                    if(a.id < b.id) return -1
                    if(a.id > b.id) return 1
                    return 0
                 }
                 else {
                    if(a.id < b.id) return 1
                    if(a.id > b.id) return -1
                    return 0
                 }
             })

            return {
                ...state,
                myFavorites: shortCharacter
            }

        default:
            return {
                ...state
            };
    }
}

export default reducer