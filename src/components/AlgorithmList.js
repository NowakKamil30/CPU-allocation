import React from 'react';
import {algorithms} from "../settings.json";
import Button from './Button';
const AlgoritmList = () => {
    return ( 
        <ul className = "algorithmList">
            {algorithms.map((algorithm =><li className="algorithmList__item"> <Button text={algorithm} className="algorithmList__button" /> </li>))}
        </ul>
    );
}
 
export default AlgoritmList;