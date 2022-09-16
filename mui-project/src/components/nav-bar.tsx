/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  styled, AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar,
} from '@mui/material';
import { Pets, Mail, Notifications } from '@mui/icons-material';

const StyleToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '20%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const NavBar = () => (
  <AppBar position="sticky">
    <StyleToolBar>
      <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>NAVBAR</Typography>
      <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
      <Search><InputBase placeholder="Search..." /></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications />
        </Badge>
        <Avatar
          sx={{ width: 30, height: 30 }}
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Icons>

      <UserBox>
        <Avatar
          sx={{ width: 30, height: 30 }}
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Typography variant="span">John</Typography>
      </UserBox>
    </StyleToolBar>

  </AppBar>
);

export default NavBar;
