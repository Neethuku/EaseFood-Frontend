import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { PiChefHatLight } from "react-icons/pi";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import SignUpPage from '../Pages/SignUpPage';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/aboutpage' },
    { title: 'Menu', path: '/menupage' },
  ];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <PiChefHatLight size={30} className='Logo' />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{ 
                                ml: 1,
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
                            Ease<span className='Logo'>Food</span>
                            </Link>
                           
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {navLinks.map((page) => (
                                <MenuItem
                                key={page.title}
                                component={Link}  
                                to={page.path}    
                                onClick={handleCloseNavMenu}
                              >
                                <Typography sx={{ textAlign: 'center' }} >{page.title}</Typography>
                              </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
                        <PiChefHatLight size={30} className='Logo' />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                ml: 1,
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Ease<span className='Logo'>Food</span>
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {navLinks.map((page) => (
                            <Button
                            className='navBtn'
                            key={page.title}
                            component={Link}  
                            to={page.path}    
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    fontSize: '13px',
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}><Link to= "/sign-up">
                    <Button
                            sx={{
                                backgroundColor: ' rgb(229, 150, 3)',
                                color: 'white',
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: 'rgb(229, 150, 3)' }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Link>
                      
                        {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
