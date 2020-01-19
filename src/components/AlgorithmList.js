import React from 'react';
import {connect} from "react-redux";
import {changeAlgorithm} from "../actions/index";
import {algorithms} from "../settings.json";
import Button from './Button';
const AlgoritmList = ({algorithmText,changeAlgorithm,showList}) => {
    return ( 
        <div>
            {showList?
            <ul className = "algorithmList">
                {algorithms.map((algorithm =><li key={algorithm} className="algorithmList__item"> <Button  text={algorithm} onClick={()=>{changeAlgorithm(algorithm)}}className="algorithmList__button" /> </li>))}
            </ul>:null}
            <p>{algorithmText!==""?algorithmText:"proszę wybrać algorytm"}</p>
        </div>
    );
}
 
const mapStateToProps = state =>{
    return{
        algorithmText: state.allocation.algorithm,
        showList: state.componentState.algorithmListShow
    }
}

export default connect(mapStateToProps,{changeAlgorithm})(AlgoritmList);