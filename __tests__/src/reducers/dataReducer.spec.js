import { dataReducer } from '../../../src/reducers/dataReducer';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCES, FETCH_DATA_FALUR } from '../../../src/actions/dataActionCreator';


describe('dataReducerのテスト', () => {
    it('action.typeがFETCH_DATA_REQUESTの時', () => {
        const action = {
            type: FETCH_DATA_REQUEST
        };

        const newState = dataReducer( undefined, action);

        expect( newState ).toStrictEqual({
            isLoading: true,
            data: [],
            error: null
        });
    });

    it('type.actionがFETCH_DATA_SUCCESの時', () => {
        const dummyData = [{
            confirmed: 1,
            deths: 2,
            recovered: 3,
            active: 4,
            date: 'a'
        }];

        const action = {
            type: FETCH_DATA_SUCCES,
            data: dummyData
        };

        const currentState = {
            isLoading: true,
            data: [],
            error: null
        };

        const newState = dataReducer( currentState, action );

        expect( newState ).toStrictEqual({
            isLoading: false,
            data: dummyData,
            error: null
        });
    });

    it('action.typeがFETCH_DATA_FALURの時', () => {
        const dummyError = 'ダミーエラー';

        const action = {
            type: FETCH_DATA_FALUR,
            error: dummyError
        };

        const currentState = {
            isLoading: true,
            data: [],
            error: null
        };

        const  newState = dataReducer( currentState, action );

        expect( newState ).toStrictEqual({
            isLoading: false,
            data: [],
            error: dummyError
        });
    });
});