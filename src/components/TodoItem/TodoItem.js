import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  dividerInset: {
    'margin-left': '111px',
  },
}));

function TodoItem(todo) {  
  const classes = useStyles();

return <><ListItem key={todo.id} data-test="todoitemcomponent">
<ListItemAvatar>
<Avatar>
    <DeleteIcon />
    </Avatar>
    </ListItemAvatar>
  <ListItemAvatar>        
    <Avatar>
      <DoneIcon />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary={todo.title} secondary="Jan 9, 2014" />
</ListItem>
<Divider variant="inset" component="li" className={classes.dividerInset}/>
</>
}

export default TodoItem;