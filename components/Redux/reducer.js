const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // case 'ADD_FAV':
        //     let copy1 = state.myFavorites
        //     copy1.push(payload)
        //     return {...state, myFavorites: copy1}
        case 'ADD_FAV':
      return { ...state, myFavorites: payload, allCharacters: payload };

        // case 'REMOVE_FAV':
        //     let copy2 = state.myFavorites.filter((char) => {
        //         return char.id !== Number(payload)
        //     })
        //     return {...state, myFavorites: copy2}
        case 'REMOVE_FAV':
      return { ...state, myFavorites: payload };

        case 'FILTER': 
            let copy3 = state.allCharacters.filter((char) => {
                return char.gender === payload})
            return {...state, myFavorites: copy3}

        case 'ORDER':
            let copy4 = state.allCharacters
            let order = copy4.sort((a,b) => {
                if(payload === 'A'){
                return a.id - b.id
            } else if (payload === 'B' ) {
                return b.id - a.id 
            } else { 
                return 0;
            }
        })
        return {...state, myFavorites: order}    


        default:
            return state;
    }
}

export default rootReducer;