import React,{Component} from 'react';
import loading from './load.gif';

export default class Spin extends Component{

    render(){
        return(

            <div className="text-center">
                <img src={loading} alt="lpading"/>


            </div>
        )
    }
}