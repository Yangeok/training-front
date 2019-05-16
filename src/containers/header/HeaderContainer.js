import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HeaderContainerStyle';
import { HeaderForm } from 'components';

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
      <HeaderForm
        handleClick={handleClick}
        handleClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        title={title}
      />
    </div>
  );
};

export default withStyles(styles)(Header);
