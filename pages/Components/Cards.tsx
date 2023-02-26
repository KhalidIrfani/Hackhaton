import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import banner from './images/banner.png'
import business from './images/business.jpg'
import party from './images/party.jpg'
import Image from 'next/image';



const Cards = () => {
    return (
        <>
            
                <Box marginTop="3rem">
                    <Typography sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", fontFamily: 'roboto', color: "#ACACAC" }}>
                      Best Catering Service In Faisalabad
                    </Typography>
                    <Typography sx={{ textAlign: "center", color: "#1F276E", fontSize: "2.3rem", fontWeight: "bold" }}>
                      We are Provide these Following Services
                    </Typography>
                </Box>

                <Box sx={{display:"flex", marginLeft:"7rem"}}>
                    <Card sx={{ maxWidth: 345, margin: "2rem" }}>
                        <Image src={banner} alt="banner" style={{ height: "40vh" }} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Wedding 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, margin: "2rem" }}>
                        <Image src={business} alt="banner" style={{ height: "40vh" }} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Business Mettings
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, margin: "2rem" }}>
                        <Image src={party} alt="banner" style={{ height: "40vh" }} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                 Party
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>

           

        </>
    )
}

export default Cards