import Link from 'next/link';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../../Firebase/firebaseConfig';
import { toast } from 'react-toastify';
import Footer from '../Components/Footer';



const Login = () => {

  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  const loginUser = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setIsLoading(false);
        toast.success('Successfully Login....');
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
        // ..
      });
  }


  return (

     <>
     
     <Navbar/>
    <Grid container >
      <Grid item md={6} xs={12} marginTop="5rem">
        <Box marginTop={{ xs: "2rem", md: "3rem" }} marginLeft={{ xs: "1.5rem", md: "3rem" }}>
          <Typography sx={{ color: "#1F276E", textDecoration: "underline", fontSize: { md: "4rem", xs: "2rem" }, fontWeight: { md: "Bold", xs: "bold" } }}>SignIn  to<br /> The  Event Walla</Typography>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} marginTop="5rem">
        <Box marginTop={{ xs: "1rem", md: "2.5rem" }} marginLeft={{ xs: "1.5rem", md: "3rem" }}>

        </Box>


        <Container>
          <Container>
            <label htmlFor=""><Typography variant="h6">Your email</Typography></label>
            <input type="email" name="" id="" placeholder="name@example.com" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} value={Email} onChange={(e) => SetEmail(e.target.value)} />

            <label htmlFor=""><Typography variant="h6" marginTop="1rem">Password</Typography></label>
            <input type="password" placeholder="password" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} value={Password} onChange={(e) => SetPassword(e.target.value)} />
          </Container>

          <Container sx={{ marginTop: "1rem", marginLeft: { xs: "0rem", md: "0rem" } }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

            <Button variant="outlined" sx={{ fontWeight: "bold", marginLeft: { xs: "0rem", md: "8.6rem" } }}>
              <Link href="/lostpass" passHref>
                <Typography style={{ textDecoration: "none", color: "#00778D" }}>Lost Password?</Typography>
              </Link>
            </Button>
          </Container>

          <Button variant="contained" sx={{ marginTop: "0rem", background: "#1F276E", margin: '1.5rem', color: "white", textAlign: "center", alignItems: "center", padding: ".8rem", width: { xs: "80%", md: "70%" } }} onClick={loginUser} >
            Login to your Account
          </Button>

          <Box display="flex" marginTop="-1rem" sx={{ marginLeft: { xs: "1rem", md: "1.7rem" } }}>
            <Typography marginTop="1rem">Not Registered?</Typography>
            <Link href='./SignUp'>
              <Button sx={{ color: "#1F276E", fontWeight: "bold", padding: ".5rem", marginTop: ".5rem" }}>SignUp here</Button>
            </Link>
          </Box>
        </Container>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
}

export default Login;
