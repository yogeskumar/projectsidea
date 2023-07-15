import React, { useState, useContext } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import {GlobalPricesContext} from "../../HandlingContext/PricesContext";
import {GlobalDomainsContext} from "../../HandlingContext/DomainsContext";

const domains = [
  { name: "All", pricing: "All" },
  { name: "ML AI", pricing: "Mini projects (1k INR to 4k INR)" },
  {
    name: "Web development",
    pricing: "Intermediate Projects (4k INR to 8k INR)",
  },
  { name: "Mobile development", pricing: "Advanced Projects (8k+ INR)" },
  { name: "ComputerVision", pricing: "" },
  { name: "WebScraping Automation", pricing: "" },
];

const TableWithCheckbox = () => {
  const {globalDomains, setGlobalDomains} = useContext(GlobalDomainsContext)
  const {globalPrices, setGlobalPrices} = useContext(GlobalPricesContext)
  // const [selectedDomains, setSelectedDomains] = useState(["all"]);
  // const [selectedPricings, setSelectedPricings] = useState(["all"]);
  const [isFilters, setFilters] = React.useState(false);
  const handleFilterButtonToggle = () => {
    setFilters(!isFilters);
  };

  const handleDomainChange = (event, domain) => {
    if (domain === "all") {
      setGlobalDomains(["all"]);
    } else {
      const updatedSelectedDomains = globalDomains.includes(domain) 
        ? globalDomains.filter(item => item !== domain) 
        : [...globalDomains, domain.split(' ')[0].toLowerCase()];

      if(updatedSelectedDomains.includes('all') && updatedSelectedDomains.length===1){
        setGlobalDomains(['all'])
    }else{
      const removeALL = updatedSelectedDomains.filter(
        (item) => item !== "all"
      );
        setGlobalDomains(removeALL)
    }
    if(updatedSelectedDomains.length===0){
      setGlobalDomains(['all'])
    }
    //   if(removeALL.length!==0){
    //   setGlobalDomains(removeALL);}
    // }
      // else{
      //   setGlobalDomains(['all'])
      // }
    }
    console.log("Global domains->",globalDomains)
  };

  const handlePricingChange = (event, pricing) => {
    if (pricing === "all") {
      setGlobalPrices(["all"]);
    } else {
      // const filteredArr = [...globalPrices, pricing.split(' ')[0].toLowerCase()];
      // const updatedSelectedPrices = filteredArr.filter(
      //   (item) => item !== "all"
      // );
      // setGlobalPrices(updatedSelectedPrices);
      const updatedSelectedPrices = globalPrices.includes(pricing) 
      ? globalPrices.filter(item => item !== pricing) 
      : [...globalPrices, pricing.split(' ')[0].toLowerCase()];

    if(updatedSelectedPrices.includes('all') && updatedSelectedPrices.length===1){
      setGlobalPrices(['all'])
    }
    else{
    const removeALL = updatedSelectedPrices.filter(
      (item) => item !== "all")
      setGlobalPrices(removeALL)
    }
    if(updatedSelectedPrices.length===0){
      setGlobalPrices(['all'])
    }
    }
    console.log("Global prices->", globalPrices)
  };
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Button
        variant={isFilters ? "outlined" : "contained"}
        startIcon={<FilterListOutlinedIcon />}
        onClick={handleFilterButtonToggle}
        sx={{
          margin: "auto",
          width: innerWidth < 768 ? "80%" : "50%",
        }}
      >
        Filters
      </Button>
      <Collapse in={isFilters} timeout="auto" unmountOnExit>
        <TableContainer>
          <Table
            sx={{ width: innerWidth < 768 ? "98%" : "50%", margin: "auto" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Domain
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Pricing
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {domains.map((domain) => (
                <TableRow key={domain.name}>
                  <TableCell>
                    <Checkbox
                      checked={globalDomains.includes(domain.name.split(' ')[0].toLowerCase()) || globalDomains.includes(['all'])}
                      onChange={(event) =>
                        handleDomainChange(event, domain.name.split(' ')[0].toLowerCase())
                      }
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    {domain.name}
                  </TableCell>
                  <TableCell>
                    {domain.pricing.length !== 0 ? (
                      <>
                        <Checkbox
                          checked={globalPrices.includes(domain.pricing.split(' ')[0].toLocaleLowerCase())}
                          onChange={(event) =>
                            handlePricingChange(event, domain.pricing.split(' ')[0].toLocaleLowerCase())
                          }
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        {domain.pricing}
                      </>
                    ) : (
                      <>{domain.pricing}</>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </div>
  );
};

export default TableWithCheckbox;
