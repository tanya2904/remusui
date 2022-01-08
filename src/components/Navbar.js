import * as React from 'react';
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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
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
    <AppBar position="fixed" style={{background:"#fff"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>   
          <img src="/assets/Lorem_IPSUM.png" style={{height:"40px" , width:"118px" , top:"15px" , left:"113px" , position:"absolute"}}></img>
          <Typography style={{ height:"20.74px" , width:"61.32px" , position:"absolute" , top:"22.92px" , left:"384.46px" , color:"#000000" , fontSize:"13px"}}> About Us </Typography>
          <Typography style={{ height:"20.74px" , width:"76.21px" , position:"absolute" , top:"22.92px" , left:"501.08px" , color:"#000000" , fontSize:"13px"}}> Contact Us </Typography>
          <Typography style={{ height:"20.74px" , width:"56.73px" , position:"absolute" , top:"22.92px" , left:"632.15px" , color:"#000000" , fontSize:"13px"}}> Courses </Typography>
          <Typography style={{ height:"20.74px" , width:"55.58px" , position:"absolute" , top:"22.92px" , left:"753.82px" , color:"#000000" , fontSize:"13px"}}> Mentors </Typography>
          <img src="/assets/Rectangle_10.png" style={{position:"absolute" , height:"30px" , width:"292px" , top:"18px" , left:"842px"}}></img>
          <Typography style={{ height:"18px" , width:"88px" , position:"absolute" , top:"23px" , left:"854px" , fontSize:"13px"}}> Search </Typography>
          <img src="/assets/Ellipse.png" style={{height:"15.21px" , width:"15.13px" , top:"25.56px" , left:"1109.73px" , position:"absolute"}}></img>
          <img src="/assets/Line.png" style={{height:"2.71px" , width:"2.69px" , position:"absolute" , top:"38.7px" , left:"1122.8px"}}></img>
          <img src="/assets/Rectangle_35.png" style={{position:"absolute" , height:"30px" , width:"30px" , top:"18px" , left:"1150px"}}></img>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
