import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import classNames from 'classnames';
import { BrowserView, MobileView } from 'react-device-detect';

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Musings',
        to: '/musings',
        active: 'musings'
    }
]

export default function Navbar() {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return <>
        <BrowserView>
            <Box component={'nav'} width={'90%'} style={{marginLeft: '5%', marginTop: '4rem'}}>
                <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                    gap={{xs: '3rem', md: '6rem'}} fontSize={'1rem'}>
                    {links.map((link, index) => (
                        <Box key={index} component={'li'} className={classNames((link.active.includes(active) && !link.type) && Style.active)}
                            sx={{borderImageSource: info.gradient}}>
                            <Link to={link.to} onClick={() => setActive(link.active)} style={{textAlign: 'center'}}>
                                {!link.type && <p style={{paddingBottom: '0.5rem'}} className={Style.list}>{link.name}</p>}
                                {link.type && <h1 style={{fontSize: '3.5rem', transform: 'none !important'}}>{link.name}</h1>}
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
        </BrowserView>
        <MobileView>
        <Box component={'nav'} width={'90%'} style={{marginLeft: '5%', marginTop: '4rem'}}>
                <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                    gap={{xs: '3rem', md: '6rem'}} fontSize={'1rem'}>
                    {links.map((link, index) => (
                        <Box key={index} component={'li'} className={classNames((link.active.includes(active) && !link.type) && Style.active)}
                            sx={{borderImageSource: info.gradient}}>
                            <Link to={link.to} onClick={() => setActive(link.active)} style={{textAlign: 'center'}}>
                                {!link.type && 
                                    <p style={{paddingBottom: '0.5rem'}} className={Style.list}>{link.name}</p>
                                }
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
        </MobileView>
    </>
}