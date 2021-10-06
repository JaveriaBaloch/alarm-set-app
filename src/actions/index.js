import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS} from "../constants"
export const AddREMINDER=(text,date)=>{
    const action={
        type:ADD_REMINDER,
        date,
        text
    }
    return action
}
export const Delete_REMINDER=(id)=>{
    const action={
        type:DELETE_REMINDER,
       id
    }
    return action
}
export const Clear_REMINDERS=(id)=>{
    const action={
        type:CLEAR_REMINDERS,
       id
    }
    return action
}