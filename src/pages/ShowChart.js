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
import barDaraArray from "../helpers/barDataArray";



const ShowChart = ({pids,algorithm}) => {
    const[data,setData]=useState([]);
    const[dataBars,setDataBars]=useState([]);
    useEffect(()=>{
        if(pids.length>0){
            let prepareData;
            prepareData=preparePidsToAlgorithm(pids,algorithm);
            setDataBars(barDaraArray(prepareData));
            prepareData=addWaiting(prepareData);
            prepareData = prepareDataToChart(prepareData);
            console.log(algorithm)
            setData(prepareData);
        }
    },[setData,algorithm,setDataBars])

      const colorCPU="#FE9E76";
      const colorIO="#F5E027";
    return (
        <div className="chart">
                {
                    pids.length===0
                    ?
                    <h3 className="error error--big">Proszę stworzyć proces</h3>
                    :
                        algorithm===""
                        ?
                    <h3 className="error error--big">Proszę wybrać algorytm</h3>
                    :
                    
                    <BarChart
                    layout="vertical"
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="id"  />
                    <Tooltip />
                    <Bar dataKey="waiting" stackId="a" fill="rgba(0,0,0,0)" />
                    {dataBars.map(({key,type})=>(
                        <Bar dataKey={key} stackId="a" fill={type==="CPU"?colorCPU:colorIO} />
                    ))} 
                </BarChart>
            } 

        </div>
    )
}
 const mapStateToPros = state =>{
     return {
        pids:state.allocation.pids,
        algorithm:state.allocation.algorithm,
     }
 }
export default connect(mapStateToPros,{})(ShowChart);