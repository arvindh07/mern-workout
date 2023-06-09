import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useLogout } from '../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkouts } from '../../features/workouts';

export default function Navbar() {
  const { logout } = useLogout();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    dispatch(addWorkouts(null));
  }
  const user = useSelector(state => state.userReducer.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Workouts
          </Typography>
          {user && (<div className='logout'>
            <span>{user?.email}</span>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
          )}
          {!user && (<div className='nav-right'>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}