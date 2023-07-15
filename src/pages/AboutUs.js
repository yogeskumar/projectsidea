import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>

      {/* Introduction */}
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            We are a team of dedicated developers running the biggest developers community page in the world on Instagram.
            Our page name is Python.hub, and we take pride in serving a vibrant community of Python enthusiasts with over
            1.5 million followers. Our mission is to foster learning, collaboration, and innovation in the Python
            ecosystem.
          </Typography>
        </Grid>

        {/* Community Highlights */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Community Highlights
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Engaging Content
            </Typography>
            <Typography variant="body2" gutterBottom>
              We strive to provide engaging and informative content to our community. From beginner-friendly tutorials to
              advanced programming concepts, we cover a wide range of topics to cater to programmers at all levels.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Collaborative Learning
            </Typography>
            <Typography variant="body2" gutterBottom>
              We believe in the power of collaboration. Our community members actively participate in discussions, share
              their knowledge, and help each other grow. Together, we create a supportive and inclusive learning
              environment.
            </Typography>
          </Paper>
        </Grid>

        {/* Educational Initiatives */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Educational Initiatives
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            We are committed to fostering learning and skill development among Python enthusiasts. Our educational
            initiatives include:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" gutterBottom>
                Webinars and Workshops: We organize regular webinars and workshops conducted by industry experts,
                covering various aspects of Python programming and related technologies.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" gutterBottom>
                Coding Challenges: We host coding challenges to encourage community members to practice their skills,
                solve problems, and showcase their expertise.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" gutterBottom>
                Learning Resources: Our website offers a wealth of learning resources, including tutorials, guides, and
                curated content, to help developers enhance their Python knowledge.
              </Typography>
            </li>
          </ul>
        </Grid>

        {/* Community Impact */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Community Impact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Python.hub has made a significant impact on the Python community, including:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" gutterBottom>
                Inspiring Developers: We inspire developers to explore the possibilities of Python and unleash their
                creativity by showcasing innovative projects and success stories.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" gutterBottom>
                Empowering Beginners: We provide resources and guidance to beginners, helping them embark on their journey
                to learn and master Python programming.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" gutterBottom>
                Industry Connections: Through our network and collaborations, we connect developers with industry
                professionals, opening doors to career opportunities and mentorship.
              </Typography>
            </li>
          </ul>
        </Grid>

        {/* Media Gallery */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Media Gallery
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <img src="/path/to/image1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/path/to/image2.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/path/to/image3.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
        </Grid>

        {/* Videos */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Videos
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            {/* Your video component or embed code */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            {/* Your video component or embed code */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;

