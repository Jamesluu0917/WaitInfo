import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import GamesRoundedIcon from '@mui/icons-material/GamesRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import Cookies from 'js-cookie';
import { useNavigate,useLocation } from 'react-router-dom';

function SessionMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate(); // For navigation to another page

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    // Remove all cookies
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    navigate('/');
  };

  const location = useLocation();
  const currentPath = location.pathname;

  // Define a function to determine if a menu item is active
  const isActive = (path : string) => currentPath === path;

  // Define your menu items with their respective paths
  const menuItems = [
    { text: 'Status', icon: <HourglassEmptyRoundedIcon fontSize="small" />, path: '/queue' },
    { text: 'Play', icon: <GamesRoundedIcon fontSize="small" />, path: '/game' },
  ];


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <p className='patientId'>{Cookies.get('patientId')}</p>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          ><MenuRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      {menuItems.map((item) => (
        <MenuItem
          key={item.text}
          onClick={() => navigate(item.path)}
          sx={{
            fontFamily: 'Maven Pro',
            color: isActive(item.path) ? 'primary.main' : 'text.primary',
          }}
        >
          <ListItemIcon sx={{color: isActive(item.path) ? 'primary.main' : 'text.primary'}}>{item.icon}</ListItemIcon>
          {item.text}
        </MenuItem>
      ))}
        <Divider />
        <MenuItem onClick={handleLogOut} sx={{ fontFamily: 'Maven Pro'}}>
          <ListItemIcon sx={{color: 'text.primary'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default SessionMenu;