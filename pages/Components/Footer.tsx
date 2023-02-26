import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
    return (
        <Box>
            <Grid container marginTop={{ xs: 10, md: 20 }} textAlign="center">
                <Grid item md={3} xs={12} sx={{ color: "#1F276E", marginLeft:"10rem" }}>
                    <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                    <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                </Grid>
                <Grid item md={3} xs={12} sx={{  color: "#1F276E", marginTop: { xs: 7, md: 0 }, }}>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>       
                </Grid>
                <Grid item md={3} xs={12} sx={{  color: "#1F276E", marginTop: { xs: 7, md: 0 }, }}>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                <Typography  fontSize="1.3rem">Lorem Ipsum Dolor Sit Amet</Typography>
                </Grid>


            </Grid>

            <Box display="flex" justifyContent="space-between">
                <Box sx={{ display: { xs: "flex" }, marginTop: { xs: "5rem", md: "8rem" }, marginLeft: { md: "4rem", xs: "1.5rem" } }}>
                    <Button sx={{ color: "#1F276E" }}>Privacy</Button>
                    <Button sx={{  color: "#1F276E" }}>Terms</Button>
                </Box>
                <Box sx={{ marginTop: { xs: "5rem", md: "10rem" }, marginRight: { md: "2rem", xs: ".5rem" } }}  >
                    <Instagram sx={{  color: "#1F276E", margin: { md: ".2rem" } }} />
                    <Facebook sx={{ color: "#1F276E", margin: { md: ".2rem" } }} />
                    <Twitter sx={{  color: "#1F276E", margin: { md: ".2rem" } }} />
                    <LinkedIn sx={{  color: "#1F276E", margin: { md: ".2rem" } }} />

                </Box>
            </Box>
        </Box>
    )
}

export default Footer
