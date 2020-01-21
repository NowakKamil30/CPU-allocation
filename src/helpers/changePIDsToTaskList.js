const changePIDsToTaskList = (pidTasks)=>{
    const tasksList=[];
    for(let i =0;i<pidTasks.length;i++)
    {
        for(let j = 0;j<pidTasks[i].tasks.length;j++)
        {
            tasksList.push(
                {
                    task:pidTasks[i].tasks[j],
                    pid: pidTasks[i].name,
                    id: pidTasks[i].id,
                    priority: pidTasks[i].priority
                })
        }
    } 
    return tasksList;
}

export default changePIDsToTaskList;