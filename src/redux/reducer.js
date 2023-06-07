import todoReducer from "../components/TodoList/todoSlite";
import filterReducer from "../components/Filters/FiltersSlideReducer";
import {combineReducers} from 'redux'


// const rootReducer = (state = {} , action) =>{
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoReducer(state.todoList,action)
//   };
// }

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer
})

export default rootReducer;