import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDoctor } from "../../app/slice/doctorSlice";
import { fetchClinic } from "../../app/slice/clinicSlice";
import { Button, Grid, Typography } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export default function DoctorDetail() {
    const { id } = useParams<{ id?: string }>();
    const dispatch: AppDispatch = useDispatch();
    const { selectedDoctor, loading, error } = useSelector((state: RootState) => state.doctor);
    const { selectedClinic } = useSelector((state: RootState) => state.clinic);
    useEffect(() => {
        if (id) {
            dispatch(fetchDoctor(id));
          }
    }, [dispatch, id]);
    
    useEffect(() => {
        if (selectedDoctor?.specialtyID.clinicID) {
            dispatch(fetchClinic(selectedDoctor?.specialtyID.clinicID));
          }
    }, [dispatch, selectedDoctor?.specialtyID.clinicID]);
    console.log(selectedClinic);
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    return(
        <Grid>
            <Grid item container alignItems="center" paddingTop='10px'>
                <Grid item xs={3} style={{paddingLeft:'250px'}}>
                    <img
                    src="https://tse3.mm.bing.net/th?id=OIP.OBLJjmVEugV6mDjbZ4bjxgHaFV&pid=Api&P=0&h=180"
                    alt={'Bác sĩ ' + selectedDoctor?._id.fullName}
                    style={{ 
                                width: '120px', 
                                height: '120px', 
                                objectFit: 'cover', 
                                borderRadius: '50%', 
                                overflow: 'hidden',
                            }}
                    />
                </Grid>
                <Grid item xs={9} style={{paddingLeft:'10px'}}>
                    <Typography variant='h5'>
                        Bác sĩ {selectedDoctor?._id.fullName}
                    </Typography>
                    <Typography>
                        Chuyên khoa {selectedDoctor?.specialtyID.name}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center" paddingTop='10px' paddingLeft='250px'>
                <EventAvailableIcon />
                <Typography>
                    Lịch khám
                </Typography>
            </Grid>
            <Grid item>
                <Grid xs={6}>
                    <Button variant="outlined">11:00 - 12:00</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}