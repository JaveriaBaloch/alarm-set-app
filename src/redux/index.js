import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS} from "../constants"
import {bake_cookie, read_cookie} from "sfcookies"
const reminder=(action)=>{
    return{
        text:action.text,
        date:action.date,
        id:Math.random()
    }
}
const removereminder=(state=[],id)=>{
    const reminders=state.filter(reminder=>reminder.id!==id)
    return reminders
}
const reminders=(state=[],action)=>{
    let reminders =null
    state=read_cookie("reminders",reminders)
    switch(action.type){
        case ADD_REMINDER:
            reminders=[...state,reminder(action)]
            bake_cookie("reminders",reminders)
            return reminders
        case DELETE_REMINDER:
            reminders=removereminder(state,action.id)
            bake_cookie("reminders",reminders)
            return reminders
        case CLEAR_REMINDERS:
            reminders=[]
            bake_cookie("reminders",reminders)
             return reminders
        default:
            return state;
    }
}
export default reminders