import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axi from 'axios';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid(props) {
  const title = React.useRef();
  const author = React.useRef();
  const article = React.useRef();
  const desc = React.useRef();
  const [data, setData] = React.useState(); 

  React.useEffect(() =>{
    axi.get(`http://localhost:9999/api/story/${props.match.params.id}`)
    .then(function (response) {
        setData(response.data[0]);
      })
    .catch(function (error) {
        console.log(error);
      })
    .then(function () {
        // always executed
      })// eslint-disable-next-line
},[]);

  const handleUpdate =  async () =>{
    let item = {
      'title': String(title.current.value),
      'Author': String(author.current.value),
      'article': String(article.current.value),
      'desc': String(desc.current.value),
      'secret': data.secret,
      'image': data.image
    }
    await axi.put(`http://localhost:9999/api/story/${data.id}`, item)
        .then(function (response) {
            window.location.replace("/");
          })
        .catch(function (error) {
            console.warn(error);
          });
  }

  return data?<Box sx={{width: '80vh', mx: 'auto',mt:4,mb: 10, bgcolor:"#ffffff80", p:2 , boxShadow: 2}}>
  <Grid container spacing={1}>
  <Grid item xs={12}>
      <Item sx={{fontFamily:"Mitr", fontSize:"5vh"}}>แก้ไขเรื่องราวของคุณ</Item>
    </Grid>
    <Grid item xs={6}>
    <Item><TextField id="outlined-basic" inputRef={title} defaultValue={data.title} label="ชื่อเรื่อง" color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
    </Grid>
    <Grid item xs={6}>
    <Item><TextField id="outlined-basic" inputRef={author} defaultValue={data.Author} label="นามปากกา" color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
    </Grid>
    <Grid item xs={12}>
    <Item><TextField id="outlined-basic" inputRef={desc} defaultValue={data.desc} label="คำอธิบาย" rows={2} multiline color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
    </Grid>
    <Grid item xs={12}>
    <Item><TextField id="outlined-basic" inputRef={article} label="เรื่องราวของคุณ" defaultValue={data.article} rows={4} multiline color="secondary" size="small" sx={{width:"100%"}} variant="outlined" /></Item>
    </Grid>
    <Grid item xs={12}>
    <Item><Button color="info" variant="outlined" onClick={handleUpdate} size="large" sx={{width:"100%" , fontFamily: "Mitr"}}>บันทึก</Button></Item>
    </Grid>
  </Grid>
</Box>: (<div></div>);
}
