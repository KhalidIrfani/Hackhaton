import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';



interface Events {
    Email: string;
    Password: string;
}

const SignUp = () => {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [cPassword, SetCPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const registerUser = (e:any) => {
        e.preventDefault();
        if (Password !== cPassword) { toast.error("Password is not same to confir") }
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false);
                toast.success('Successfully Registered....');
                router.push("./Logs");
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false);
            });


    }
    return (
        <>
        <Navbar/>
        <Grid container >
            <Grid item md={6} xs={12} marginTop="7rem">
                <Box marginTop={{ xs: "2rem", md: "3rem" }} marginLeft={{ xs: "1.5rem", md: "3rem" }}>
                    <Typography sx={{ color: "#1F276E", textDecoration: "underline", fontSize: { md: "4rem", xs: "2rem" }, fontWeight: { md: "Bold", xs: "bold" } }}>Sign Up  <br /> The  Event Walla</Typography>
                </Box>
            </Grid>

            <Grid item md={6} xs={12} marginTop="2rem">
                <Box marginTop={{ xs: "1rem", md: "2.5rem" }} marginLeft={{ xs: "1.5rem", md: "3rem" }}>

                </Box>

                <Container>
                    <Container>
                        <label htmlFor=""  ><h4>Your email</h4></label>
                        <input type="email" name="" id="" placeholder="name@example.com" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%", marginTop: "-2rem" }} value={Email} onChange={(e) => SetEmail(e.target.value)} />
                        <label htmlFor=""><h4>Password</h4></label>
                        <input type="password" placeholder="password" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%", marginTop: "-2rem" }} value={Password} onChange={(e) => SetPassword(e.target.value)} />
                        <label htmlFor=""><h4>Confirm Password</h4></label>
                        <input type="password" placeholder="password" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%", marginTop: "-2rem" }} value={cPassword} onChange={(e) => SetCPassword(e.target.value)} />
                    </Container>

                    <Container sx={{ marginTop: "1rem", marginLeft: { xs: "0rem", md: "0rem" } }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                    </Container>

                    <Button variant="contained" sx={{ marginTop: "0rem", background: "#1F276E", margin: '1.5rem', color: "white", textAlign: "center", alignItems: "center", padding: ".8rem", width: { xs: "80%", md: "70%" } }} onClick={registerUser}   >
                        Login to your Account
                    </Button>

                    <Box display="flex" marginTop="-1rem" sx={{ marginLeft: { xs: "1rem", md: "1.7rem" } }}>
                        <Typography marginTop="1rem">Already Registered?</Typography>
                        <Link href='./Logs'>
                            <Button sx={{ color: "#1F276E", fontWeight: "bold", padding: ".5rem", marginTop: ".5rem" }}>LogIn here</Button>
                        </Link>
                    </Box>
                </Container>
            </Grid>
        </Grid>
        <Footer/>
        </>
    );
}
export default SignUp;
