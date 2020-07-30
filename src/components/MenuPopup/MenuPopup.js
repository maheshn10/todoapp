import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FilterTypes} from '../../actions/actionTypes';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './MenupPopup.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color:'inherit',
  },
}));

export default function MenuPopup() {
  const classes = useStyles();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    dispatch({type:FilterTypes.FILTERBY,payload:{filterType:event.target.value}});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div  data-test="menupopup">
      
      <FormControl className={classes.formControl}>
        <Select
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Today'}>Due Today</MenuItem>
          <MenuItem value={'Incomplete'}>Incomplete</MenuItem>
          <MenuItem value={'Complete'}>Completed</MenuItem>
          <MenuItem value={'Overdue'}>Overdue</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleOpen} data-test="buttonComponent">
        
      </Button>
    </div>
  );
}
