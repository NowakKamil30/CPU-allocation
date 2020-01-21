const preparePidsToAlgorithm =  (pids,algorithm) => {
    let algorithmPids;
    switch(algorithm)
    {
        case "Priority":
        {
            algorithmPids = [...pids];
            algorithmPids.sort((a,b)=>{
                return b.priority-a.priority;
            });
        }
        break;
        case "SJF":
        {
            algorithmPids = [...pids];
            algorithmPids.sort((a,b)=>{
                return a.tasks.length - b.tasks.length;
            });
        }
        break;
        case "FCFS":
        default:
        {
            algorithmPids = [...pids];
        }
        break;
    }
    return algorithmPids;
}

export default preparePidsToAlgorithm;