import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Musings from "./musings/Musings";
import Post from "./musings/Post";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Toggler from "./home/Toggler";
import { POST_LIST } from './musings/posts/postlist';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return <>
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/musings'} element={<Musings/>}/>

                  {
                     Object.keys(POST_LIST).map(key => {
                        console.log(key);
                        return (
                           <Route exact path={`/musings/${key}`} element={<Post postName={key} />}/>
                        )
                     })
                  }

               </Routes>
            </Grid>
            <div style={{ postiton: 'fixed', top: '0', left: '0', transform: 'translate(calc(100% - 4rem), -2rem)', zIndex: '100'}}>
               <Toggler darkMode={darkMode} handleClick={handleClick} />
            </div>
         </Grid>
      </Box>
   </>

}

