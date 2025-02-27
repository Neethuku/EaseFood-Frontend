import React, { useContext } from 'react';
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
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PiChefHatLight } from "react-icons/pi";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { orange } from '@mui/material/colors';
import { cartCountContext } from '../Context API/ContextShare';
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdHome } from "react-icons/io";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {cartCount,setCartCount} = useContext(cartCountContext)
    
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
        <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo for desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <PiChefHatLight className='Logo' size={30} />
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                ml: 1,
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            className='NavHover'
                        >
                            Ease<span className='Logo'>Food</span>
                        </Typography>
                    </Box>


                    {/* Mobile menu button */}
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
                        >
                          {[
    { name: 'Home', link: '/home', icon:<IoMdHome style={{paddingRight:'3px'}} size={22} />},
    { name: 'About', link: '/about', icon: <IoMdInformationCircle style={{paddingRight:'3px'}} size={22}  />  },
    { name: 'Cart', link: '/cart' }].map((page) => (
    <MenuItem key={page.name} component={Link} to={page.link} onClick={handleCloseNavMenu}>
        {page.name === 'Cart' ? (
            <Badge
                className='cart-badge'
                badgeContent={cartCount ? cartCount : '0'}
                sx={{
                    '& .MuiBadge-badge': {
                        color: 'white',
                        backgroundColor: '#FEAB19'
                    }
                }}
            >
                <ShoppingCartIcon size={22} style={{paddingRight:'3px'}}  />
            </Badge>
        ) : page.icon ? (
            <>{page.icon}</>
        ) : null}
        <Typography textAlign="center" sx={{ ml: page.name === 'Cart' ? 1 : 0 }}>
            {page.name}
        </Typography>
    </MenuItem>
))}

                        </Menu>
                    </Box>

                    {/* Logo for mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
                        <PiChefHatLight size={30} />
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                ml: 1,
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Ease<span style={{ color: 'orange' }}>Food</span>
                        </Typography>
                    </Box>

                    {/* Navigation buttons for desktop */}
                    {/* <form style={{ marginLeft: '190px' }}>

                        <input
                            type="text"
                            placeholder="Search..."
                            className="hidden lg:inline searchInput"
                        //   value={searchTerm}


                        />
                    </form> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {['Home', 'About'].map((page) => (
                            <Button
                                key={page}
                                component={Link}
                                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                                sx={{ my: 2, color: 'black', fontSize: '13px', fontWeight: 700 }}
                                className='NavHover'
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            component={Link}
                            to="/cart"
                            className='NavHover'
                            sx={{ my: 2, color: 'black', display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: 700 }}
                        >
                            <Badge badgeContent={cartCount?cartCount:'0'} sx={{
                                '& .MuiBadge-badge': {
                                    color: "white",
                                    backgroundColor: ' #FEAB19'
                                }
                            }}>
                                <ShoppingCartIcon style={{ fontSize: '1.3rem' }} />
                            </Badge>
                            <Typography sx={{ ml: 1, fontWeight: '700', fontSize: '13px', lineHeight: '1.75', letterSpacing: '0.02857em' }}>Cart</Typography>
                        </Button>
                    </Box>

                    {/*  profile */}
                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
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
                                    <Typography textAlign="center">{setting}</Typography>
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