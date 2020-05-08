import axios from 'axios';
import dataModel from '../models/covid19Data';

const API_URL = 'https://api.covid19api.com/total/dayone/country/japan';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCES = 'FETCH_DATA_SUCCES';
export const FETCH_DATA_FALUR = 'FETCH_DATA_FALUR';

export const fetchData = () => {
    return async ( dispatch ) => {
        dispatch( fetchDataRequest() );
        try{
            const response = await axios.get(API_URL);
            const results = response.data;
            const data = dataModel.createInstance( results );
            dispatch( fetchDataSucces( data ) );
        } catch ( error ){
            dispatch( fetchDataFailur( error ) );
        }
    }
};

const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    };
};

const fetchDataSucces = ( data ) => {
    return {
        type: FETCH_DATA_SUCCES,
        data
    };
};

const fetchDataFailur = ( error ) => {
    return {
        type: FETCH_DATA_FALUR,
        error
    };
};

