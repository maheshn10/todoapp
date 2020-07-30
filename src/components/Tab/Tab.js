import React, { useRef } from 'react';
import {useDispatch} from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
// import TitleIcon from '@material-ui/icons/Title';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import {TodoTypes} from '../../actions/actionTypes';
import TextField from '@material-ui/core/TextField';
import MenuPopup from '../MenuPopup/MenuPopup';
import './Tab.scss';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    todo: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
      },
    },
    todoIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    MuiSvgIcon:{
        color:'white',
    },
  }));

  

function Tab(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const textInput = useRef();
    const [title, setTitle] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const TextFieldComponent = (props) => {
        return <TextField {...props} disabled={true} classes={{root: classes.inputRoot,input: classes.inputInput,}} />
      }

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      function addTodo(e){
        textInput.current.focus();
        if(title.trim()==='') return;
        dispatch({type:TodoTypes.INSERTTODO,payload:{title:title,completedate:selectedDate}});
        setTitle('');
      }
      function clearText(){
        setTitle('');
        setSelectedDate(new Date());
      }
  
    return (
      <div className={classes.grow}  data-test="tabcomponent">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              To-Do List
            </Typography>
            <div className={classes.todo}>
              <InputBase
                placeholder="Add Item…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'todo' }} 
                value = {title} 
                onChange = {e=>setTitle(e.target.value)} 
                inputRef={textInput} 
                autoFocus
              />
            </div>
            <div className={classes.todo}>    
            <MuiPickersUtilsProvider utils={DateFnsUtils} 
            color="inherit">         
            <KeyboardDatePicker
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="dd/MM/yyyy" 
        clearable ={false} 
        TextFieldComponent={TextFieldComponent} 
        autoOk = {true}
      />
          </MuiPickersUtilsProvider> 
            </div>
            <Button color="inherit" onClick = {addTodo}>Add</Button>
            <Button color="inherit" onClick = {clearText}>Clear</Button>
            <MenuPopup></MenuPopup>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Tab;