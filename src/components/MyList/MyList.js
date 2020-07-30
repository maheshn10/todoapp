import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import {TodoTypes} from '../../actions/actionTypes';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  dividerInset: {
    'margin-left': '111px',
  },
  doneButton:{
    color:'green'
  },  
  deleteButton:{
    color:'red'
  },    
  incompleteButton:{
    color:'grey'
  },    
  strikeTitle:{
    textDecoration: 'line-through'
  },
}));



function MyList() {
  const classes = useStyles();
  const todos = useSelector(state => state.todo);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  function filterTodo(){
    switch (filter) {
        case 'Today':
            return todos.filter(todo=>todo.completedate.toDateString()===new Date().toDateString());   
        case 'Incomplete':
            return todos.filter(todo=>todo.completed===false);
        case 'Complete':
            return todos.filter(todo=>todo.completed===true);
        case 'Overdue':
            return todos.filter(todo=>(new Date(new Date().toDateString()) > new Date(todo.completedate.toDateString()) && todo.completed===false));            
        default:
            return todos;
    }
  }

  let todolist = filterTodo();

  function deleteTodo(id){
    dispatch({type:TodoTypes.DELETETODO,payload:{id:id}});
}

function toggleTodo(id){
    dispatch({type:TodoTypes.TOGGLETODO,payload:{id:id}});
}
  
console.log(todolist);
  return (
    <List className={classes.root}  data-test="mylistcomponent">
    {todolist && todolist.map(todo =>{
        return <><ListItem key={todo.id}>
        <ListItemAvatar>
        <Fab size="small" className = {classes.deleteButton} aria-label="add" onClick = {()=>deleteTodo(todo.id)}>
        <DeleteIcon />
      </Fab>
      </ListItemAvatar>
          <ListItemAvatar>        
          <Fab size="small" className = {todo.completed?classes.doneButton:classes.incompleteButton} aria-label="add"  onClick = {()=>toggleTodo(todo.id)}>
          <DoneIcon />
        </Fab>
          </ListItemAvatar>
          <ListItemText primary={todo.title} secondary={todo.completedate.toLocaleDateString('de-DE', options)} className = {todo.completed?classes.strikeTitle:''} />
          {(new Date(new Date().toDateString()) > new Date(todo.completedate.toDateString()) && todo.completed===false)? <Alert variant="outlined" severity="warning">
        Overdue!
      </Alert>:''}
        </ListItem>
        <Divider variant="inset" component="li" className={classes.dividerInset}/>
        </>
    })}      
    </List>
  );
}


export default MyList
