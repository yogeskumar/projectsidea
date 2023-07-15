import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GlobalIdContext } from '../../HandlingContext/IdContext';

export default function ProjectCard({project}) {
  const { id, setId } = React.useContext(GlobalIdContext);
    const navigate = useNavigate();
    const setGlobalId = (projectId) => {
      setId(projectId);
      // navigate(`/aboutproject/${project.id}`);
      navigate(`/aboutproject/${projectId}`);
    };

    return (
        <Grid item xs={12} sm={6} md={4} key={project.id} onClick={()=>setGlobalId(project.id)} sx={{pointer:"cursor"}}>
            <Card sx={{ minWidth: 280, maxWidth: 300, margin: "10px auto", pointer:"cursor",  }}>
             <CardMedia
                 component="img"
                 height="auto"
                 image={project.image}
             />
              {/* <CardMedia component="img" image={project.imageUrl} alt={project.title} height="140" /> */}
              <CardContent sx={{height:235, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.smalldesc}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Project Type:</strong> {project.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Tech Stack:</strong> {project.stack.map(item=>{
                      return <span key={item}>{item} </span>
                    })}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Price:</strong> {project.price}
                  </Typography>
                </Box>
               <Button variant="contained"
                 sx={{ width: "100%", mb:0 }}>Click for more info</Button>
              </CardContent>
            </Card>
          </Grid>
    );
}
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

// export default function ProjectCard() {
//     const navigate = useNavigate();
//     const setGlobalId = (projectId) => {
//       navigate(`/aboutproject/${projectId}`);
//     };

//     return (
//         <Card sx={{ minWidth: 280, maxWidth: 300, margin: "10px auto" }}>

//             <CardMedia
//                 component="img"
//                 height="auto"
//                 image="https://www.worldanimalprotection.ca/sites/default/files/styles/322x405/public/media/int_files/1014704.jpg.webp?h=c814a7a3&itok=U57Sj6FL"
//                 alt="Paella dish"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     This impressive paella is a perfect party dish and a fun meal to cook
//                     together with your guests. Add 1 cup of frozen peas along with the mussels,
//                     if you like.
//                 </Typography>
//             </CardContent>

//             <Button variant="contained"
//                 onClick={() => setGlobalId(123)}
//                 sx={{ width: "100%" }}>Contained</Button>
//         </Card>
//     );
// }