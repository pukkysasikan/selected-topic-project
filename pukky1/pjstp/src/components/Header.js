import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default function ButtonAppBar() {
  const rehome = () => {
    window.location.replace("/");
  }
  const reload = () => {
    window.location.replace("/uploadform");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#9E7777"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:"Mitr" , fontSize: "4vh" }}>
          <Button  variant="h6" component="div" onClick={rehome} sx={{ flexGrow: 1, fontFamily:"Mitr" , fontSize: "4vh" }}>Story for you</Button>
          </Typography>
          <Button color="inherit" variant="outlined" onClick={reload}startIcon={<ModeEditOutlineIcon/>} size="large">
            Write your story</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
