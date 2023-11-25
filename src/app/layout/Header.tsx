import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Avatar, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


export default function AppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <Container sx={{ width: '100%',  border: '2px solid #ccc', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-evenly' }}>
            <Grid>
                <Typography variant='h4' fontFamily={'Ephesis, cursive'}>
                    BookingApp
                </Typography>
            </Grid>
            <Grid>
                <Link to={'/doctor'}>
                    <Button startIcon={<VaccinesIcon/>}>Doctor</Button>
                </Link>
                <Link to={'/clinic'}>
                    <Button startIcon={<LocalHospitalIcon/>}>Clinic</Button>
                </Link>
                <Link to={'/schedule'}>
                    <Button startIcon={<CalendarMonthIcon/>}>Schedule</Button>
                </Link>
            </Grid>
            <Grid>
                {isLoggedIn ? (
                    <>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                    
                ) : (
                    <Link to={'/login'}>
                        <Button>Login</Button>
                    </Link>
                )}
                
            </Grid>
        </Container>
    );
}
