import React, { useState } from 'react';
import { Typography, Container, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const CustomProject = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    whatsapp: '',
    email: '',
    reason: '',
  });

  const [projectDetails, setProjectDetails] = useState({
    description: '',
    techStack: '',
    features: '',
    projectType: '',
    deadline: '',
    otherDetails: '',
  });

  const handleUserDetailsChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleProjectDetailsChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('User Details:', userDetails);
    console.log('Project Details:', projectDetails);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Project Request Form
      </Typography>

      {/* Show details about why the user should buy projects from you */}
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan, mauris vel commodo vestibulum, urna
        dui efficitur orci, vel gravida arcu neque sed elit. Aenean in nisi a nulla scelerisque consequat. Integer
        ultrices tristique tortor, id feugiat erat iaculis et. Nulla auctor semper lacus non malesuada. Morbi sit amet
        ipsum ut mi volutpat sagittis. In ullamcorper, nisl in gravida pulvinar, mauris mauris tempor ipsum, eu
        porttitor odio leo at lacus.
      </Typography>

      {/* Project Request Form */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          {/* User Details */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              User Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={userDetails.name}
              onChange={handleUserDetailsChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="whatsapp"
              label="WhatsApp Mobile Number"
              variant="outlined"
              fullWidth
              value={userDetails.whatsapp}
              onChange={handleUserDetailsChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={userDetails.email}
              onChange={handleUserDetailsChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="reason"
              label="Reason for Project"
              variant="outlined"
              fullWidth
              value={userDetails.reason}
              onChange={handleUserDetailsChange}
            />
          </Grid>

          {/* Project Details */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Project Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description of Project"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={projectDetails.description}
              onChange={handleProjectDetailsChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="techStack"
              label="Tech Stack"
              variant="outlined"
              fullWidth
              value={projectDetails.techStack}
              onChange={handleProjectDetailsChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="features"
              label="Features of the Project"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={projectDetails.features}
              onChange={handleProjectDetailsChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="projectType-label">Type of Project</InputLabel>
              <Select
                name="projectType"
                labelId="projectType-label"
                label="Type of Project"
                value={projectDetails.projectType}
                onChange={handleProjectDetailsChange}
              >
                <MenuItem value="mini">Mini Project (2k-4k)</MenuItem>
                <MenuItem value="intermediate">Intermediate Project (4k-8k)</MenuItem>
                <MenuItem value="advanced">Advanced Project (8k+)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="deadline"
              label="Deadline for the Project"
              variant="outlined"
              fullWidth
              value={projectDetails.deadline}
              onChange={handleProjectDetailsChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="otherDetails"
              label="Other Details"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={projectDetails.otherDetails}
              onChange={handleProjectDetailsChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CustomProject;

