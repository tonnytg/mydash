import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider} from "@mui/material";
import MuiFadeMenu from "./MuiFadeMenu";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function MuiNavbar() {

    const history = useNavigate();
    function handleSubmit(e:any) {
        e.preventDefault();
        history(e.target.id);
    }

    return (
        <div>
            <Box sx={{ flexGrow: 4 }}>
                <ThemeProvider theme={darkTheme}>
                <AppBar position="absolute">
                    <Toolbar>
                        <MuiFadeMenu />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MyDash
                        </Typography>
                        <Button color="inherit" id="login" onClick={handleSubmit}>Login</Button>
                    </Toolbar>
                </AppBar>
                </ThemeProvider>
            </Box>
        </div>
    );
}
