import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
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
    return (<>{innerWidth > 768 ? <>
        <Box sx={{ flexGrow: 1, color: "white", backgroundColor: "#1976d2", position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
            <AppBar position="static" sx={{ paddingRight: 10, paddingLeft: 10 }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, cursor:"pointer" }} onClick={()=>navigate("/")}>
                        Home
                    </Typography>
                    {/* <Button color="inherit" onClick={()=>navigate("/customproject")}>Request a Project</Button> */}
                    <Button color="inherit" onClick={()=>navigate("/projectideas")}>Get Project Ideas</Button>
                    <Button color="inherit" onClick={()=>navigate("/bookasession")}>Book a session</Button>
                    <Button color="inherit" onClick={()=>navigate("/contactus")}>Contact Us</Button>
                    {/* <Button color="inherit" onClick={()=>navigate("/aboutus")}>About Us</Button> */}
                    {/* <Button color="inherit" onClick={()=>navigate("/faq")}>FAQs</Button> */}
                </Toolbar>
            </AppBar>
        </Box></> :
        <><Box sx={{ flexGrow: 1, color: "white", backgroundColor: "#1976d2", position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleMenuToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                <List component="nav">
                    <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle();
                            navigate("/")}} sx={{ width: "100%", cursor: "pointer" }}>Home</Typography>
                    </ListItem>
                    {/* <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle()
                            navigate("/customproject")}} sx={{ width: "100%", cursor: "pointer" }}>Request a Project</Typography>
                    </ListItem> */}
                    <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle()
                            navigate("/projectideas")}} sx={{ width: "100%", cursor: "pointer" }}>Get Project Ideas</Typography>
                    </ListItem>
                    <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle()
                            navigate("/bookasession")}} sx={{ width: "100%", cursor: "pointer" }}>Book a session</Typography>
                    </ListItem>
                    <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle()
                            navigate("/contactus")}} sx={{ width: "100%", cursor: "pointer" }}>Contact Us</Typography>
                    </ListItem>
                    {/* <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle()
                            navigate("/aboutus")}} sx={{ width: "100%", cursor: "pointer" }}>About Us</Typography>
                    </ListItem> */}
                    {/* <ListItem sx={{ '&:hover': { backgroundColor: '#5badff' } }}>
                        <Typography variant="h6" onClick={()=>{handleMenuToggle()
                            navigate("/faq")}} sx={{ width: "100%", cursor: "pointer" }}>FAQs</Typography>
                    </ListItem> */}
                </List>
            </Collapse>
        </Box></>
    }
    </>
    );
}

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             CodeBucks
//             <i className="fas fa-code"></i>
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;