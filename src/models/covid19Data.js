import dataFetcher from '../covid19DataFetcher/dataFetcher';

class data {
    constructor({confirmed, deths, recovered, active, date}){

        this._confirmed = confirmed;
        this._deths = deths;
        this._recovered = recovered;
        this._active = active;
        this._date = date;
    }

    get confirmed(){
        return this._confirmed;
    };

    get deths(){
        return this._deths;
    };

    get recovered(){
        return this._recovered;
    };

    get active(){
        return this._active;
    };

    get date(){
        return this._date;
    };

    static async fetchAndCreateCovid19Data(){
        const covid19 = await dataFetcher.fetch();
        
        return data.createInstance( covid19 );
    }

    static createInstance( dataList ){
        return dataList.map( covid19Data => {
            return{
                confirmed: he.decode( covid19Data.Confirmed ),
                deths: he.decode( covid19Data.Deaths ),
                recovered: he.decode( covid19Data.Recovered ),
                active: he.decode( covid19Data.Active ),
                date: he.decode( covid19Data.Date )
            }
        });
    };
};

export default data;