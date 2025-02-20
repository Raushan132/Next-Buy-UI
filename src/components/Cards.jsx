
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { IoStarHalfOutline } from 'react-icons/io5';

export default function Cards({product}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box >

        <img style={{width:'100%', height:300}} src={product.image} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product?.description}
        </Typography>
        <Typography sx={{display:'flex',gap:1}}>
          <span>Price:</span> <span style={{display:'flex', alignItems:'center', gap:2}}>{product?.price}<IoStarHalfOutline color='#fa2' size={22}  /></span>
        </Typography>
        <Typography sx={{display:'flex',gap:1}}>
          <span>Rating:</span> <span style={{display:'flex', alignItems:'center', gap:2}}>{product?.rating}<IoStarHalfOutline color='#fa2' size={22}  /></span>
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
       
        <Button  sx={{background:'#6af', color:'#fff'}}>Read More</Button>
        <Button  sx={{background:'#f66', color:'#fff'}}>Add To Card</Button>

      </CardActions>
      
    </Card>
  );
}