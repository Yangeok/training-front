import React from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { options } from 'routes';

const HeaderForm = ({ handleClick, handleClose, anchorEl, open, title }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}>
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}>
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === null}
              onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        <h2>{title.toUpperCase()}</h2>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderForm;
