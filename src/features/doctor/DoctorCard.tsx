import { Doctor } from "../../app/models/user";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

interface Props {
    doctor: Doctor;
}

export default function DoctorCard({doctor}: Props) {
    return(
        <Card sx={{ maxWidth: 345 }} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {doctor._id.fullName[0]}
                    </Avatar>
                }
                title={doctor._id.fullName}
            />
            <CardMedia
                sx={{ height: 160}}
                image="https://e7.pngegg.com/pngimages/990/181/png-clipart-medicine-physician-stethoscope-the-doctor-miscellaneous-child.png"
                title={doctor._id.fullName}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                    {doctor.specialtyID.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Link to={`/doctor-detail/${doctor._id._id}`}>
                            <IconButton aria-label="doctor information">
                                <InfoIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <Button variant="contained">
                            Đặt lịch
                        </Button>
                    </Grid>
                </Grid>
                
                
            </CardActions>
        </Card>
    )
}