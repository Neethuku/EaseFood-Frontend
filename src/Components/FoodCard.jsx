import Container from 'react-bootstrap/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { SERVER_URL } from '../Service/ServerUrl';
import { addToCartAPI } from '../Service/AllAPI';
import { ToastContainer, toast } from 'react-toastify';

function FoodCard({ displaydata }) {
  const tableId = sessionStorage.getItem("tableId");

  const handleAddToCart = async (data) => {
    if (!tableId) {
      toast.error("Table number is missing!");
      return;
    }
    try {
      const reqHeader = {
         "Content-Type":"multipart/form-data"
      }
      // const imageUrl = `${SERVER_URL + data.food_image}`;
      // console.log(imageUrl);
      
      // const response = await fetch(imageUrl);
      // const blob = await response.blob();
      // const file = new File([blob], "food_image.jpg", { type: blob.type });
  
      const reqBody = new FormData();
      // reqBody.append("food", data.food_name);
      reqBody.append("quantity", "1");
      reqBody.append("food", data.id);
      // reqBody.append("image", file);  
      reqBody.append("table_number", tableId);
      // reqBody.append("food_price", data.price);

  
      console.log("Request Body:");
      for (let [key, value] of reqBody.entries()) {
        console.log(`${key}:`, value);
      }
  
      const result = await addToCartAPI(reqBody,reqHeader);
      if(result.status === 201){
        toast.success("Item added to cart")
      }
      console.log("add to cart result:", result);
      console.log();
      
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      toast.error(`Failed to add item to cart! ${error.message}`);
    }
  };
  

  return (
    <Container>
      <Card 
        sx={{ 
          width: "%", 
          maxWidth: 400, 
          boxShadow: 2, 
          borderRadius: 1, 
          overflow: "hidden", 
          transition: "transform 0.2s",
          "&:hover": { transform: "scale(1.02)" }
        }}
      >
        <CardMedia
          component="img"
          alt={displaydata?.food_name}
          image={`${SERVER_URL + displaydata.food_image}`}
          sx={{ 
            width: "100%", 
            height: { xs: 260, sm: 220, md: 250 }, 
            objectFit: "cover" 
          }}
        />
        <CardContent sx={{ p: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography 
              gutterBottom 
              variant="h6" 
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" } }}
            >
              {displaydata?.food_name}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: 'text.secondary' }}
            >
              ₹{displaydata?.price}
            </Typography>
          </div>
          <Typography 
            variant="body2" 
            sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", sm: "1rem" } }}
          >
            {displaydata.time_taken} mins
          </Typography>
        </CardContent>
        <CardActions sx={{ pb: 2 }}>
          <Button 
            size="medium" 
            variant="contained" 
            sx={{ 
              backgroundColor: "#ff9800", 
              "&:hover": { backgroundColor: "#e68900" },
              fontSize: { xs: "0.8rem", sm: "1rem" }
            }} 
            onClick={() => handleAddToCart(displaydata)}
          >
            <AddIcon sx={{ fontSize: 18, mr: 0.5 }} /> Add
          </Button>
        </CardActions>
      </Card>
       <ToastContainer
                      autoClose={1500}
                      hideProgressBar={true}
                      position="top-center"
                  />
    </Container>
  );
}

export default FoodCard;

















