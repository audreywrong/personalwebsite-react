import React from 'react';
import clsx from 'clsx';
import {GiHamburger} from 'react-icons/gi';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MobileMenu() {
  const classes = useStyles();
  // theme.breakpoints.up('sm')
  const [state, setState] = React.useState({
    isOpen: false,
  });

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, isOpen: open});
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{margin: '0 auto 0 0.5rem'}}>
      <Button
        onClick={toggleDrawer(true)}
        style={{backgroundColor: 'white', border: '2px solid black', padding: 0}}
        className="mobile-menu"
      >
        <GiHamburger style={{height: '1.5rem', width: '1.5rem'}} />
      </Button>
      )
      {/* {['Home', 'About Me', 'Baking Game', 'bottom'].map(anchor => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))} */}
    </div>
  );
}
