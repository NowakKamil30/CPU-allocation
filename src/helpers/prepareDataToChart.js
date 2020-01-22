const prepareDataToChart = (data) =>{
    let result=[];
    for (let i=0;i<data.length;i++) {
        const {tasks} = data[i];
        let record = {};
        let cpuTask=0;
        let ioTask=0;
        let cpuPart=0;
        let ioPart=0;
        for (let j=0;j<tasks.length;j++) {
            if(tasks[j]==="CPU")
            {
                if(ioTask>0)
                {
                    ioPart++;
                    record={...record,["IO"+ioPart]:ioTask}
                    ioTask=0;
                }
                    cpuTask++;    
    
            }
            else if(tasks[j]==="IO")
            {
                if(cpuTask>0)
                {
                    cpuPart++;
                    record={...record,["CPU"+cpuPart]:cpuTask}
                    cpuTask=0;
                }
                    ioTask++; 
            }
            if(j===tasks.length-1)
            {
                if(tasks[j]==="CPU")
                {
                    cpuPart++;
                    record={...record,["CPU"+cpuPart]:cpuTask}
                }
                else
                {
                    ioPart++;
                    record={...record,["IO"+ioPart]:ioTask}
                }
            }
        }
        result.push({id:data[i].id,name:data[i].name,...record,waiting:data[i].waiting});
    }
    return result;
}

export default prepareDataToChart;