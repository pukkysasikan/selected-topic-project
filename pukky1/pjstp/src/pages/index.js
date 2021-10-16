import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axi from "axios";

export default function MediaCard() {
  const [data, setData] = React.useState();
  React.useEffect(()=>{
    axi.get("http://localhost:9999/api/story")
      .then(function (response) {
          setData(response.data);
        })
      .catch(function (error) {
          console.log(error);
        })
      .then(function () {
          // always executed
        })// eslint-disable-next-line
    },[]);

  return data?
    <Grid container justifyContent="center" spacing={2}>
          {data.map((value) => (
            <Grid key={value} item>
              <Card sx={{ maxWidth: 300 , mt:2, ml:2}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={value.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={`/detail/${value.id}`}>DETAILS</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
  :(<h1>Loading</h1>);
}