const createArray=(io,cpu)=>{
    const result = [];
    let currentCpu=0;
    let currentIo=0;
    while(currentCpu+currentIo<io+cpu)
    {
        if(currentCpu<cpu)
        {
            currentCpu++;
            result.push({key:"CPU"+currentCpu,type:"CPU"});
        }
        if(currentIo<io)
        {
            currentIo++;
            result.push({key:"IO"+currentIo, type:"IO"});
        }
    }
    result.push({key:"PCU"+(currentCpu+1),type:"CPU"});
    result.push({key:"IO"+(currentIo+1), type:"IO"});
    console.log(result);
    return result;
}

const barDataArray = (data) =>{
 
    let maxIO=0;
    let maxCPU=0;
    for (let i=0;i<data.length;i++) {
        const {tasks} = data[i];
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
                    ioTask=0;
                }
                    cpuTask++;    
    
            }
            else if(tasks[j]==="IO")
            {
                if(cpuTask>0)
                {
                    cpuPart++;
                    cpuTask=0;
                }
                    ioTask++; 
            }
            if(j===tasks.length-1)
            {
                if(tasks[j]==="CPU")
                {
                    cpuPart++;
                }
                else
                {
                    ioPart++;
                }
            }
        }
        if(ioPart>maxIO)
        {
            maxIO=ioPart;
        }
        if(cpuPart>maxCPU)
        {
            maxCPU=cpuPart;
        }
    }
    return createArray(maxIO,maxCPU);
}

export default barDataArray;