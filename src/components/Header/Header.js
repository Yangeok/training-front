import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root: {
    width: '100%'
  },
  title: {
    textAlign: 'right'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const options = [
  <Link to={'/'}>Home</Link>,
  <Link to={'/about'}>About</Link>,
  <Link to={'/blog'}>Blog</Link>,
  <Link to={'/youtube'}>Youtube</Link>,
  <Link to={'/blog/post'}>BlogPost</Link>,
  <Link to={'/youtube/post'}>YoutubePost</Link>
];

const ITEM_HEIGHT = 48;

const Header = props => {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}>
              {options.map(option => (
                <MenuItem
                  key={option}
                  selected={option === null}
                  onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
