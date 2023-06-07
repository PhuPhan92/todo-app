import { createSelector } from "reselect";

// export const todoListSelector = (state)=> {
//   const searchKey = searchKeySelector(state);
//   const todoRemaining = state.todoList.filter((todo) =>{
//     return todo.name.includes(searchKey)
//   });
//   return todoRemaining;
// };

export const searchKeySelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(todoListSelector,statusSelector, searchKeySelector,prioritySelector, (todoList,status, searchKeySelector, priority)=>{
   return  todoList.filter((todo) =>{
    if(status === "All"){
      return priority.length ? todo.name.includes(searchKeySelector)&& (priority.includes(todo.priority)) :todo.name.includes(searchKeySelector)
    }
    return todo.name.includes(searchKeySelector) && (status === 'Completed'? todo.completed:!todo.completed) && (priority.length ? priority.includes(todo.priority): true)

  });
  })
