
import { MiddlewareAPI, Dispatch, Action } from 'redux';

 export const logger =(state:MiddlewareAPI)=>(next:Dispatch)=>(action:Action)=>{
console.log('current state ',state.getState())
console.log('action',action)
next(action)
}