import { Box, Tabs, Tab } from '@mui/material';
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from '../components/Home';


function home() {

  let navigate = useNavigate();


  return (
    <Box>
      <Box sx={{ width: '100%', display: "flex", justifyContent: "flex-end", marginBottom: "50px" }}>
        <Tabs

          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab onClick={() => { navigate("/") }} label="Home" />
          <Tab onClick={() => { navigate("/about") }} label="About" />
        </Tabs>
      </Box>



      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<h1>about</h1>} />
      </Routes>


    </Box>

  );

}

export default home