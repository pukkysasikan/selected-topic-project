import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ImageSearch from '@mui/icons-material/ImageSearch';
import axi from 'axios';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
    display: 'none',
  });

const handleImage = (e) => {
    const blah = document.getElementById('img');
    const imgup = document.getElementById('preview-img-box');
    let [img] = e.target.files;
    let Read = new FileReader();
    Read.onload = (e) =>{
        blah.src = e.target.result;
        imgup.style.display="block";
    }
    Read.readAsDataURL(img);
  };



export default function BasicGrid() {
  const image = React.useRef();
  const title = React.useRef();
  const author = React.useRef();
  const article = React.useRef();
  const desc = React.useRef();
  const secret = React.useRef();

  const handleUpload = () => {
    let Read = new FileReader();
    Read.onload = async (e) =>{
      let payload = {
        'title': String(title.current.value),
        'Author': String(author.current.value),
        'article': String(article.current.value),
        'desc': String(desc.current.value),
        'secret': String(secret.current.value),
        'image': String(e.target.result)
      }
      console.log(payload);
      await axi.post("http://localhost:9999/api/story", payload);
    }
    Read.readAsDataURL(image.current.files[0]);
}

  return (
    <Box sx={{width: '100vh',mx: 'auto', mt:4,mb: 10, bgcolor:"#ffffff80", p:2,  boxShadow: 2}}>
      <Grid container spacing={1}>
      <Grid item xs={12}>
          <Item sx={{fontFamily:"Mitr", fontSize:"5vh"}}>เขียนเรื่องราวของคุณ</Item>
        </Grid>
        <Grid item xs={6} id="preview-img-box">
          <Item sx={{width: "95%", height :140}}>{/* eslint-disable-next-line*/}
            <img src="#" id="img" className="preview-img"/>
          </Item>
          </Grid>
        <Grid item xs={6} >
        <Item>
            <label htmlFor="contained-button-file" >
                <Input 
                
                accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImage} ref={image}/>
                    <Button 
                        variant="outlined"
                        color='secondary' 
                        size="large" 
                        sx={{height: 140, width: '100%'}}
                        startIcon={<ImageSearch/>}
                        component="span">
                        เลือกรูปภาพ
            </Button>
            </label>
        </Item>
        </Grid>
        <Grid item xs={6}>
        <Item><TextField id="outlined-basic" inputRef={title} label="ชื่อเรื่อง" color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
        </Grid>
        <Grid item xs={6}>
        <Item><TextField id="outlined-basic" inputRef={author} label="นามปากกา" color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
        </Grid>
        <Grid item xs={12}>
        <Item><TextField id="outlined-basic" inputRef={desc} label="คำอธิบาย" rows={2} multiline color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
        </Grid>
        <Grid item xs={12}>
        <Item><TextField id="outlined-basic" inputRef={article} label="เรื่องราวของคุณ" rows={4} multiline color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
        </Grid>
        <Grid item xs={12}>
        <Item><TextField id="outlined-basic" type="password" inputRef={secret} label="รหัสลับ ใช้ในการเแก้ใขข้อมูล" color="error" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
        </Grid>
        
        </Grid>
        <Grid item xs={12}>
        <Item><Button color="info" variant="outlined" onClick={handleUpload} size="large" sx={{width:"100%" , fontFamily: "Mitr"}}>บันทึก</Button></Item>
        </Grid>
 
    </Box>
    
  );
}
