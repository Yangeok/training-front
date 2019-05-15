import React, { useState, useRef } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Menu,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  ClickAwayListener,
  Grow
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { options } from 'routes';
import { styles } from './HeaderContainerStyle';

const Header = ({ classes, title }) => {
  // const [open, setOpen] = useState(false);
  // const anchorEl = useRef(null);

  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  // const handleClose = e => {
  //   if (anchorEl.current.contains(e.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };
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
            className={classes.button}
            aria-label="More"
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            className={classes.menu}
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
    // <div className={classes.root}>
    //   <IconButton
    //     buttonRef={anchorEl}
    //     aria-owns={open ? 'menu-list-grow' : undefined}
    //     aria-haspopup="true"
    //     onClick={handleToggle}
    //     onMouseOut={handleToggle}>
    //     <ExpandMoreIcon />
    //   </IconButton>
    //   <Popper open={open} anchorEl={anchorEl.current} transition disablePortal>
    //     {({ TransitionProps, placement }) => (
    //       <Grow
    //         {...TransitionProps}
    //         id="menu-list-grow"
    //         style={{
    //           transformOrigin:
    //             placement === 'bottom' ? 'center top' : 'center bottom'
    //         }}>
    //         <Paper>
    //           <ClickAwayListener onClickAway={handleClose}>
    //             <MenuList>
    //               <MenuItem onClick={handleClose}>Profile</MenuItem>
    //               <MenuItem onClick={handleClose}>My account</MenuItem>
    //               <MenuItem onClick={handleClose}>Logout</MenuItem>
    //             </MenuList>
    //           </ClickAwayListener>
    //         </Paper>
    //       </Grow>
    //     )}
    //   </Popper>
    // </div>
  );
};

export default withStyles(styles)(Header);
