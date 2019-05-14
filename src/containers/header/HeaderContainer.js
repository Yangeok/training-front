import React, { useState } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { options } from 'routes';
import { styles } from './HeaderContainerStyle';

const Header = ({ classes, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
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
            PaperProps={classes.paperProps}>
            {options.map(option => (
              <MenuItem
                key={option}
                selected={option === null}
                onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            {title.toUpperCase()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
