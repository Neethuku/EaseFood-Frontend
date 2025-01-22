import Container from 'react-bootstrap/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

function FoodCard({displaydata}) {
  console.log(displaydata);
  
  return (
    <Container>
     <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt={displaydata?.food_name}
              image={displaydata.food_image}
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {displaydata?.food_name}
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  {displaydata?.price}
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>20-25 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
    </Container>
  );
}

export default FoodCard;