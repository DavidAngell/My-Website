import {Box} from "@mui/material";
import styles from './PostBlock.module.scss';
import { FiCalendar, FiUser } from 'react-icons/fi'
import classNames from "classnames";
import {info} from "../../info/Info";

const iconClass = "fa fa-circle";

export default function PostBlock(post) {
    return <>
        {/* <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
            fontSize={'1rem'}>
            <i className={classNames(iconClass, styles.red)}/>
            <i className={classNames(iconClass, styles.amber)}/>
            <i className={classNames(iconClass, styles.green)}/>
        </Box> */}
        <Box component={'section'} className={classNames(styles.PostBlock, styles.shadowed)} width={{xs: '100%', md: '80%'}} borderRadius={'0.5rem'} mt={'0rem'} mb={'1.5rem'}>
            <a className={styles.post}>
                <strong style={{color: info.baseColor}}>{post.data.title}</strong>
                <p>{post.data.subtitle}</p>
                <ul>
                    <li>
                        <FiCalendar />
                        <span>{post.data.first_publication_date}</span>
                    </li>
                    <li>
                        <FiUser />
                        <span>{post.data.author}</span>
                    </li>
                </ul>
            </a>
        </Box>
    </>
}