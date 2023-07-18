// import React from 'react';
// import { Typography, Container, Grid, TextField, Button } from '@mui/material';

// const ContactUs = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your contact form submission logic here
//   };

//   return (
//     <Container maxWidth="md" sx={{ marginTop: '40px' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Contact Us
//       </Typography>

//       <Grid container spacing={3} sx={{ marginTop: '20px' }}>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h5" gutterBottom>
//             Get in Touch
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             We would love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             You can also reach us through our email or WhatsApp number mentioned below.
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Email: contact@pythonhub.com
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             WhatsApp: +1234567890
//           </Typography>
//         </Grid>
//         {/* <Grid item xs={12} sm={6}>
//           <Typography variant="h5" gutterBottom>
//             Contact Form
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField name="name" label="Your Name" variant="outlined" fullWidth required />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField name="email" label="Your Email" variant="outlined" fullWidth required />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="message"
//                   label="Your Message"
//                   variant="outlined"
//                   multiline
//                   rows={4}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant="contained" color="primary" type="submit">
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid> */}
//       </Grid>
//     </Container>
//   );
// };

// export default ContactUs;

import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '40px'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{margin:"20px auto"}}>
          <Paper elevation={3} sx={{ padding: '10px', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              WhatsApp
            </Typography>
            <div style={{width:"100%", height:"2px", backgroundColor:"black"}}></div>
            <Typography variant="h6" gutterBottom>
              +91-8218629990
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} sx={{margin:"20px auto"}}>
          <Paper elevation={3} sx={{ padding: '10px', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Email
            </Typography>
            <div style={{width:"100%", height:"2px", backgroundColor:"black"}}></div>
            <Typography variant="h6" gutterBottom>
              dk901694@gmail.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
