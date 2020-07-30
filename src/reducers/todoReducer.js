import {
    TodoTypes
} from '../actions/actionTypes';

const todolist = [{
        id: 1,
        title: "Action item 1",
        completedate: new Date("2020-07-18T21:11:54"),
        completed: false
    },
    {
        id: 2,
        title: "Action item 2",
        completedate: new Date("2020-08-18T21:11:54"),
        completed: true
    },
    {
        id: 3,
        title: "Action item 3",
        completedate: new Date(),
        completed: true
    },
    {
        id: 4,
        title: "Action item 4",
        completedate: new Date(),
        completed: false
    },
    {
        id: 5,
        title: "Action item 5",
        completedate: new Date("2020-05-18T21:11:54"),
        completed: false
    }
]



const todoReducer = (state = todolist.sort((a, b) => b.completedate - a.completedate), action) => {
    switch (action.type) {
        case TodoTypes.GETTODOS:
            return state.sort((a, b) => b.completedate - a.completedate);
        case TodoTypes.INSERTTODO:
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                completedate: action.payload.completedate,
                completed: false
            }].sort((a, b) => b.completedate - a.completedate);
        case TodoTypes.DELETETODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case TodoTypes.TOGGLETODO:
            return state.map(todo=>{
                if(todo.id === action.payload.id){
                    return {...todo,completed:!todo.completed};
                }                  
                return todo;
            })                    
        default:
            return state;
    }
}

export default todoReducer;