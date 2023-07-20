import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';

import { ProjectsData } from '../ProjectsData';

const ProjectIdeas = () => {
  const [selectedDomain, setSelectedDomain] = useState('Python');

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const renderProjectsTable = (level) => {
    const projects = ProjectsData[selectedDomain][level];

    if (!projects || projects.length === 0) {
      return <Typography variant="body2">No projects available.</Typography>;
    }
  return (<>
    <Typography variant="h5">{level} {selectedDomain} Project Ideas</Typography>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <ListItemText primary=
          <Typography variant="body1">{project}</Typography> />
          </ListItem>
        ))}
      </List></>
    );
  };

  return (
    <Container maxWidth="md" sx={{ margin: '70px auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Project Ideas
      </Typography>

      <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
        <Select value={selectedDomain} onChange={handleDomainChange}>
          {Object.keys(ProjectsData).map((domain) => (
            <MenuItem key={domain} value={domain}>
              {domain}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <Typography variant="h5" align='center' gutterBottom>
        {selectedDomain} Project Ideas
      </Typography> */}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          {renderProjectsTable('Mini')}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          {renderProjectsTable('Intermediate')}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          {renderProjectsTable('Advance')}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{m:'30px auto'}}>
        <Button
          variant="contained"
          color="primary"
          href="https://wa.me/918218629990"
          target="_blank"
        >
          Click here to get Help with Project
        </Button></Grid>
    </Container>
  );
};

export default ProjectIdeas;
