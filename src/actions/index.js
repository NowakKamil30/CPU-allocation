import {change_algorithm,
    show_algorithm_list,
    add_task_to_pid,
    edit_task_pid,
    name_pid,
    priority_pid,
    reset_pid,add_pid} from "./types";

export const changeAlgorithm = (algoritm) =>(
    {
        type:change_algorithm,
        payload: algoritm
    }
)
export const showAlgorithmList = () =>(
    {
        type:show_algorithm_list,
    }
)
export const editTaskPid = (index,value)=>(
    {
        type:edit_task_pid,
        payload:{index,value}
    }
)
export const addTaskToPid = () =>(
    {
        type:add_task_to_pid,
        payload:"CPU"
    }
)
export const namePid = name =>(
    {
        type:name_pid,
        payload:name
    }
)
export const priorityPid = priority =>(
    {
        type: priority_pid,
        payload: priority
    }
)
export const resetPid = ()=>(
    {
        type:reset_pid,
    }
)
export const addPid = (pid) =>(
    {
        type:add_pid,
        payload:pid
    }
)