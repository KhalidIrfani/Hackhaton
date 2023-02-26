import Box from '@mui/material/Box'
import banner from './images/banner.jpg'
import backgroung from './images/backgroung.jpg'
import Image from 'next/image'
import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { FoodBankOutlined, FastfoodOutlined, NightlifeOutlined } from '@mui/icons-material'
import Cards from './Cards'

const Hero = () => {
    return (
        <>
            <Box sx={{ marginTop: "2rem" }}>
                <Box>
                    <Grid container display="flex" justifyContent="space-between" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>

                        <Grid className="right-item" item xs={12} sm={12} md={4} lg={6}>
                            <Image src={banner} alt="rectangle" style={{width:"80%", height:"70vh", marginLeft:"1rem"}} />
                        </Grid>

                        <Grid item xs={12} md={6}  >
                            <Box sx={{ color: 'black', marginTop: { md: "4rem", xs: "2rem" }, marginLeft: { xs: "2.5rem", md: "7rem" } }}>
                                <Typography sx={{ fontSize: { md: "4rem", xs: "2rem" }, fontWeight: { md: "Bold", xs: "bold" } }}> Here we Organize your Event</Typography>
                                <Typography sx={{ fontSize: { xs: ".8rem", md: "1.2rem" } }}>Lorem ipsum dolor,
                                    consectetur adipiscing <br /> elit  Pellentesque aliquet
                                    libero eu volutpat <br />sss hendrerit,
                                    dolor dui consectetur dolor <br /> leo.</Typography>
                                <Button sx={{ background: "#EF2779", color: "white", fontSize: { xs: ".77rem", md: ".9rem" }, margin: { xs: "1rem", md: "1rem" }, borderRadius: "2rem", paddingLeft: { xs: "1rem", md: "2rem" }, paddingRight: { xs: "1rem", md: "2rem" } }}>OGANIZE</Button>
                                <Button sx={{ background: "gray", color: "white", borderRadius: "2rem", paddingLeft: { xs: "1rem", md: "2rem" }, paddingRight: { xs: ".89rem", md: "2rem" } }}>REVIEWS</Button>
                            </Box>
                        </Grid>


                    </Grid>
                </Box>
                <Box>
                    <Typography sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", fontFamily: 'roboto', marginTop: "2rem", color: "#ACACAC" }}>
                        Catering Service In Faisalabad
                    </Typography>
                    <Typography sx={{ textAlign: "center", color: "#1F276E", fontSize: "2.3rem", fontWeight: "bold" }}>
                        We Specalized a cooperative Event
                    </Typography>
                    <Typography sx={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold", color: "#8C8C8C" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur aut tempora quaerat iste delectus beatae quos assumenda sunt molestiae quas? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam praesentium quis repudiandae placeat culpa dolorem iste eum veniam reprehenderit?
                    </Typography>
                </Box>

                <Grid container marginTop="5rem" display="flex" justifyContent="space-between">
                    <Grid item md={6} marginLeft="4rem">
                        <Typography sx={{ color: "#1F276E", fontSize: "1.5rem", fontWeight: "bold" }}>
                            One of the best event Organization our mission is to make event memorable in Faisalabad
                        </Typography>
                        <Box display="flex" marginTop="2rem">
                            <FoodBankOutlined sx={{ fontSize: "3rem", color: "#1F276E" }} />
                            <Typography sx={{ color: "#1F276E", fontSize: "1.4rem", fontWeight: "bold", marginLeft: ".4rem" }}>
                                Best catering Service in Faisalabad
                                <Typography sx={{ fontSize: ".8rem", color: "#8C8C8C" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </Typography>
                            </Typography>
                        </Box>
                        <Box display="flex" marginTop="2rem">
                            <FastfoodOutlined sx={{ fontSize: "3rem", color: "#1F276E" }} />
                            <Typography sx={{ color: "#1F276E", fontSize: "1.4rem", fontWeight: "bold", marginLeft: "1rem" }}>
                                Best catering Service in Faisalabad
                                <Typography sx={{ fontSize: ".8rem", color: "#8C8C8C" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </Typography>
                            </Typography>
                        </Box>
                        <Box display="flex" marginTop="2rem">
                            <NightlifeOutlined sx={{ fontSize: "3rem", color: "#1F276E" }} />
                            <Typography sx={{ color: "#1F276E", fontSize: "1.4rem", fontWeight: "bold", marginLeft: ".4rem" }}>
                                Best catering Service in Faisalabad
                                <Typography sx={{ fontSize: ".8rem", color: "#8C8C8C" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={5} >
                        <Image src={backgroung} alt="background" style={{ height: "50vh", width: "90%" }} />
                    </Grid>

                </Grid>

            </Box>

            <Cards/>


        </>
    )
}

export default Hero
