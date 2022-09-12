import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
           width={{xs: '90%', md: '60%'}} borderRadius={'0.5rem'} mb={'3rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box py={{xs: '0.5rem', md: '2rem'}} px={{xs: '1.5rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: '#27242f'}} fontSize={{xs: '1.2rem', md: '1.5rem'}} fontFamily={'Courier New, Courier, monospace'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;