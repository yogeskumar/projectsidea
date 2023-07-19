import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import MentorsFromIndustory from "../components/MentorsFromIndustry";

const BookASession = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Saving Your Time and Enhancing Your Learning
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Did you know that <b>more than 80% of students</b> encounter difficulties when
        learning new coding concepts or encountering errors? It's a common
        challenge, and many students attempt to solve these problems
        independently, which is a commendable habit. However, only a few are
        able to effectively resolve their issues on their own. And even those
        who do often find themselves spending countless hours or even days
        grappling with a seemingly simple error that could be resolved in just
        five minutes.
      </Typography>
      <Grid container justifyContent="center" sx={{m:'30px auto'}}>
        <Button
          variant="contained"
          color="primary"
          href="https://wa.me/918218629990"
          target="_blank"
        >
          Book a Session Now
        </Button>
      </Grid>

      <MentorsFromIndustory/>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        I, too, was once a coding student, and I personally experienced these
        challenges. That's why I've made it my mission to help fellow students
        overcome these hurdles through live sessions.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Time is an invaluable resource in our lives, and with it, we can
        accomplish anything. Recognizing this, we have designed our live
        sessions to efficiently address your coding problems. What might take
        you hours of frustration, we can tackle within minutes, providing you
        with the best possible solutions. And rest assured, we won't simply
        give you the answer—we'll take the time to explain it thoroughly,
        ensuring you grasp the underlying concepts.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        We understand that affordability is important, especially for students.
        That's why our live sessions are available at the most reasonable rate
        of just <b>250 INR per hour</b>. We believe in delivering value for your
        investment, making sure every minute counts.
      </Typography>
      <Grid container justifyContent="center" sx={{m:'30px auto'}}>
        <Button
          variant="contained"
          color="primary"
          href="https://wa.me/918218629990"
          target="_blank"
        >
          Book a Session Now
        </Button>
      </Grid>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Don't waste your precious time overthinking or getting stuck in coding
        dilemmas. Remember, time is the most valuable asset in life. Keep this
        in mind and make prompt decisions to propel your learning forward.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Ready to optimize your coding journey? Contact me on <b>WhatsApp now at
        +91-8218629990</b>. Let's save your time and make coding an enjoyable
        experience.
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px", textAlign:'center' }}>
        Charges- 250/hr
      </Typography>

      <Grid container justifyContent="center" sx={{m:'30px auto'}}>
        <Button
          variant="contained"
          color="primary"
          href="https://wa.me/918218629990"
          target="_blank"
        >
          Book a Session Now
        </Button>
      </Grid>
    </Container>
  );
};

export default BookASession;
