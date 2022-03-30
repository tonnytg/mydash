import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";

export default function MuiFadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useNavigate();
    function handleSubmit(e:any) {
        e.preventDefault();
        history(e.target.id);
    }

    return (
        <div>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem id="/" onClick={handleSubmit}>Home</MenuItem>
                <MenuItem id="sobre" onClick={handleSubmit}>My account</MenuItem>
                <MenuItem id="logout" onClick={handleSubmit}>Logout</MenuItem>
            </Menu>
                <IconButton
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon style={{ color: '#ffffff' }}/>
                </IconButton>
        </div>
    );
}
