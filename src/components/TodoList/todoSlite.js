const initState = [
    {id:1, name: "learn redux", completed: false, priority: "Medium"},
    {id:2, name: "learn ruby", completed: true, priority: "High"},
    {id:3, name: "learn PHP", completed: false, priority: "Low"},

  ]

const todoReducer = (state = initState, action) =>{

  switch(action.type){
    case'todoList/addTodo':
      return [
          ...state,
          action.payload,
      ]
    
    case'todoList/toggleTodoStatus':
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo)

    default:
      return state;
  }
}

export default todoReducer;