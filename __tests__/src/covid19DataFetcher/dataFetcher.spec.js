import dataFetcher from '../../../src/covid19DataFetcher/dataFetcher';

describe('dataFetcherのテスト', () => {
    it('クラスチェック' , () => {
        expect( typeof dataFetcher ).toStrictEqual('function');
    })
});

describe('covid19データテスト', () => {
    it('covid19のデータがカテゴリ別で手に入る', async () => {
        const data = await dataFetcher.fetch();
        expect( Array.isArray( data )).toStrictEqual(true);
        data.forEach( covidData => {
            expect( typeof covidData.Country ).toStrictEqual('string');
            expect( typeof covidData.Confirmed ).toStrictEqual('number');
            expect( typeof covidData.Deaths ).toStrictEqual('number');
            expect( typeof covidData.Recovered ).toStrictEqual('number');
            expect( typeof covidData.Active ).toStrictEqual('number');
            expect( typeof covidData.Date ).toStrictEqual('string');
        });
    });
});
