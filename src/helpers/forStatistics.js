import addWaiting from "./addWaiting";

export const waitingALL = (data) =>{
    const dataWithWaiting = addWaiting(data);
    let waiting = 0;
    dataWithWaiting.forEach((item)=>{
            waiting += item.waiting;
    });
    return waiting;
}
 export const tasksAll = (data) =>{
    let numberOfTasks = 0;
    data.forEach(({tasks})=>{
        numberOfTasks += tasks.length;
    })
    return numberOfTasks;
}
export const cpuAll = (data) =>{
    let numberOfcpu = 0;
    data.forEach(({tasks})=>{
        tasks.forEach(task=>{
            if(task==="CPU")
            {
                numberOfcpu++;
            }
        })
    })
    return numberOfcpu;
}
export const ioAll = (data) =>{
    let numberOfio = 0;
    data.forEach(({tasks})=>{
        tasks.forEach(task=>{
            if(task==="IO")
            {
                numberOfio++;
            }
        })
    })
    return numberOfio;
}