import React from 'react';
import Style from './Musings.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { POST_LIST } from './posts/postlist';
import PostBlock from './PostBlock'
import {Link, useLocation} from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Musings() {
   return <>
      <Helmet>
         <title>David Angell: Musings</title>
      </Helmet>
      <Box component={'main'} display={'flex'} flexDirection='column' alignItems={'center'} py={{xs: '0.5rem', md: '2rem'}} px={{xs: '1.5rem', md: '3rem'}}
           justifyContent={'center'} minHeight={'calc(100vh - 500px)'}>
         <Box width={{xs: '100%', md: '80%'}}>
            {
               Object.keys(POST_LIST).map(key => {
                  return (
                     <Link to={`/musings/${key}`} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <PostBlock data={{...POST_LIST[key], author: "David Angell"}} />
                     </Link>
                  )
               })
            }
         </Box>
      </Box>
   </>
}