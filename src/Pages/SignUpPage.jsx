import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image1 from '../assets/Hamburger_on_a_white_background_food_photograph___Premium_AI-generated_image-removebg-preview.png'
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
    const naviagte = useNavigate()

    const userSignUp = () => {
        naviagte ('/signup-user')
    }
    const proprietorSignup = () => {
      naviagte('/proprietor-signup')
    }

  return (
    <div className='row h-100 d-flex align-items-center justify-content-center w-100'>
      <div className="col-9 col-md-8 col-lg-6" style={{marginTop:'100px'}}>
        <Card className='signup-card' sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, minHeight: 250 ,boxShadow:'0 4px 15px rgba(0, 0, 0, 0.2)'}}>
                    <Box 
            component="img"
            src={image1}
            alt="Placeholder"
            sx={{ 
              width: { xs: '100%', sm: '50%' }, 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
          <Box sx={{ flex: 1, padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'center' }}>
            <CardContent >
             <Button onClick={userSignUp} className='button-grp signup-btn mb-3'>SignUp as User</Button>
             <Button onClick={proprietorSignup} className='signup-btn'>SignUp as Proprietor</Button>
            </CardContent>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default SignUpPage;


