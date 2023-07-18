import React, {useContext} from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";
import { useParams } from 'react-router-dom';
import { GlobalProjectsContext, } from '../HandlingContext/ProjectsContext';

const AboutProject = () => {
  const { completeProjectsData } = useContext(GlobalProjectsContext);
  const { id } = useParams();
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const project = completeProjectsData.filter(project => project.id === id)[0];

  React.useEffect(() => {
    const resize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <Container maxWidth="md" sx={{ minWidth:"300px", margin:"auto", mb:2 }}>
      <Typography variant="h4" align="center" gutterBottom>
      {project.title}
      </Typography>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Brief
          </Typography>
          <Typography variant="body1">
            {project.smalldesc}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px", marginTop:"20px" }}>
          <Typography variant="h5" gutterBottom>
            Abstract
          </Typography>
          <Typography variant="body1">
            {project.desc}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px", marginTop:"20px" }}>
          <Typography variant="h5" gutterBottom>
            Tech Stack Used in Project
          </Typography>
          {project.stack.map((item)=><Typography variant="body1">
            {item}
          </Typography>)}
          <Typography variant="h5" gutterBottom sx={{mt:2}}>
            Project Type/level
          </Typography><Typography>
          {project.type}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{mt:2}}>
            Project Cost/Price
          </Typography><Typography>
          ₹ {project.price}
          </Typography>
        </Paper>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Video
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {/* Your video component or embed code */}
              <iframe
                width={innerWidth < 768 ? "100%" : "70%"}
                height={innerWidth < 768 ? "85%" : window.innerHeight * 0.45}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                // style={{minWidth:"300px", minHeight:"200px"}}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Features/Deliverables
            </Typography>
            <ul>
            {project.features.map((item) => {
                return <li key={item}>{item}</li>
              })}
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              FAQs
            </Typography>
            <ul>{project.faq.map(item=>{
              return <li key={item.q+item.a}>
                <Typography variant="h6" gutterBottom>{item.q}</Typography>
                <Typography variant="body1" gutterBottom>{item.a}</Typography>
              </li>
            })}</ul>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom>
              For any inquiries, please contact us through:
            </Typography>
            <ul>
              <li><Typography variant="h6" gutterBottom>WhatsApp: +91-8218629990</Typography></li>
              <li><Typography variant="h6" gutterBottom>Email: dk901694@gmail.com</Typography></li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
     </Container>
  );
};

export default AboutProject;
