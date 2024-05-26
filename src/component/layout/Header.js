import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom';
import '../../style/HeaderStyle.css'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggler = () => {
    setMobileOpen(!mobileOpen)
  }
  //handle menu
  const drawer = (
    <Box onClick={handleDrawerToggler}>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow: 1}}>
          <img src={Logo} height='70px' width='200px' alt="logo" />
        </Typography>
        <Divider />
          <ul className='mobile-menu'>
            <li>
              <NavLink activeClassName='active' to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: 'black'}}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{mr: 2, display: {sm: 'none'}}}
              onClick={handleDrawerToggler}
             >
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow: 1}}>
               <img src={Logo} height='70px' width='250px' alt="logo" />
            </Typography>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
          <Drawer 
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggler}
            sx={{display: {xs: 'block', sm: 'none'},textAlign: 'center' , "& .MuiDrawer-paper": {
              boxSizing: 'border-box',
              width: '240px'
            },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </div>
  )
}

export default Header
