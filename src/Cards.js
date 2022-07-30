import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Cards({ jsonData, legitData }) {
    return (
        <div>
            {
                !jsonData ? <Card sx={{ maxWidth: 345 }}>
                    {console.log("in correct section")}
                    <CardMedia
                        component="img"
                        height="290"
                        image={legitData.main[0].image_url}
                        alt="Photos"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {legitData.main[0].heading}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {legitData.main[0].description}
                        </Typography>
                    </CardContent>
                </Card> : <Card sx={{ maxWidth: 345 }}>
                    {console.log("inelse section", jsonData)}

                    <CardMedia
                        component="img"
                        height="290"
                        image={jsonData[0].image_url}
                        alt="Photos"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {jsonData[0].heading}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {jsonData[0].description}
                        </Typography>
                    </CardContent>
                </Card>
            }
        </div>
    )
}

export default Cards