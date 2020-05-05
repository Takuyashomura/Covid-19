import { 
        FETCH_DATA_REQUEST,
        FETCH_DATA_SUCCES,
        FETCH_DATA_FALUR
} from '../actions/dataActionCreator';

const initialState = {
    isLoading: false,
    data: [],
    error: null
};

export const dataReducer = (state = initialState, action) =>{
    switch( action.type )  {
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                isLoading: true
            };
        
        case FETCH_DATA_SUCCES:
            return{
                ...state,
                isLoading: false,
                data: action.data,
                error: null
            };

        case FETCH_DATA_FALUR:
            return{
                ...state,
                isLoading: false,
                data: [],
                error: action.error
            };
        
        default: 
        return state;
}
}