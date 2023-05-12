import { createSlice } from "@reduxjs/toolkit"

export const filterSelector = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
        filterBy: filterSelector.ALL
    },
    reducers: {
        addTodo: (state, action) =>{
            console.log('sup')
            console.log(action.payload)
            const todo  ={
                id: Math.floor(Math.random()*10000),
                text: action.payload,
                completed: false
                
                
            };
            state.tasks.push(todo)
          
            
        },
        toggleComplete: (state, action) => {
            const index = state.tasks.findIndex((todo) => todo.id === action.payload.id);
            state.tasks[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) =>{
            const taskCopy = state.tasks.slice()
            taskCopy.splice(action.payload, 1)
            state.tasks=taskCopy
        },
        /* deleteTodo: (state, action) => {
            return state.tasks.filter((todo) => todo.id !== action.payload.id);
        }, */
        
        filterBy (state, action)  {
            state.filterBy=action.payload
        }
    }
})
export const selectTask =(state)=>state.todo.tasks
const {actions, reducer} = todoSlice
export const {addTodo, toggleComplete, removeTodo, deleteTodo, filterBy} = actions
export default reducer