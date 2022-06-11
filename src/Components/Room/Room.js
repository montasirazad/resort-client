import CelebrationIcon from '@mui/icons-material/Celebration';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import PoolIcon from '@mui/icons-material/Pool';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Room.css';
 




const Room = (props) => {

    const { name, area, size, person, image, description } = props.room;

    

    return (

        <div className='room-div'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <div>
                            <h3 className='text-danger'>
                                <SignalWifi4BarIcon /> |
                                <ConnectedTvIcon /> |
                                <PoolIcon /> |
                                <RestaurantMenuIcon /> |
                                <LocalBarIcon /> |
                                <CelebrationIcon />
                            </h3>
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>

                        <Typography gutterBottom variant="h6" component="div">
                            {area}&#xb2; <br />
                            {size} <br />
                            {person}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography> <br />

                    </CardContent>
                </CardActionArea>
                <Link to={`/book-room/${name}`}><Button sx={{ m: 2 }} variant="outlined"  >Book This Room</Button></Link>
            </Card>
        </div>
    );
};

export default Room;