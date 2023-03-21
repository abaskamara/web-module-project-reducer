export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = 'clearDisplay'
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "changeOperation";
export const MEMORY_ADD = 'memoryAdd'
export const MEMORY_APPLY = 'memoryApply'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({type: CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return ({
        type: CLEAR_DISPLAY
    })
}

export const addMemory = () => {
    return ({type: MEMORY_ADD})
}

export const applyMemory = () => {
    return ({type: MEMORY_APPLY})
}