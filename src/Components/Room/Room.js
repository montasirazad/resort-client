import React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
                <Button sx={{m:2}} variant="outlined"  >Book This Room</Button>
            </Card>
        </div>
    );
};

export default Room;