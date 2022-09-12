import {Box} from "@mui/material";
import styles from './Post.module.scss';
import ReactMarkdown from 'react-markdown'
import { POST_LIST } from "./posts/postlist";

export default function Post({ postName }) {
    return <>
        {/* <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
            fontSize={'1rem'}>
            <i className={classNames(iconClass, styles.red)}/>
            <i className={classNames(iconClass, styles.amber)}/>
            <i className={classNames(iconClass, styles.green)}/>
        </Box> */}
        <Box component={'main'} display={'flex'} flexDirection='column' alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 250px)'}>
            <Box component={'section'} style={{backgroundColor: '#27242f', padding: '0 2.75rem 2.75rem 2.75rem'}} 
                className={styles.shadowed} width={{xs: '80%', md: '60%'}} borderRadius={'0.5rem'} mb={'4rem'}>
                <ReactMarkdown className={styles.Post}>
                    {POST_LIST[postName].text}
                </ReactMarkdown>

            </Box>
        </Box>
    </>
}