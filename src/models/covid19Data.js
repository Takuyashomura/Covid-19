import dataFetcher from '../covid19DataFetcher/dataFetcher';
import he from 'he';

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

    static createInstance( dataList ){
        return dataList.map( covid19Data => {
            return{
                confirmed: covid19Data.Confirmed,
                deths: covid19Data.Deaths,
                recovered: covid19Data.Recovered,
                active: covid19Data.Active,
                date: covid19Data.Date
            }
        })
        .map( covid19Data => {
           return new data( covid19Data );
        })
    };
};

export default data;