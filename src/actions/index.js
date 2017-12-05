//action creators
import {EDIT_DIAGNOSIS, SEARCH_DIAGNOSIS, DELETE_DIAGNOSIS, DISPLAY_DIAGNOSIS, ADD_DIAGNOSIS, MODAL_TRIGGER} from '../data/constants'
//экшн редактирования в сайдбаре
export function editAction(id, description){
    return {type: EDIT_DIAGNOSIS, payload: {id, description}}
}
//экшн поиска диагноза
export function searchAction(searchValue){
    return {type: SEARCH_DIAGNOSIS, payload: searchValue}
}
//экшн удаления диагноза
export function deleteAction(id){
    return  {type: DELETE_DIAGNOSIS, payload: id}
}
//экшн отображения диагноза в сайдбаре
export function displayAction(id){
    return  {type: DISPLAY_DIAGNOSIS, payload: id}
}
//экшн добавления диагноза 
export function addAction(diagnosis, description){
    return  {type: ADD_DIAGNOSIS, payload: {diagnosis, description}}
}
//экшн модального окна
export function openWindowAction(windowState){
    return  {type: MODAL_TRIGGER, payload: windowState}
}
