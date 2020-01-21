import React,{ PureComponent,useEffect,useState } from 'react';
import {connect} from "react-redux";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
import preparePidsToAlgorithm from "../helpers/preparePidsToAlgorithm";
import prepareDataToChart from "../helpers/prepareDataToChart";
import addWaiting from "../helpers/addWaiting";



const ShowChart = ({pids,algorithm}) => {
    const[data,setData]=useState([])
    useEffect(()=>{
        if(pids.length>0){
            let prepareData;
            prepareData=preparePidsToAlgorithm(pids,algorithm);
            prepareData=addWaiting(prepareData);
            prepareData = prepareDataToChart(prepareData);
           console.log(algorithm)
           console.log(prepareData);
            setData(prepareData);
        }
    },[setData,algorithm])

      
    return (
        <>
             {
        pids.length===0
        ?
        <h3>Proszę stworzyć proces</h3>
        :
            algorithm===""
            ?
        <h3>Proszę wybrać algorytm</h3>
        :
        
        <BarChart
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="id"  />
        <Tooltip />
        <Legend/>
        <Bar dataKey="waiting" stackId="a" fill="rgba(0,0,0,1)" />
        <Bar dataKey="CPU" stackId="a" fill="#FE9E76" />
        <Bar dataKey="IO" stackId="a" fill="#F5E027" />
        <Bar dataKey="CPU1" stackId="a" fill="#FE9E76" />
        <Bar dataKey="IO1" stackId="a" fill="#F5E027" />
      </BarChart>
        } 

        </>
    )
}
 const mapStateToPros = state =>{
     return {
        pids:state.allocation.pids,
        algorithm:state.allocation.algorithm,
     }
 }
export default connect(mapStateToPros,{})(ShowChart);