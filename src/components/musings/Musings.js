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
      <Box component={'main'} display={'flex'} flexDirection='column' alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 500px)'}>
         
         {
            Object.keys(POST_LIST).map(key => {
               return (
                  <Link to={`/musings/${key}`} style={{width: '80%', display: 'flex', justifyContent: 'center'}}>
                     <PostBlock data={{...POST_LIST[key], author: "David Angell"}} />
                  </Link>
               )
            })
         }
      </Box>
   </>
}