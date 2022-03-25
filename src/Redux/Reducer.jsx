import { CREATE_HOUSE } from "./Action";

const initialState = {

    info:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HOUSE:
            return{
                ...state,
                info: [...state.info, action.payload]
            }
            
    
        default:
            return state
    }
}

export default rootReducer;