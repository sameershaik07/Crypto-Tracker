import { useState } from 'react';
import "./style.css"
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
export default function AnchorTemporaryDrawer() {
    const [open, setOpen] = useState(false);


    return (
        <div>

            <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon className='menu' /></IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='drawer-links'>
                    <Link to='/' ><p className='link'> Home</p></Link>
                    <Link to='/compare' ><p className='link'> Compare</p></Link>
                    <Link to='/watchlist' ><p className='link'> Watchlist</p></Link>
                    <Link to='/dashboard' ><p className='link'> Dashboard</p></Link>

                </div>
            </Drawer>

        </div>
    );
}
