import React from 'react';
import {connect} from "react-redux";
import {changeAlgorithm} from "../actions/index";
import {algorithms} from "../settings.json";
import Button from './Button';
const AlgoritmList = ({algorithmText,changeAlgorithm,showList}) => {
    return ( 
        <div className="algorithm-list">
            {showList?
            <ul className = "algorithm-list__list">
                {algorithms.map((algorithm =>
                <li key={algorithm} className="algorithm-list__item">        <Button  
                    text={algorithm} 
                    onClick={()=>{changeAlgorithm(algorithm)}}
                    className=
                    {
                        algorithmText===algorithm
                        ?
                        "button button--algorithm-list  button--active"
                        :
                        "button button--algorithm-list"
                    } 
                    />
                </li>
                 ))}
            </ul>:null}
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