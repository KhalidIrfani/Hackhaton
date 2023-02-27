import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Typography } from '@mui/material';
import { db } from '../../Firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore'; // added Timestamp import
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

interface EventData { // added interface definition
  eventID: string;
  eventTitle: string;
  eventDate: any; // change type as needed
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
  creator: string;
  attendees: string[];
}

const JoinEvents = () => {

  const [eventID, setEventID] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [eventData, setEventData] = useState<EventData[]>([]);

  //add event data
  const addData = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const dataRef = collection(db, 'event');

      const newData = {
        eventID: eventID,
        eventTitle: eventTitle,
        eventDate: Timestamp.now(),
        eventTime: eventTime,
        eventLocation: eventLocation,
        eventDescription: eventDescription,
        creator: currentUser.email,
        attendees: [],
      };

      const doc = await addDoc(dataRef, newData);
      console.log('New event added with ID:', doc.id);
      // Clear the form inputs
      setEventID("");
      setEventTitle("");
      setEventTime("");
      setEventLocation("");
      setEventDescription("");
      setIsLoading(false);
      toast.success('Successfully Create Event....');
    } catch (error) {
      console.error('Error adding event: ', error);
      setIsLoading(false);
      toast.error('Failed to Create Event');
    }
  };
 
  return (
    <>
    <Navbar/>
      <Grid container >
        <Grid item md={6} xs={12} marginTop="7rem">
          <Box marginTop={{ xs: "2rem", md: "3rem" }} marginLeft={{ xs: "1.5rem", md: "3rem" }}>
            <Typography sx={{ color: "#1F276E", textDecoration: "underline", fontSize: { md: "4rem", xs: "2rem" }, fontWeight: { md: "Bold", xs: "bold" } }}>Create New Event in  <br /> The  Event Walla</Typography>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} marginTop="-2rem">
          <Box marginTop={{ xs: "1rem", md: "2.5rem" }} marginLeft={{ xs: "1.5rem", md: "3rem" }}>

          </Box>



          <Container>
            <Container>
              <label htmlFor=""><Typography variant="h6">ID</Typography></label>
              <input type="id" name="" id="" placeholder="get Id" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} value={eventID} onChange={(e) => setEventID(e.target.value)} />
              <label htmlFor=""><Typography variant="h6">Title</Typography></label>
              <input type="title" name="" id="" placeholder="Add Event title" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
              <label htmlFor=""><Typography variant="h6">Date and Time</Typography></label>
              <input type="datetime-local" id="datetime" name="datetime" placeholder="Date and Time" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} />
              <label htmlFor=""><Typography variant="h6">Location</Typography></label>
              <input type="park" name="" id="" placeholder=" centeral Park...." style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
              <label htmlFor=""><Typography variant="h6" marginTop="1rem">Discription</Typography></label>
              <input type="discription" placeholder="add Discription" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
              <label htmlFor=""><Typography variant="h6" marginTop="1rem">Creator</Typography></label>
              <input type="creator" placeholder="Event creator" style={{ padding: "1rem", borderRadius: ".5rem", width: "70%" }} onChange={(e) => (e.target.value)} />

            </Container>

            <Container sx={{ marginTop: "1rem", marginLeft: { xs: "0rem", md: "0rem" } }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </Container>

            <Button variant="contained" sx={{ marginTop: "0rem", background: "#1F276E", margin: '1.5rem', color: "white", textAlign: "center", alignItems: "center", padding: ".8rem", width: { xs: "80%", md: "70%" }, letterSpacing: ".2rem" }} onClick={addData} >
              Create  Event
            </Button>

          </Container>
        </Grid>
      </Grid>
      <Footer/>
    </>
  )
}

export default JoinEvents