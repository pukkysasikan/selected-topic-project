import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axi from "axios";

export default function ButtonAppBar(props) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const [data, setData] = React.useState();

  const handleEdit = () =>{
    let secret = prompt("ใส่รหัสผ่านของคุณแก้ไขข้อมูลของคุณ");
    if (secret === data.secret){
        props.history.push(`/edit/${data.id}`)
    }else if (secret !== data.secret && secret !== null){
        alert("รหัสผิด โปรดลองอีกครั้ง!");
    }
  }


  const handleDelete = () =>{
      let secret = prompt("ใส่รหัสผ่านของคุณเพื่อลบ");
      if (secret === data.secret){
          axi.delete(`http://localhost:9999/api/story/${props.match.params.id}`)
          .then((response) =>{
              props.history.push("/")
          }
          ).catch((error) => {
              console.error(error);
          })
          
      }else if (secret !== data.secret && secret !== null){
          alert("รหัสผิด โปรดลองอีกครั้ง!");
      }
  }


  React.useEffect(()=>{
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

  return data? <Box
  sx={{
    mx: "auto",
    mt: 5,
    mb:5,
    width: '90vh',
    backgroundColor: '#FEF9EF',
  }}
>
  <Grid container spacing={2}>
    <Grid item xs={4} >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <CardMedia
        component="img"
        sx={{ width : 80 ,p : 1.5}}
        image={data.image}
        alt=""
      />
    </CardContent>
    </Box>
    </Grid>
    <Grid item xs={8}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }} >
      <Typography component="div" variant="h5" sx={{padding : 1}}>
      {data.title}
      </Typography>
      <Typography  variant="subtitle1" color="text.secondary" component="div"sx={{padding : 1}} >
      <b>นามปากกา :</b> {data.Author}
      </Typography>
    </CardContent>
    
    </Box>
    
    </Grid>
    <Grid item xs={30} sx={{mx:"auto"}} >
    
    <Typography  variant="subtitle1" color="text.secondary" component="div"sx={{padding : 3}} >
    {data.article}
      </Typography>

    </Grid>
  </Grid>

  <Grid container spacing={2} sx={{width: '80vh', mx: 'auto',mt:4,mb: 10, p:2 }}>

  <Grid item xs={3} md={4} sx={{mx: 'auto'}}>
    <Item>
      <Button color="info" variant="outlined" size="large" onClick={handleEdit} sx={{width:"100%" , fontFamily: "Mitr"}}>แก้ไข</Button>
    </Item>
  </Grid>
  <Grid item xs={3} md={4} sx={{mx: 'auto'}}>
    <Item>
      <Button color="info" variant="outlined" size="large" onClick={handleDelete} sx={{width:"100%" , fontFamily: "Mitr"}}>ลบ</Button>
    </Item>
  </Grid>

</Grid>



   
</Box>: (<div></div>);
}