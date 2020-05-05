import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCES, FETCH_DATA_FALUR, fetchData } from '../../../src/actions/dataActionCreator';
import dataModel from '../../../src/models/covid19Data';

jest.mock('axios');

const middleware = [ thunk ];
const mockStore = configureMockStore( middleware );

describe('dataActionCreatorのテスト', () => {
    it('fetch成功時FETCH_DATA_SUCCESと一緒にデータが返される', async () => {
        const expectedResults = [{
            confirmed: 1,
            deths: 2,
            recovered: 3,
            active: 4,
            date: 'a'
        }];

        axios.get.mockResolvedValue({
            data:{
                results: expectedResults
            }
        });

        const store = mockStore();
        await store.dispatch( fetchData() );
        expect( store.getActions() ).toStrictEqual[(
        {
            type: FETCH_DATA_REQUEST
        },
        {
            type: FETCH_DATA_SUCCES,
            data: dataModel.fetchAndCreateCovid19Data( expectedResults )
        }
        )];
    });

    it('fetch失敗時FETCH_DATA_FALURと一緒にエラーが返る', async () => {
        const expectedError = {
            error: 'エラー'
        };
        
        axios.get.mockRejectedValue( expectedError );

        const store = mockStore();
        await store.dispatch( fetchData() );
        expect( store.getActions() ).toStrictEqual([
            {
                type: FETCH_DATA_REQUEST
            },
            {
                type: FETCH_DATA_FALUR,
                error: expectedError
            }
        ]);
    });
})