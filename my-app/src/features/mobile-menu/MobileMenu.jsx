import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import {GiHamburger} from 'react-icons/gi';
import {makeStyles} from '@material-ui/core/styles';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function MobileMenu() {
  const classes = useStyles();
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, isOpen: open});
  };

  const navArray = [
    {linkContent: 'Home', hasLink: true, linkHref: '/personalwebsite-react'},
    {linkContent: 'About Me', hasLink: true, linkHref: '/about-me'},
    {
      linkContent: 'Blog',
      hasLink: false,

      linkHref: 'https://audreywrong.github.io/all-about-audrey/',
    },
    {linkContent: 'Baking Game', hasLink: true, linkHref: '/baking-game'},
    {linkContent: <FaGithub style={{margin: 'auto'}} />, hasLink: false, linkHref: 'https://github.com/audreywrong'},
    {linkContent: <FaTwitter style={{margin: 'auto'}} />, hasLink: false, linkHref: 'https://twitter.com/audwrong'},
    {
      linkContent: <FaLinkedin style={{margin: 'auto'}} />,
      hasLink: false,

      linkHref: 'https://www.linkedin.com/in/audreylwright/',
    },
  ];

  const MobileNavList = () => (
    <div style={{width: 'auto'}} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navArray.map(({linkContent, isLink, linkHref}) => {
          const hasSocial = typeof linkContent !== 'string';
          const listContent = hasSocial ? (
            <ListItemIcon style={{margin: 'auto'}}>{linkContent}</ListItemIcon>
          ) : (
            <ListItemText>{linkContent}</ListItemText>
          );

          return (
            <ListItemText button style={{padding: '1rem'}} key={linkContent}>
              {isLink ? (
                <Link to={linkHref}>{listContent}</Link>
              ) : (
                <a href={linkHref} style={{display: 'flex', margin: 'auto'}} target="_blank">
                  {listContent}
                </a>
              )}
            </ListItemText>
          );
        })}
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
      <SwipeableDrawer open={state.isOpen} onClose={toggleDrawer(false)}>
        <MobileNavList />
      </SwipeableDrawer>
    </div>
  );
}
