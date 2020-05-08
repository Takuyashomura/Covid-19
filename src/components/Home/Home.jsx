import React from 'react';
import { fetchData } from '../../actions/dataActionCreator';
import { connect } from 'react-redux';
import '../../models/covid19Data';
import './Home.css';

class Home extends React.Component{
    constructor( props ) {
        super(props)

        this.state = {
            dataIndex: 0,
        }
    }

    componentDidMount(){
      this.renderData();
    };

    renderData(){
        this.props.fetchData();
    }

    render(){
        const { data } = this.props.dataInfo;
        if( data.length === 0 ){
            return this.renderDataRequest();
        }
        if( data.length > 0 ){

            return this.renderDataResult();
        }
    }

    renderDataRequest(){
        return (
            <div>
                <p>データ取得中...</p>
            </div>
        )
    }


    renderDataResult(){
        const { data } = this.props.dataInfo;
        const covid19Data = data[ data.length - 1];

        const beforeDay = data[ data.length -2 ];
        const comparisonComfirmed = covid19Data.confirmed - beforeDay.confirmed;
        const comparisonDeths = covid19Data.deths - beforeDay.deths;
        const comparisonRecovered = covid19Data.recovered - beforeDay.recovered;

        return (
            <div>
                <h1>日本国内「新型コロナウィルス」感染状況</h1>
                <h2>{ covid19Data.date }</h2>
                <div className="container">
                <h2>感染者合計数</h2><p> { covid19Data.confirmed } </p><small className="red">+{comparisonComfirmed}</small>
                </div>
                <div className="container">
                <h2>死者数</h2><p>{ covid19Data.deths }</p> <small className="red">+{comparisonDeths}</small>
                </div>
                <div className="container">
                <h2>退院者数</h2><p> { covid19Data.recovered }</p> <small className="green">+{comparisonRecovered}</small>
                </div>
                <div className="container">
                <h2>現在の感染者数</h2> <p>{ covid19Data.active }</p>
                </div>
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    return {
        dataInfo: state.dataInfo
    }
};

const mapDispatchToProps = { fetchData };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Home );