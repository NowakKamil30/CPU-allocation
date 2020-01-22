const addWaiting = (data)=>{
    const newData=[];
    for(let i=0;i<data.length;i++)
    {
        let waiting = 0;
        for (let j=0; j<i;j++)
        {
            waiting+=data[j].tasks.length;
        }
        newData.push({...data[i],waiting});
    }
    return newData;
}
export default addWaiting;