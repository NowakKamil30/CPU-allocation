import {change_algorithm,show_algorithm_list} from "./types";

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