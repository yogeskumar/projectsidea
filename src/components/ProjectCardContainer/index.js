import React, { useContext, useEffect, useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import ProjectCard from '../ProjectCard';
import { GlobalProjectsContext } from '../../HandlingContext/ProjectsContext';
import { GlobalDomainsContext } from '../../HandlingContext/DomainsContext';
import { GlobalPricesContext } from '../../HandlingContext/PricesContext';

const ProjectCardContainer = () => {
  const { completeProjectsData } = useContext(GlobalProjectsContext);
  const { globalDomains } = useContext(GlobalDomainsContext);
  const { globalPrices } = useContext(GlobalPricesContext);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {

    // if(globalDomains.includes('all') && globalPrices.includes("all")){
    //   setFilteredProjects([...completeProjectsData])
    //   return 
    // }
    // if(globalDomains.includes('all')  && !globalPrices.includes("all")){
    //   const np = completeProjectsData.filter(project=>{
    //     return globalPrices.includes(project.type.toLowerCase())
    //   })
    //   setFilteredProjects(np)
    //   return 
    // }
    // if(globalPrices.includes("all") && !globalDomains.includes("all")){
    //   const np = completeProjectsData.filter(project=>{
    //     project.stack.some(value=>globalDomains.includes(value))
    //   })
    //   setFilteredProjects(np)
    //   return 
    // }
    const filteredData = completeProjectsData.filter((project) => {
      const isMatchingDomain =
        globalDomains.includes('all') || project.stack.some(value=>globalDomains.includes(value.toLowerCase()));
      const isMatchingPrice =
        globalPrices.includes('all') || globalPrices.includes(project.type.toLowerCase());
      return isMatchingDomain && isMatchingPrice;
    });
    setFilteredProjects(filteredData);
  }, [completeProjectsData, globalDomains, globalPrices]);

  return (
    <Container maxWidth="md" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectCardContainer;
