import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';
import AddIcon from '@mui/icons-material/Add';

function FoodCard() {
  return (
    <Container>
      <Row className="g-4 mt-4 justify-content-center">
        <h3 className='Logo mb-4'>Enjoy all the dishes on the menu!</h3>

        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Burger"
              image="/src/assets/demofood.jpg"
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Burger
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  ₹200
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>20-25 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Burger"
              image="https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg"
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" >
                  Masala Dosa
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  ₹150
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>20-25 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Burger"
              image="https://priyakitchenette.com/wp-content/uploads/2016/08/pazham-pori.jpg"
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Banana Fritters
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  ₹15
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>2-5 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Burger"
              image="https://i0.wp.com/mariasmenu.com/wp-content/uploads/Malabar-Mutton-Biriyani.png?fit=650%2C886&ssl=1"
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Biriyani
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  ₹150
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>20-25 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Burger"
              image="https://tamilshop.com/cdn/shop/articles/exotic-delight-fluffy-hoppers-appam-with-egg-or-sweet-coconut-milk-infusion_1080x.webp?v=1696470310"
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Appam
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  ₹30
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>10-15 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Burger"
              image="https://mariasmenu.com/wp-content/uploads/Kerala-Egg-Puffs.png"
              style={{ objectFit: 'cover', height: '220px', width: '100%' }}
            />
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Puffs
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  ₹20
                </Typography>
              </div>
              <p style={{marginBottom:'0px'}}>2-5 mins</p>
            </CardContent>
            <CardActions>
              <Button size="small" className=' more-details'>More Details</Button>
              <Button size="small" className='add-to-cart'><AddIcon sx={{ fontSize: 18 }}/>Add</Button>
            </CardActions>
          </Card>
        </Col>


      </Row>
    </Container>
  );
}

export default FoodCard;


